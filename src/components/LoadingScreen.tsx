import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/axygen-fixity-logo-latest.png";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  console.log("LoadingScreen render - isVisible:", isVisible, "progress:", progress);

  useEffect(() => {
    console.log("LoadingScreen useEffect starting");
    
    // 3-second loading animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / 30; // 30 intervals over 3 seconds
        if (prev >= 100) {
          clearInterval(progressInterval);
          console.log("Loading complete, hiding screen");
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              console.log("Calling onLoadingComplete");
              onLoadingComplete();
            }, 500);
          }, 200);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, 100); // Update every 100ms for 3 seconds total

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-gradient-to-br from-primary via-primary/90 to-secondary",
        "flex flex-col items-center justify-center",
        "transition-opacity duration-500",
        !isVisible && "opacity-0"
      )}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-secondary/95" />
      
      {/* Logo container */}
      <div className="relative flex flex-col items-center space-y-8 animate-fade-in">
        {/* Logo with animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-background/30 rounded-full blur-2xl scale-150 animate-pulse" />
          <img
            src={logo}
            alt="Axygen Fixity Logo"
            className="relative z-10 w-56 h-56 object-contain animate-scale-in drop-shadow-2xl"
            style={{ animationDelay: "0.2s" }}
          />
        </div>

        {/* Loading progress */}
        <div className="w-80 space-y-4">
          <div className="h-2 bg-background/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-background to-background/80 transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-background/90 text-center animate-fade-in font-medium" style={{ animationDelay: "0.4s" }}>
            Loading... {Math.round(progress)}%
          </p>
        </div>

        {/* Tagline */}
        <div 
          className="text-center max-w-2xl animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <h2 className="text-xl font-semibold text-background mb-3 tracking-wide">
            YOUR TRUSTED PARTNER IN
          </h2>
          <p className="text-2xl font-bold text-background drop-shadow-lg tracking-wide">
            PHARMACEUTICAL & BIOTECH QUALITY SOLUTIONS
          </p>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-background/20 rounded-full animate-pulse"
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