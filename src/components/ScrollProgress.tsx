import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
      <div
        className="h-full bg-gradient-sunset transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;