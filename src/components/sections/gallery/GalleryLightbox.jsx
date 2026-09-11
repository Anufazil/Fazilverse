import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function GalleryLightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] max-w-2xl overflow-hidden rounded-xl border border-line-strong bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong bg-surface text-muted hover:text-signal"
            >
              <FaTimes />
            </button>

            <img
              src={item.image}
              alt={item.caption}
              className="max-h-[85vh] w-full object-contain"
            />

            {item.caption && (
              <p className="p-4 text-sm text-muted">{item.caption}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
