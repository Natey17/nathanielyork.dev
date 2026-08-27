import { motion } from "framer-motion";

export function ChevronIcon({ open }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ flexShrink: 0 }}
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  );
}
