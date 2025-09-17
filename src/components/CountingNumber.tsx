import { useEffect, useRef } from 'react';
import { useCountAnimation } from '@/hooks/useCountAnimation';

interface CountingNumberProps {
  end: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

const CountingNumber = ({ end, suffix = '', className = '', duration = 2000 }: CountingNumberProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { count, startAnimation } = useCountAnimation({ 
    end, 
    duration, 
    startOnView: true 
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [startAnimation]);

  const formatNumber = (num: number) => {
    if (num >= 10000) {
      return `${Math.floor(num / 1000)},${String(num % 1000).padStart(3, '0')}`;
    }
    return num.toString();
  };

  return (
    <div ref={elementRef} className={className}>
      {formatNumber(count)}{suffix}
    </div>
  );
};

export default CountingNumber;