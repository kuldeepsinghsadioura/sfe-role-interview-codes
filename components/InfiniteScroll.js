import { useState, useEffect, useRef } from "react";

export default function InfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setItems((prev) => [...prev, ...Array.from({ length: 5 }, (_, i) => `Item ${prev.length + i + 1}`)]);
      }
    });

    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      <div ref={loader} className="h-10 bg-gray-300"></div>
    </div>
  );
}
