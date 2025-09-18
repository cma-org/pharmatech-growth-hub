import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import { Mesh } from 'three';
import axygenLogo from "@/assets/axygen-fixity-logo-v2.png";

// CSS Hexagon Component
const HexagonCSS = ({ 
  text, 
  color, 
  delay, 
  index 
}: { 
  text: string; 
  color: string; 
  delay: number;
  index: number;
}) => {
  const angle = (index / 6) * 360;
  
  return (
    <div 
      className="absolute w-28 h-28 flex items-center justify-center text-white text-xs font-bold text-center"
      style={{
        background: `linear-gradient(135deg, ${color}, ${color}dd)`,
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        left: '50%',
        top: '50%',
        marginLeft: '-56px',
        marginTop: '-56px',
        transformOrigin: '50% 50%',
        animation: `orbit 6s linear infinite`,
        animationDelay: `${delay}s`,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
      }}
    >
      <span className="text-[9px] leading-tight font-semibold">{text.replace('\n', ' ')}</span>
    </div>
  );
};

// Simple 3D elements for background
const FloatingElement = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.2, 16, 16]}>
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} transparent opacity={0.6} />
    </Sphere>
  );
};

const Simple3DScene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      
      {/* Floating background elements */}
      <FloatingElement position={[-3, 1, -2]} color="#8b5cf6" speed={0.5} />
      <FloatingElement position={[3, -1, -2]} color="#06b6d4" speed={0.3} />
      <FloatingElement position={[0, 2, -3]} color="#3b82f6" speed={0.4} />
      <FloatingElement position={[-2, -2, -1]} color="#f59e0b" speed={0.6} />
      <FloatingElement position={[2, 1, -1]} color="#ef4444" speed={0.2} />
    </>
  );
};

interface LoadingScreenProps {
  isVisible: boolean;
  progress?: number;
}

const LoadingScreen = ({ isVisible, progress = 0 }: LoadingScreenProps) => {
  if (!isVisible) return null;

  const hexagonData = [
    { text: "MEET THE\nTEAM", color: "#8b5cf6" },
    { text: "SERVICES WE\nOFFER", color: "#06b6d4" },
    { text: "OUR WORK", color: "#3b82f6" },
    { text: "REACH OUT", color: "#0891b2" },
    { text: "CAREER", color: "#7c3aed" },
    { text: "ABOUT US", color: "#6366f1" },
  ];

  return (
    <>
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateY(-140px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateY(-140px) rotate(-360deg);
          }
        }
      `}</style>
      
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center overflow-hidden">
        {/* 3D Background Canvas */}
        <div className="absolute inset-0 opacity-30">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Simple3DScene />
          </Canvas>
        </div>
        
        {/* Main content */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Hexagon orbit container */}
          <div className="relative w-80 h-80 mb-8">
            {/* Center logo - Fixed position */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="relative bg-white/95 backdrop-blur-sm rounded-full p-8 shadow-2xl border border-white/20">
                <img 
                  src={axygenLogo} 
                  alt="Axygen Pharmatech" 
                  className="h-16 w-auto"
                />
              </div>
            </div>
            
            {/* Orbiting hexagons */}
            {hexagonData.map((hex, index) => (
              <HexagonCSS
                key={index}
                text={hex.text}
                color={hex.color}
                delay={index * 0.5}
                index={index}
              />
            ))}
          </div>
          
          {/* Loading text and progress */}
          <div className="text-center">
            <div className="text-primary font-semibold text-xl mb-4 animate-fade-in">
              Loading ...
            </div>
            
            {/* Progress bar */}
            <div className="w-64 h-2 bg-muted rounded-full overflow-hidden mb-2">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="text-muted-foreground text-sm">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;