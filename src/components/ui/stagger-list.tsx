"use client";

import { motion, useReducedMotion } from "framer-motion";

type StaggerListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  label?: string;
};

/** A list whose items pop in one after another when scrolled into view. */
export function StaggerList({ items, className, itemClassName, label }: StaggerListProps) {
  const reduce = useReducedMotion();
  return (
    <motion.ul
      className={className}
      aria-label={label}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ show: { transition: { staggerChildren: reduce ? 0 : 0.045, delayChildren: 0.15 } } }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          className={itemClassName}
          variants={{
            hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.92 },
            show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
