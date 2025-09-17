import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Text } from '@react-three/drei';
import { Mesh } from 'three';
import CountingNumber from './CountingNumber';

const AnimatedSphere = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.3, 32, 32]}>
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
    </Sphere>
  );
};

const AnimatedBox = ({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.4, 0.4, 0.4]}>
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
    </Box>
  );
};

const MoleculeStructure = () => {
  const groupRef = useRef<any>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central molecule */}
      <Sphere position={[0, 0, 0]} args={[0.2, 16, 16]}>
        <meshStandardMaterial color="#3b82f6" metalness={0.7} roughness={0.3} />
      </Sphere>
      
      {/* Orbiting elements */}
      <AnimatedSphere position={[1.2, 0, 0]} color="#10b981" speed={0.8} />
      <AnimatedSphere position={[-1.2, 0, 0]} color="#f59e0b" speed={-0.6} />
      <AnimatedSphere position={[0, 1.2, 0]} color="#ef4444" speed={0.7} />
      <AnimatedSphere position={[0, -1.2, 0]} color="#8b5cf6" speed={-0.9} />
      
      {/* Geometric shapes */}
      <AnimatedBox position={[0.8, 0.8, 0.8]} color="#06b6d4" speed={0.5} />
      <AnimatedBox position={[-0.8, -0.8, 0.8]} color="#ec4899" speed={-0.4} />
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <MoleculeStructure />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="relative w-96 h-96">
      {/* 3D Canvas */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Scene />
        </Canvas>
      </div>
      
      {/* Overlay with counting number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-primary-foreground bg-primary/20 backdrop-blur-sm rounded-full p-8">
          <CountingNumber end={75} suffix="+" className="text-4xl font-bold mb-2" />
          <div className="text-sm font-medium">Years Combined</div>
          <div className="text-sm font-medium">Leadership</div>
        </div>
      </div>
      
      {/* Decorative rings */}
      <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse"></div>
      <div className="absolute inset-4 rounded-full border border-primary-foreground/20"></div>
    </div>
  );
};

export default Hero3D;