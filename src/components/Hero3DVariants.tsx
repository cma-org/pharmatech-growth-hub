import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { Mesh, Group } from 'three';
import CountingNumber from './CountingNumber';

// Modern Ribbon DNA Helix Animation
const DNAHelix = () => {
  const groupRef = useRef<Group>(null);
  const ribbon1Ref = useRef<Group>(null);
  const ribbon2Ref = useRef<Group>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.4;
      groupRef.current.position.y = Math.sin(time * 0.7) * 0.15;
    }
    
    // Counter-rotate the ribbons for dynamic effect
    if (ribbon1Ref.current) {
      ribbon1Ref.current.rotation.y = time * 0.3;
    }
    if (ribbon2Ref.current) {
      ribbon2Ref.current.rotation.y = -time * 0.3;
    }
  });

  // Create flowing ribbon DNA strands
  const createRibbonSegments = (strandIndex: number) => {
    const segments = [];
    const colors = strandIndex === 0 ? 
      ["#06b6d4", "#0891b2", "#0e7490"] : 
      ["#f97316", "#ea580c", "#dc2626"];
    
    for (let i = 0; i < 25; i++) {
      const t = i / 25;
      const angle = t * Math.PI * 8 + (strandIndex * Math.PI);
      const radius = 1.3 + Math.sin(t * Math.PI * 4) * 0.2;
      const y = (t - 0.5) * 4;
      
      // Create flowing ribbon segments with varying sizes
      const size = 0.15 + Math.sin(t * Math.PI * 6) * 0.05;
      const colorIndex = Math.floor(t * colors.length);
      
      segments.push({
        position: [
          Math.cos(angle) * radius, 
          y, 
          Math.sin(angle) * radius
        ] as [number, number, number],
        size: [size * 2, size * 0.5, size],
        color: colors[colorIndex] || colors[0],
        rotation: [0, angle, Math.sin(t * Math.PI * 4) * 0.3]
      });
    }
    return segments;
  };

  const strand1Segments = createRibbonSegments(0);
  const strand2Segments = createRibbonSegments(1);

  // Create pulsing connections between strands
  const connections = [];
  for (let i = 0; i < 8; i++) {
    const t = i / 8;
    const angle1 = t * Math.PI * 8;
    const angle2 = angle1 + Math.PI;
    const radius = 1.3;
    const y = (t - 0.5) * 4;
    
    connections.push({
      start: [Math.cos(angle1) * radius, y, Math.sin(angle1) * radius] as [number, number, number],
      end: [Math.cos(angle2) * radius, y, Math.sin(angle2) * radius] as [number, number, number],
      color: "#a855f7"
    });
  }

  return (
    <group ref={groupRef}>
      {/* First DNA ribbon strand */}
      <group ref={ribbon1Ref}>
        {strand1Segments.map((segment, index) => (
          <Box 
            key={`ribbon1-${index}`} 
            position={segment.position} 
            args={segment.size}
            rotation={segment.rotation}
          >
            <meshStandardMaterial 
              color={segment.color}
              metalness={0.6}
              roughness={0.3}
              emissive={segment.color}
              emissiveIntensity={0.2}
              transparent={true}
              opacity={0.9}
            />
          </Box>
        ))}
      </group>
      
      {/* Second DNA ribbon strand */}
      <group ref={ribbon2Ref}>
        {strand2Segments.map((segment, index) => (
          <Box 
            key={`ribbon2-${index}`} 
            position={segment.position} 
            args={segment.size}
            rotation={segment.rotation}
          >
            <meshStandardMaterial 
              color={segment.color}
              metalness={0.6}
              roughness={0.3}
              emissive={segment.color}
              emissiveIntensity={0.2}
              transparent={true}
              opacity={0.9}
            />
          </Box>
        ))}
      </group>
      
      {/* Pulsing base pair connections */}
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
            args={[0.08, 0.08, distance * 0.8]}
            rotation={[Math.PI / 2, 0, Math.atan2(connection.end[2] - connection.start[2], connection.end[0] - connection.start[0])]}
          >
            <meshStandardMaterial 
              color={connection.color}
              metalness={0.8} 
              roughness={0.2}
              emissive={connection.color}
              emissiveIntensity={0.4}
              transparent={true}
              opacity={0.7}
            />
          </Cylinder>
        );
      })}
      
      {/* Central energy core */}
      <Torus position={[0, 0, 0]} args={[0.3, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#22d3ee" 
          metalness={1.0} 
          roughness={0.0}
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.8}
        />
      </Torus>
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
    particles.push({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 8
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
        <div className="text-center text-white bg-emerald-500/30 backdrop-blur-md rounded-full p-8 border border-emerald-400/20">
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