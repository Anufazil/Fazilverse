import { motion } from "framer-motion";
import { FaImage } from "react-icons/fa";

export default function GalleryTile({ item, onOpen, index }) {
  return (
    <motion.button
      onClick={() => item.image && onOpen(item)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative aspect-square w-full overflow-hidden rounded-xl border border-line bg-surface text-left"
    >
      {item.image ? (
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
          src={item.image}
          alt={item.caption}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted">
          <FaImage className="text-2xl" />
          <span className="font-mono text-xs">add photo</span>
        </div>
      )}

      {item.image && item.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <p className="text-sm text-ink-text">{item.caption}</p>
        </div>
      )}
    </motion.button>
  );
}
