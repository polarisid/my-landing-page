import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** delay in ms before the element animates in */
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

/**
 * Lightweight scroll-reveal. Adds `is-visible` when the element enters the
 * viewport — styling lives in the global stylesheet under [data-reveal].
 * Replaces react-awesome-reveal so grids/flex layouts aren't wrapped in
 * extra DOM nodes.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      className: [className, visible ? "is-visible" : ""]
        .filter(Boolean)
        .join(" "),
      "data-reveal": "",
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}
