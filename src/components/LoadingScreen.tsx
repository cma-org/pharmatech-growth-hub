import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { Mesh, Shape, ExtrudeGeometry } from 'three';
import axygenLogo from "@/assets/axygen-fixity-logo-v2.png";

// Create hexagon shape geometry
const createHexagonGeometry = () => {
  const shape = new Shape();
  const radius = 0.8;
  
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath();
  
  return new ExtrudeGeometry(shape, {
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.05,
    bevelThickness: 0.05
  });
};

const HexagonElement = ({ 
  position, 
  color, 
  text, 
  speed, 
  orbitRadius,
  index 
}: { 
  position: [number, number, number];
  color: string;
  text: string;
  speed: number;
  orbitRadius: number;
  index: number;
}) => {
  const meshRef = useRef<Mesh>(null);
  const textRef = useRef<any>(null);
  const geometry = useMemo(() => createHexagonGeometry(), []);
  
  useFrame((state) => {
    if (meshRef.current && textRef.current) {
      const time = state.clock.elapsedTime * speed;
      const angle = (index / 6) * Math.PI * 2 + time;
      
      // Orbit around center
      meshRef.current.position.x = Math.cos(angle) * orbitRadius;
      meshRef.current.position.z = Math.sin(angle) * orbitRadius;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
      
      // Rotation
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      meshRef.current.rotation.z = time * 0.2;
      
      // Text follows hexagon
      textRef.current.position.copy(meshRef.current.position);
      textRef.current.position.y += 0.5;
      textRef.current.lookAt(0, textRef.current.position.y, 0);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry} position={position}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Text
        ref={textRef}
        position={[position[0], position[1] + 0.5, position[2]]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
        maxWidth={1.5}
        textAlign="center"
      >
        {text}
      </Text>
    </group>
  );
};

const CenterLogo = () => {
  const logoRef = useRef<any>(null);
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <group ref={logoRef}>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.1, 32]} />
        <meshStandardMaterial 
          color="white" 
          metalness={0.1} 
          roughness={0.1}
          transparent
          opacity={0.95}
        />
      </mesh>
      <Text
        position={[0, 0.1, 0]}
        fontSize={0.25}
        color="#3b82f6"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
        rotation={[-Math.PI / 2, 0, 0]}
      >
        AXYGEN
      </Text>
      <Text
        position={[0, 0.05, 0]}
        fontSize={0.12}
        color="#f97316"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
        rotation={[-Math.PI / 2, 0, 0]}
      >
        PHARMATECH
      </Text>
    </group>
  );
};

const Scene3D = () => {
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
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#fff" />
      
      <CenterLogo />
      
      {hexagonData.map((hex, index) => (
        <HexagonElement
          key={index}
          position={[0, 0, 0]}
          color={hex.color}
          text={hex.text}
          speed={0.3 + index * 0.05}
          orbitRadius={3.5}
          index={index}
        />
      ))}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.2}
      />
    </>
  );
};

interface LoadingScreenProps {
  isVisible: boolean;
  progress?: number;
}

const LoadingScreen = ({ isVisible, progress = 0 }: LoadingScreenProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
      {/* 3D Canvas */}
      <div className="relative w-full h-full">
        <Canvas camera={{ position: [0, 5, 8], fov: 50 }}>
          <Scene3D />
        </Canvas>
        
        {/* 2D Overlay with logo and progress */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {/* Logo overlay in center */}
          <div className="mb-8">
            <img 
              src={axygenLogo} 
              alt="Axygen Pharmatech" 
              className="h-20 w-auto animate-pulse"
            />
          </div>
          
          {/* Loading text and progress */}
          <div className="text-center">
            <div className="text-primary font-semibold text-lg mb-4 animate-fade-in">
              Loading Experience...
            </div>
            
            {/* Progress bar */}
            <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div className="text-muted-foreground text-sm mt-2">
              {Math.round(progress)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;