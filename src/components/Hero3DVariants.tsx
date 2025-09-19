import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { Mesh, Group } from 'three';
import CountingNumber from './CountingNumber';

// Medical Capsule with DNA Helix Animation
const MedicalCapsuleAnimation = () => {
  const groupRef = useRef<Group>(null);
  const capsuleTopRef = useRef<Group>(null);
  const capsuleBottomRef = useRef<Group>(null);
  const dnaMRef = useRef<Group>(null);
  const moleculesRef = useRef<Group>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const motionScale = prefersReducedMotion ? 0.3 : 1;

    if (groupRef.current) {
      // On-load spring pop and idle micro-tilt + bob
      const springPop = Math.max(0, 1 - Math.exp(-time * 2)) * (1 + Math.sin(time * 8) * 0.1 * Math.exp(-time));
      const microTilt = Math.sin(time * 0.8) * 0.1 * motionScale; // ±6° in radians
      const bob = Math.sin(time * 1.2) * 0.1 * motionScale; // ±10px equivalent
      
      groupRef.current.scale.setScalar(springPop);
      groupRef.current.rotation.x = microTilt;
      groupRef.current.position.y = bob;

      // Hover 3D tilt toward cursor
      if (isHovered) {
        const tiltX = (mousePosition.y - 0.5) * 0.3 * motionScale;
        const tiltY = (mousePosition.x - 0.5) * 0.3 * motionScale;
        groupRef.current.rotation.x += tiltX;
        groupRef.current.rotation.y += tiltY;
      }
    }

    // Capsule splitting animation
    if (capsuleTopRef.current && capsuleBottomRef.current) {
      const splitAmount = Math.sin(time * 0.5 + Math.PI/2) * 0.3 + 0.3;
      capsuleTopRef.current.position.y = splitAmount * motionScale;
      capsuleBottomRef.current.position.y = -splitAmount * motionScale;
      capsuleTopRef.current.rotation.z = splitAmount * 0.1 * motionScale;
      capsuleBottomRef.current.rotation.z = -splitAmount * 0.1 * motionScale;
    }

    // DNA helix slow rotate with gentle rise/fall
    if (dnaMRef.current) {
      dnaMRef.current.rotation.y = time * 0.3 * motionScale;
      dnaMRef.current.position.y = Math.sin(time * 0.6) * 0.2 * motionScale;
      dnaMRef.current.scale.setScalar(Math.sin(time * 0.5 + Math.PI/2) * 0.5 + 0.5);
    }

    // Molecules slow orbital drift (staggered loops)
    if (moleculesRef.current) {
      moleculesRef.current.children.forEach((child, index) => {
        const offset = index * 0.8;
        const radius = 2 + Math.sin(time * 0.3 + offset) * 0.5;
        const angle = time * 0.2 + offset;
        const height = Math.sin(time * 0.4 + offset) * 0.3;
        
        child.position.x = Math.cos(angle) * radius * motionScale;
        child.position.z = Math.sin(angle) * radius * motionScale;
        child.position.y = height * motionScale;
        child.rotation.y = time * (0.5 + index * 0.1) * motionScale;
      });
    }
  });

  // DNA helix structure
  const createDNAHelix = () => {
    const points = [];
    const connections = [];
    const helixHeight = 2;
    const helixRadius = 0.3;
    const turns = 3;
    const pointsPerTurn = 8;
    const totalPoints = turns * pointsPerTurn;

    for (let i = 0; i < totalPoints; i++) {
      const angle = (i / pointsPerTurn) * Math.PI * 2;
      const y = (i / totalPoints) * helixHeight - helixHeight / 2;
      
      // First strand
      points.push({
        position: [
          Math.cos(angle) * helixRadius,
          y,
          Math.sin(angle) * helixRadius
        ] as [number, number, number],
        strand: 0
      });
      
      // Second strand (opposite)
      points.push({
        position: [
          Math.cos(angle + Math.PI) * helixRadius,
          y,
          Math.sin(angle + Math.PI) * helixRadius
        ] as [number, number, number],
        strand: 1
      });

      // Base pair connections
      if (i % 2 === 0) {
        connections.push({
          start: points[points.length - 2].position,
          end: points[points.length - 1].position
        });
      }
    }

    return { points, connections };
  };

  const { points: dnaPoints, connections: dnaConnections } = createDNAHelix();

  // Floating molecules
  const molecules = [];
  for (let i = 0; i < 12; i++) {
    molecules.push({
      id: i,
      initialRadius: 2 + Math.random() * 1.5,
      initialAngle: (i / 12) * Math.PI * 2,
      size: 0.08 + Math.random() * 0.04,
      color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#1e40af' : '#60a5fa'
    });
  }

  return (
    <group 
      ref={groupRef}
      onPointerMove={(e) => {
        setMousePosition({
          x: (e.clientX / window.innerWidth),
          y: (e.clientY / window.innerHeight)
        });
      }}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      {/* Capsule Top Half */}
      <group ref={capsuleTopRef}>
        <Sphere position={[0, 0.25, 0]} args={[0.4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]}>
          <meshPhysicalMaterial
            color="#e0f2fe"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </group>

      {/* Capsule Bottom Half */}
      <group ref={capsuleBottomRef}>
        <Sphere position={[0, -0.25, 0]} args={[0.4, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI]}>
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.05}
            emissive="#60a5fa"
            emissiveIntensity={0.05}
          />
        </Sphere>
      </group>

      {/* DNA Helix */}
      <group ref={dnaMRef}>
        {/* DNA backbone spheres */}
        {dnaPoints.map((point, index) => (
          <Sphere key={`dna-${index}`} position={point.position} args={[0.03, 8, 8]}>
            <meshPhysicalMaterial
              color={point.strand === 0 ? "#3b82f6" : "#1e40af"}
              metalness={0.7}
              roughness={0.3}
              emissive={point.strand === 0 ? "#3b82f6" : "#1e40af"}
              emissiveIntensity={0.4}
              transparent={true}
              opacity={0.8}
            />
          </Sphere>
        ))}
        
        {/* Base pair connections */}
        {dnaConnections.map((connection, index) => {
          const distance = Math.sqrt(
            Math.pow(connection.end[0] - connection.start[0], 2) +
            Math.pow(connection.end[1] - connection.start[1], 2) +
            Math.pow(connection.end[2] - connection.start[2], 2)
          );
          const midpoint = [
            (connection.start[0] + connection.end[0]) / 2,
            (connection.start[1] + connection.end[1]) / 2,
            (connection.start[2] + connection.end[2]) / 2
          ] as [number, number, number];

          return (
            <Cylinder
              key={`connection-${index}`}
              position={midpoint}
              args={[0.015, 0.015, distance, 6]}
              rotation={[
                Math.atan2(connection.end[1] - connection.start[1], 
                  Math.sqrt(Math.pow(connection.end[0] - connection.start[0], 2) + 
                           Math.pow(connection.end[2] - connection.start[2], 2))),
                Math.atan2(connection.end[0] - connection.start[0], connection.end[2] - connection.start[2]),
                0
              ]}
            >
              <meshPhysicalMaterial
                color="#60a5fa"
                metalness={0.8}
                roughness={0.2}
                emissive="#60a5fa"
                emissiveIntensity={0.3}
                transparent={true}
                opacity={0.7}
              />
            </Cylinder>
          );
        })}
      </group>

      {/* Floating Molecules */}
      <group ref={moleculesRef}>
        {molecules.map((molecule) => (
          <Sphere
            key={molecule.id}
            position={[molecule.initialRadius, 0, 0]}
            args={[molecule.size, 16, 16]}
          >
            <meshPhysicalMaterial
              color={molecule.color}
              metalness={0.9}
              roughness={0.1}
              emissive={molecule.color}
              emissiveIntensity={0.3}
              transparent={true}
              opacity={0.8}
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
      case 'molecule':
        return <MedicalCapsuleAnimation />;
      case 'particles':
        return <ParticleSystem />;
      case 'geometric':
        return <GeometricTransform />;
      default:
        return <MedicalCapsuleAnimation />;
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