import { motion } from "framer-motion";
import { FaImage } from "react-icons/fa";

export default function GalleryTile({ item, onOpen, index }) {
  const hasImage = !!item.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className="group w-full"
    >
      <button
        onClick={() => hasImage && onOpen(item)}
        className="block w-full text-left"
      >
        {/* Frame */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-xl border border-line-strong bg-surface">
          {hasImage ? (
            <>
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
                src={item.image}
                alt={item.caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />

              {item.caption && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <p className="p-3 text-sm text-ink-text">{item.caption}</p>
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted transition-colors duration-200 group-hover:text-signal">
              <FaImage className="text-2xl" />
              <span className="font-mono text-xs">add photo</span>
            </div>
          )}
        </div>

        {/* Reflection — the "mirror" in Mirror Hall */}
        <div
          aria-hidden="true"
          className="relative aspect-[4/2.2] w-full origin-top scale-y-[-1] overflow-hidden rounded-b-xl border border-t-0 border-line-strong opacity-60"
        >
          {hasImage ? (
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
              }}
            />
          ) : (
            <div
              className="h-full w-full bg-surface"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
              }}
            />
          )}
        </div>
      </button>
    </motion.div>
  );
}
