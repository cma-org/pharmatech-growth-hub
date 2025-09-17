import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { Mesh, Group } from 'three';
import CountingNumber from './CountingNumber';

// DNA Helix Animation
const DNAHelix = () => {
  const groupRef = useRef<Group>(null);
  const strand1Ref = useRef<Group>(null);
  const strand2Ref = useRef<Group>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
    
    // Animate individual strands
    if (strand1Ref.current) {
      strand1Ref.current.rotation.y = time * 0.2;
    }
    if (strand2Ref.current) {
      strand2Ref.current.rotation.y = -time * 0.2;
    }
  });

  // Create two DNA strands with more points for smoother helix
  const strand1Points = [];
  const strand2Points = [];
  const connections = [];
  
  for (let i = 0; i < 30; i++) {
    const angle1 = (i / 30) * Math.PI * 6;
    const angle2 = angle1 + Math.PI;
    const y = (i - 15) * 0.15;
    const radius = 1.2;
    
    strand1Points.push({
      position: [Math.cos(angle1) * radius, y, Math.sin(angle1) * radius] as [number, number, number],
      color: "#3b82f6"
    });
    
    strand2Points.push({
      position: [Math.cos(angle2) * radius, y, Math.sin(angle2) * radius] as [number, number, number],
      color: "#ef4444"
    });
    
    // Add base pair connections every few points
    if (i % 3 === 0) {
      connections.push({
        start: [Math.cos(angle1) * radius, y, Math.sin(angle1) * radius] as [number, number, number],
        end: [Math.cos(angle2) * radius, y, Math.sin(angle2) * radius] as [number, number, number]
      });
    }
  }

  return (
    <group ref={groupRef}>
      {/* First DNA strand */}
      <group ref={strand1Ref}>
        {strand1Points.map((point, index) => (
          <Sphere key={`strand1-${index}`} position={point.position} args={[0.12, 16, 16]}>
            <meshStandardMaterial 
              color={point.color} 
              metalness={0.8} 
              roughness={0.2}
              emissive={point.color}
              emissiveIntensity={0.1}
            />
          </Sphere>
        ))}
      </group>
      
      {/* Second DNA strand */}
      <group ref={strand2Ref}>
        {strand2Points.map((point, index) => (
          <Sphere key={`strand2-${index}`} position={point.position} args={[0.12, 16, 16]}>
            <meshStandardMaterial 
              color={point.color} 
              metalness={0.8} 
              roughness={0.2}
              emissive={point.color}
              emissiveIntensity={0.1}
            />
          </Sphere>
        ))}
      </group>
      
      {/* Base pair connections */}
      {connections.map((connection, index) => {
        const midpoint = [
          (connection.start[0] + connection.end[0]) / 2,
          (connection.start[1] + connection.end[1]) / 2,
          (connection.start[2] + connection.end[2]) / 2
        ] as [number, number, number];
        
        const distance = Math.sqrt(
          Math.pow(connection.end[0] - connection.start[0], 2) +
          Math.pow(connection.end[1] - connection.start[1], 2) +
          Math.pow(connection.end[2] - connection.start[2], 2)
        );
        
        return (
          <Cylinder 
            key={`connection-${index}`} 
            position={midpoint} 
            args={[0.04, 0.04, distance]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <meshStandardMaterial 
              color="#10b981" 
              metalness={0.7} 
              roughness={0.3}
              emissive="#10b981"
              emissiveIntensity={0.1}
            />
          </Cylinder>
        );
      })}
      
      {/* Central core glow */}
      <Cylinder position={[0, 0, 0]} args={[0.05, 0.05, 5]} rotation={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.6}
        />
      </Cylinder>
    </group>
  );
};

// Floating Particles System
const ParticleSystem = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.002;
        child.rotation.x = state.clock.elapsedTime * (0.3 + index * 0.1);
        child.rotation.z = state.clock.elapsedTime * (0.2 + index * 0.05);
      });
    }
  });

  const particles = [];
  for (let i = 0; i < 35; i++) {
    const angle = (i / 15) * Math.PI * 2;
    const radius = 1 + Math.random() * 0.5;
    particles.push({
      position: [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius
      ] as [number, number, number],
      size: 0.05 + Math.random() * 0.1,
      color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`
    });
  }

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <Sphere key={index} position={particle.position} args={[particle.size, 8, 8]}>
          <meshStandardMaterial 
            color={particle.color} 
            metalness={0.9} 
            roughness={0.1}
            emissive={particle.color}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Geometric Transformation Animation
const GeometricTransform = () => {
  const torusRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.4;
      torusRef.current.rotation.y = time * 0.6;
      torusRef.current.position.y = Math.sin(time) * 0.3;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.3;
      boxRef.current.rotation.z = time * 0.5;
      boxRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.x = Math.cos(time * 0.8) * 1.2;
      sphereRef.current.position.z = Math.sin(time * 0.8) * 1.2;
    }
  });

  return (
    <group>
      <Torus ref={torusRef} position={[0, 0, 0]} args={[0.6, 0.2, 16, 32]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.7} roughness={0.3} />
      </Torus>
      
      <Box ref={boxRef} position={[0, 0, 0]} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
      </Box>
      
      <Sphere ref={sphereRef} position={[1.2, 0, 0]} args={[0.15, 16, 16]}>
        <meshStandardMaterial 
          color="#10b981" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
};

// Main Scene Component
const Scene3D = ({ animationType }: { animationType: 'molecule' | 'dna' | 'particles' | 'geometric' }) => {
  const renderAnimation = () => {
    switch (animationType) {
      case 'dna':
        return <DNAHelix />;
      case 'particles':
        return <ParticleSystem />;
      case 'geometric':
        return <GeometricTransform />;
      default:
        return <DNAHelix />;
    }
  };

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-10, -10, -5]} intensity={0.6} />
      <pointLight position={[0, 0, 5]} intensity={0.8} color="#3b82f6" />
      {renderAnimation()}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1}
      />
    </>
  );
};

const Hero3DVariant = ({ type = 'dna' }: { type?: 'molecule' | 'dna' | 'particles' | 'geometric' }) => {
  return (
    <div className="relative w-[500px] h-[500px]">
      {/* 3D Canvas */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <Canvas camera={{ position: [3, 0, 5], fov: 60 }}>
          <Scene3D animationType={type} />
        </Canvas>
      </div>
      
      {/* Overlay with counting number - positioned to the right */}
      <div className="absolute inset-0 flex items-center justify-end pr-16">
        <div className="text-center text-primary-foreground bg-primary/20 backdrop-blur-sm rounded-full p-8">
          <CountingNumber end={75} suffix="+" className="text-5xl font-bold mb-2" />
          <div className="text-lg font-medium">Years Combined</div>
          <div className="text-lg font-medium">Leadership</div>
        </div>
      </div>
      
      {/* Decorative rings - larger */}
      <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse"></div>
      <div className="absolute inset-6 rounded-full border border-primary-foreground/20"></div>
      <div className="absolute inset-12 rounded-full border border-accent/20"></div>
    </div>
  );
};

export default Hero3DVariant;