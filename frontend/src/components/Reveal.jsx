import React, { useEffect, useRef, useState } from 'react';

/**
 * On-scroll reveal wrapper — fades + rises into view when it hits the viewport.
 * Zero deps. Uses IntersectionObserver. Runs once per element.
 *
 * Props:
 *   as        — element tag (default: 'div')
 *   delay     — ms delay before animating (default: 0)
 *   y         — starting translateY in px (default: 24)
 *   duration  — animation duration in ms (default: 700)
 *   once      — only animate the first time (default: true)
 */
const Reveal = ({
  as: Tag = 'div',
  delay = 0,
  y = 24,
  duration = 700,
  once = true,
  className = '',
  children,
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translate3d(0,0,0)' : `translate3d(0, ${y}px, 0)`,
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
