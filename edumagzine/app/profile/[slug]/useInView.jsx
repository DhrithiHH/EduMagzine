// hooks/useInView.js
import { useEffect, useRef, useState } from "react";

export default function useInView(options = {}) {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}
