import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/axygen-fixity-logo-latest.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500); // Wait for fade out animation
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-primary/5",
        "flex flex-col items-center justify-center",
        "transition-opacity duration-500",
        !isVisible && "opacity-0"
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Logo container */}
      <div className="relative flex flex-col items-center space-y-8 animate-fade-in">
        {/* Logo with animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 animate-pulse" />
          <img
            src={logo}
            alt="Axygen Fixity Logo"
            className="relative z-10 w-32 h-32 object-contain animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* Loading progress */}
        <div className="w-64 space-y-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Loading... {Math.round(progress)}%
          </p>
        </div>

        {/* Tagline */}
        <div 
          className="text-center max-w-lg animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-lg font-semibold text-primary mb-2">
            YOUR TRUSTED PARTNER IN
          </h2>
          <p className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            PHARMACEUTICAL & BIOTECH QUALITY SOLUTIONS
          </p>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;