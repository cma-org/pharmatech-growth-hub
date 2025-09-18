import { useState, useEffect } from 'react';

interface UseLoadingProps {
  duration?: number;
  autoStart?: boolean;
}

export const useLoading = ({ 
  duration = 3000, 
  autoStart = true 
}: UseLoadingProps = {}) => {
  const [isLoading, setIsLoading] = useState(autoStart);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (duration / 50); // Update every 50ms
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          setIsLoading(false);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [duration, isLoading]);

  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
  };

  const stopLoading = () => {
    setIsLoading(false);
    setProgress(100);
  };

  return {
    isLoading,
    progress,
    startLoading,
    stopLoading
  };
};