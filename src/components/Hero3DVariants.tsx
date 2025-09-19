import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { Mesh, Group } from 'three';
import CountingNumber from './CountingNumber';

// Holographic DNA Helix Animation
const DNAHelix = () => {
  const groupRef = useRef<Group>(null);
  const strand1Ref = useRef<Group>(null);
  const strand2Ref = useRef<Group>(null);
  const basePairsRef = useRef<Group>(null);
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.15;
    }
    
    // Animate particles floating around DNA
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(time * 2 + index) * 0.003;
        child.rotation.x = time * (0.5 + index * 0.1);
        child.rotation.z = time * (0.3 + index * 0.05);
      });
    }
  });

  // Create two DNA strands with gradient colors
  const strand1Points = [];
  const strand2Points = [];
  const basePairs = [];
  
  for (let i = 0; i < 40; i++) {
    const angle1 = (i / 40) * Math.PI * 8;
    const angle2 = angle1 + Math.PI;
    const y = (i - 20) * 0.12;
    const radius = 1.0;
    
    // Calculate gradient color from blue to cyan
    const blueIntensity = Math.abs(Math.sin((i / 40) * Math.PI));
    const strand1Color = `hsl(${200 + blueIntensity * 60}, 80%, ${60 + blueIntensity * 20}%)`;
    
    // Calculate gradient color from pink to magenta
    const pinkIntensity = Math.abs(Math.cos((i / 40) * Math.PI));
    const strand2Color = `hsl(${300 + pinkIntensity * 60}, 80%, ${60 + pinkIntensity * 20}%)`;
    
    const pos1 = [Math.cos(angle1) * radius, y, Math.sin(angle1) * radius] as [number, number, number];
    const pos2 = [Math.cos(angle2) * radius, y, Math.sin(angle2) * radius] as [number, number, number];
    
    strand1Points.push({
      position: pos1,
      color: strand1Color
    });
    
    strand2Points.push({
      position: pos2,
      color: strand2Color
    });
    
    // Add base pairs (connecting lines) every few points
    if (i % 3 === 0) {
      basePairs.push({
        pos1,
        pos2,
        midpoint: [
          (pos1[0] + pos2[0]) / 2,
          (pos1[1] + pos2[1]) / 2,
          (pos1[2] + pos2[2]) / 2
        ] as [number, number, number],
        color: `hsl(${250 + (i % 5) * 20}, 70%, 65%)`
      });
    }
  }

  // Create floating particles
  const particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 6
      ] as [number, number, number],
      size: 0.02 + Math.random() * 0.05,
      color: `hsl(${200 + Math.random() * 100}, 70%, ${50 + Math.random() * 30}%)`
    });
  }

  return (
    <group ref={groupRef}>
      {/* First DNA strand - Blue gradient */}
      <group ref={strand1Ref}>
        {strand1Points.map((point, index) => (
          <Sphere key={`strand1-${index}`} position={point.position} args={[0.08, 12, 12]}>
            <meshStandardMaterial 
              color={point.color} 
              metalness={0.9} 
              roughness={0.1}
              emissive={point.color}
              emissiveIntensity={0.4}
              transparent={true}
              opacity={0.9}
            />
          </Sphere>
        ))}
      </group>
      
      {/* Second DNA strand - Pink gradient */}
      <group ref={strand2Ref}>
        {strand2Points.map((point, index) => (
          <Sphere key={`strand2-${index}`} position={point.position} args={[0.08, 12, 12]}>
            <meshStandardMaterial 
              color={point.color} 
              metalness={0.9} 
              roughness={0.1}
              emissive={point.color}
              emissiveIntensity={0.4}
              transparent={true}
              opacity={0.9}
            />
          </Sphere>
        ))}
      </group>
      
      {/* Base pairs (connecting lines) */}
      <group ref={basePairsRef}>
        {basePairs.map((pair, index) => {
          const distance = Math.sqrt(
            Math.pow(pair.pos2[0] - pair.pos1[0], 2) +
            Math.pow(pair.pos2[1] - pair.pos1[1], 2) +
            Math.pow(pair.pos2[2] - pair.pos1[2], 2)
          );
          
          return (
            <Cylinder 
              key={`basepair-${index}`} 
              position={pair.midpoint} 
              args={[0.02, 0.02, distance, 8]}
              rotation={[
                Math.atan2(pair.pos2[1] - pair.pos1[1], Math.sqrt(Math.pow(pair.pos2[0] - pair.pos1[0], 2) + Math.pow(pair.pos2[2] - pair.pos1[2], 2))),
                Math.atan2(pair.pos2[0] - pair.pos1[0], pair.pos2[2] - pair.pos1[2]),
                0
              ]}
            >
              <meshStandardMaterial 
                color={pair.color} 
                metalness={0.8} 
                roughness={0.2}
                emissive={pair.color}
                emissiveIntensity={0.3}
                transparent={true}
                opacity={0.8}
              />
            </Cylinder>
          );
        })}
      </group>

      {/* Floating particles */}
      <group ref={particlesRef}>
        {particles.map((particle, index) => (
          <Sphere key={`particle-${index}`} position={particle.position} args={[particle.size, 6, 6]}>
            <meshStandardMaterial 
              color={particle.color} 
              metalness={1.0} 
              roughness={0.0}
              emissive={particle.color}
              emissiveIntensity={0.6}
              transparent={true}
              opacity={0.7}
            />
          </Sphere>
        ))}
      </group>
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
        <div className="text-center text-white bg-emerald-500/30 backdrop-blur-md p-8 border border-emerald-400/20" style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}>
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