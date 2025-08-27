import { useEffect, useRef, useState, useCallback } from 'react';

interface UseAdvancedScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationType?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
}

export const useAdvancedScrollReveal = (options: UseAdvancedScrollRevealOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    animationType = 'fade',
    delay = 0,
    duration = 600
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const getAnimationClass = useCallback(() => {
    const baseClass = 'scroll-reveal';
    switch (animationType) {
      case 'slide-up':
        return `${baseClass} scroll-reveal-up`;
      case 'slide-left':
        return `${baseClass} scroll-reveal-left`;
      case 'slide-right':
        return `${baseClass} scroll-reveal-right`;
      case 'scale':
        return `${baseClass} scroll-reveal-scale`;
      case 'rotate':
        return `${baseClass} scroll-reveal-rotate`;
      default:
        return baseClass;
    }
  }, [animationType]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
          
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
      
      // Apply initial animation class
      currentRef.classList.add(getAnimationClass());
      currentRef.style.animationDuration = `${duration}ms`;
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, duration, hasAnimated, getAnimationClass]);

  useEffect(() => {
    if (ref.current) {
      if (isVisible) {
        ref.current.classList.add('revealed');
      } else {
        ref.current.classList.remove('revealed');
      }
    }
  }, [isVisible]);

  return { ref, isVisible, hasAnimated };
};

// Hook for staggered animations
export const useStaggeredScrollReveal = (
  count: number,
  options: UseAdvancedScrollRevealOptions = {}
) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);
  const { delay = 0, ...restOptions } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, delay + (index * 100)); // Stagger by 100ms
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [delay, options.threshold, options.rootMargin]);

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element;
    if (element) {
      element.classList.add('scroll-reveal');
      if (visibleItems.has(index)) {
        element.classList.add('revealed');
      }
    }
  };

  const isVisible = (index: number) => visibleItems.has(index);

  return { setRef, isVisible };
};

// Hook for parallax effects
export const useParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        ref.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

// Hook for scroll-triggered counters
export const useCountUp = (
  end: number,
  duration: number = 2000,
  options: UseAdvancedScrollRevealOptions = {}
) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, isVisible } = useAdvancedScrollReveal(options);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isVisible, hasStarted, end, duration]);

  return { ref, count, isVisible };
};

// Hook for typing animation
export const useTypewriter = (
  text: string,
  speed: number = 50,
  options: UseAdvancedScrollRevealOptions = {}
) => {
  const [displayText, setDisplayText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, isVisible } = useAdvancedScrollReveal(options);

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }
  }, [isVisible, hasStarted, text, speed]);

  return { ref, displayText, isVisible, isComplete: displayText === text };
};
