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
            className="relative z-10 w-auto h-58 object-contain animate-scale-in drop-shadow-2xl"
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
          <p className="text-2xl font-bold text-accent drop-shadow-lg tracking-wide">
            PHARMACEUTICAL & BIOTECH QUALITY SOLUTIONS
          </p>
        </div>
      </div>

      {/* Wave animation background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity="0.25" 
            fill="currentColor"
            className="text-background/20 animate-pulse"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity="0.5" 
            fill="currentColor"
            className="text-background/30"
            style={{
              animation: "wave 4s ease-in-out infinite"
            }}
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="currentColor"
            className="text-background/40"
            style={{
              animation: "wave 6s ease-in-out infinite reverse"
            }}
          />
        </svg>
        
        <svg className="absolute top-0 left-0 w-full h-32 rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity="0.25" 
            fill="currentColor"
            className="text-background/20"
            style={{
              animation: "wave 5s ease-in-out infinite"
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;