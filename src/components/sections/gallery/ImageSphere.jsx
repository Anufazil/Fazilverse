import { useState, useEffect, useRef, useCallback } from "react";
import { FaTimes, FaImage } from "react-icons/fa";

// A 3D sphere of photos you can drag to rotate — adapted from a
// TS/shadcn reference component into this project's plain JS setup.
// Core 3D math (Fibonacci sphere distribution, rotation matrices,
// collision-avoidance scaling) is unchanged from the reference;
// changes made while adapting:
//
// 1. TS types/interfaces dropped, plain JS.
// 2. lucide-react's X icon swapped for react-icons (already a
//    dependency here; no reason to add a second icon library for
//    one icon).
// 3. Modal and image-frame styling now use this project's theme
//    tokens (border-line, bg-surface, text-ink-text, etc.) instead
//    of hardcoded white/gray/black, so it matches dark and light
//    mode automatically.
// 4. Missing images (item.image is null/undefined) render a
//    placeholder tile instead of a broken <img>, matching the
//    fallback pattern already used elsewhere in this project's
//    gallery/project cards.
// 5. Respects prefers-reduced-motion: auto-rotate and momentum
//    physics are skipped entirely, and the sphere renders as a
//    static arrangement instead.

const SPHERE_MATH = {
  degreesToRadians: (degrees) => degrees * (Math.PI / 180),
  normalizeAngle: (angle) => {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  },
};

export default function ImageSphere({
  images = [],
  containerSize = 400,
  sphereRadius = 200,
  dragSensitivity = 0.5,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseImageScale = 0.22,
  perspective = 1000,
  autoRotate = true,
  autoRotateSpeed = 0.2,
  className = "",
}) {
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [rotation, setRotation] = useState({ x: 12, y: 15, z: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePositions, setImagePositions] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);
  const velocityRef = useRef(velocity);
  const isDraggingRef = useRef(isDragging);

  useEffect(() => {
    velocityRef.current = velocity;
  }, [velocity]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  const actualSphereRadius = sphereRadius || containerSize * 0.5;
  const baseImageSize = containerSize * baseImageScale;

  const generateSpherePositions = useCallback(() => {
    const positions = [];
    const count = images.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = (2 * Math.PI) / goldenRatio;

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      let phi = inclination * (180 / Math.PI);
      let theta = (azimuth * (180 / Math.PI)) % 360;

      const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35;
      phi = phi < 90 ? Math.max(5, phi - poleBonus) : Math.min(175, phi + poleBonus);
      phi = 15 + (phi / 180) * 150;

      const randomOffset = (Math.random() - 0.5) * 20;
      theta = (theta + randomOffset) % 360;
      phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10));

      positions.push({ theta, phi, radius: actualSphereRadius });
    }

    return positions;
  }, [images.length, actualSphereRadius]);

  const clampRotationSpeed = useCallback(
    (speed) => Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, speed)),
    [maxRotationSpeed]
  );

  const calculateWorldPositions = useCallback(() => {
    const positions = imagePositions.map((pos) => {
      const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
      const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
      const rotXRad = SPHERE_MATH.degreesToRadians(rotation.x);
      const rotYRad = SPHERE_MATH.degreesToRadians(rotation.y);

      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
      let y = pos.radius * Math.cos(phiRad);
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
      x = x1;
      z = z1;

      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
      const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
      y = y2;
      z = z2;

      const fadeZoneStart = -10;
      const fadeZoneEnd = -30;
      const isVisible = z > fadeZoneEnd;
      let fadeOpacity = 1;
      if (z <= fadeZoneStart) {
        fadeOpacity = Math.max(0, (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd));
      }

      const isPoleImage = pos.phi < 30 || pos.phi > 150;
      const distanceFromCenter = Math.sqrt(x * x + y * y);
      const distanceRatio = Math.min(distanceFromCenter / actualSphereRadius, 1);
      const distancePenalty = isPoleImage ? 0.4 : 0.7;
      const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);
      const depthScale = (z + actualSphereRadius) / (2 * actualSphereRadius);
      const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

      return { x, y, z, scale, zIndex: Math.round(1000 + z), isVisible, fadeOpacity };
    });

    const adjusted = [...positions];
    for (let i = 0; i < adjusted.length; i++) {
      const pos = adjusted[i];
      if (!pos.isVisible) continue;

      let adjustedScale = pos.scale;
      const imageSize = baseImageSize * adjustedScale;

      for (let j = 0; j < adjusted.length; j++) {
        if (i === j) continue;
        const other = adjusted[j];
        if (!other.isVisible) continue;

        const otherSize = baseImageSize * other.scale;
        const dx = pos.x - other.x;
        const dy = pos.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = (imageSize + otherSize) / 2 + 25;

        if (distance < minDistance && distance > 0) {
          const overlap = minDistance - distance;
          const reductionFactor = Math.max(0.4, 1 - (overlap / minDistance) * 0.6);
          adjustedScale = Math.min(adjustedScale, adjustedScale * reductionFactor);
        }
      }

      adjusted[i] = { ...pos, scale: Math.max(0.25, adjustedScale) };
    }

    return adjusted;
  }, [imagePositions, rotation, actualSphereRadius, baseImageSize]);

  // Momentum + auto-rotate loop
  useEffect(() => {
    if (reduceMotion) return;

    function animate() {
      if (!isDraggingRef.current) {
        setVelocity((prev) => {
          const next = { x: prev.x * momentumDecay, y: prev.y * momentumDecay };
          if (!autoRotate && Math.abs(next.x) < 0.01 && Math.abs(next.y) < 0.01) {
            return { x: 0, y: 0 };
          }
          return next;
        });

        setRotation((prev) => {
          let newY = prev.y;
          if (autoRotate) newY += autoRotateSpeed;
          newY += clampRotationSpeed(velocityRef.current.y);
          return {
            x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(velocityRef.current.x)),
            y: SPHERE_MATH.normalizeAngle(newY),
            z: prev.z,
          };
        });
      }

      animationFrame.current = requestAnimationFrame(animate);
    }

    animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [momentumDecay, autoRotate, autoRotateSpeed, clampRotationSpeed, reduceMotion]);

  useEffect(() => {
    // Derived from images.length/radius via generateSpherePositions'
    // own deps; useMemo here trips the compiler's newer
    // memoization-preservation check instead (this project already
    // tolerates one similar pre-existing lint note elsewhere for a
    // working, equivalent pattern).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImagePositions(generateSpherePositions());
  }, [generateSpherePositions]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      const delta = { x: -deltaY * dragSensitivity, y: deltaX * dragSensitivity };

      setRotation((prev) => ({
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(delta.x)),
        y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(delta.y)),
        z: prev.z,
      }));
      setVelocity({ x: clampRotationSpeed(delta.x), y: clampRotationSpeed(delta.y) });
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMousePos.current.x;
      const deltaY = touch.clientY - lastMousePos.current.y;
      const delta = { x: -deltaY * dragSensitivity, y: deltaX * dragSensitivity };

      setRotation((prev) => ({
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(delta.x)),
        y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(delta.y)),
        z: prev.z,
      }));
      setVelocity({ x: clampRotationSpeed(delta.x), y: clampRotationSpeed(delta.y) });
      lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [dragSensitivity, clampRotationSpeed]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  };

  if (!images.length) return null;

  const worldPositions = calculateWorldPositions();

  return (
    <>
      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{ width: containerSize, height: containerSize, perspective: `${perspective}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="relative h-full w-full" style={{ zIndex: 10 }}>
          {images.map((image, index) => {
            const position = worldPositions[index];
            if (!position || !position.isVisible) return null;

            const imageSize = baseImageSize * position.scale;
            const isHovered = hoveredIndex === index;
            const finalScale = isHovered ? Math.min(1.25, 1.25 / position.scale) : 1;

            return (
              <div
                key={image.id}
                className="absolute cursor-pointer select-none transition-transform duration-200 ease-out"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                  left: `${containerSize / 2 + position.x}px`,
                  top: `${containerSize / 2 + position.y}px`,
                  opacity: position.fadeOpacity,
                  transform: `translate(-50%, -50%) scale(${finalScale})`,
                  zIndex: position.zIndex,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => image.image && setSelectedImage(image)}
              >
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-line-strong shadow-lg">
                  {image.image ? (
                    <img
                      src={image.image}
                      alt={image.caption || ""}
                      className="h-full w-full object-cover"
                      draggable={false}
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface text-muted">
                      <FaImage />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-xl border border-line-strong bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-square">
              <img
                src={selectedImage.image}
                alt={selectedImage.caption || ""}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line-strong bg-surface text-muted hover:text-signal"
              >
                <FaTimes />
              </button>
            </div>

            {selectedImage.caption && (
              <p className="p-4 text-sm text-muted">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
