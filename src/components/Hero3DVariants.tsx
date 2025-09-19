import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { Mesh, Group } from 'three';
import CountingNumber from './CountingNumber';

// Pharmaceutical Molecule Animation - Updated for pharma industry
const PharmaMolecule = () => {
  const groupRef = useRef<Group>(null);
  const moleculeRef = useRef<Group>(null);
  const compoundsRef = useRef<Group>(null);
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.15;
      groupRef.current.position.y = Math.sin(time * 0.4) * 0.1;
    }
    
    if (moleculeRef.current) {
      moleculeRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      moleculeRef.current.rotation.z = Math.cos(time * 0.25) * 0.1;
    }
    
    // Animate floating compounds
    if (compoundsRef.current) {
      compoundsRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(time * 1.5 + index * 0.5) * 0.002;
        child.rotation.x = time * (0.2 + index * 0.05);
        child.rotation.y = time * (0.15 + index * 0.03);
      });
    }
    
    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(time * 2 + index) * 0.001;
        child.scale.setScalar(1 + Math.sin(time * 3 + index) * 0.2);
      });
    }
  });

  // Define chemical elements with realistic colors
  const elements = {
    carbon: { color: '#2D2D2D', size: 0.15, glow: '#404040' },
    oxygen: { color: '#FF3333', size: 0.12, glow: '#FF6666' },
    nitrogen: { color: '#3366FF', size: 0.13, glow: '#6699FF' },
    hydrogen: { color: '#FFFFFF', size: 0.08, glow: '#CCCCCC' },
    sulfur: { color: '#FFD700', size: 0.16, glow: '#FFED4E' },
    phosphorus: { color: '#FF6600', size: 0.14, glow: '#FF9944' }
  };

  // Create main molecular structure (drug compound)
  const mainMolecule = [
    // Central ring structure
    { position: [0, 0, 0] as [number, number, number], element: 'carbon', bonds: [1, 5] },
    { position: [0.8, 0, 0.6] as [number, number, number], element: 'carbon', bonds: [0, 2] },
    { position: [1.6, 0, 0] as [number, number, number], element: 'nitrogen', bonds: [1, 3] },
    { position: [1.6, 0, -0.8] as [number, number, number], element: 'carbon', bonds: [2, 4] },
    { position: [0.8, 0, -1.4] as [number, number, number], element: 'oxygen', bonds: [3, 5] },
    { position: [0, 0, -0.8] as [number, number, number], element: 'carbon', bonds: [4, 0] },
    
    // Side chains
    { position: [-0.8, 0.8, 0] as [number, number, number], element: 'nitrogen', bonds: [0] },
    { position: [2.4, 0.8, 0.6] as [number, number, number], element: 'sulfur', bonds: [2] },
    { position: [0.8, -0.8, -2.2] as [number, number, number], element: 'phosphorus', bonds: [4] },
    
    // Hydrogens
    { position: [-0.4, 1.2, 0.4] as [number, number, number], element: 'hydrogen', bonds: [6] },
    { position: [3.0, 1.2, 0.2] as [number, number, number], element: 'hydrogen', bonds: [7] },
    { position: [1.4, -1.2, -2.8] as [number, number, number], element: 'hydrogen', bonds: [8] }
  ];

  // Create bonds between atoms
  const bonds = [];
  mainMolecule.forEach((atom, atomIndex) => {
    atom.bonds?.forEach(bondIndex => {
      if (bondIndex > atomIndex) { // Avoid duplicate bonds
        const atom1 = mainMolecule[atomIndex];
        const atom2 = mainMolecule[bondIndex];
        const midpoint = [
          (atom1.position[0] + atom2.position[0]) / 2,
          (atom1.position[1] + atom2.position[1]) / 2,
          (atom1.position[2] + atom2.position[2]) / 2
        ] as [number, number, number];
        
        bonds.push({
          midpoint,
          atom1: atom1.position,
          atom2: atom2.position
        });
      }
    });
  });

  // Create floating compound molecules
  const compounds = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = 3 + Math.random() * 2;
    compounds.push({
      position: [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3,
        Math.sin(angle) * radius
      ] as [number, number, number],
      element: Object.keys(elements)[Math.floor(Math.random() * Object.keys(elements).length)] as keyof typeof elements,
      rotationSpeed: 0.5 + Math.random() * 0.5
    });
  }

  // Create energy particles
  const particles = [];
  for (let i = 0; i < 30; i++) {
    particles.push({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 8
      ] as [number, number, number],
      size: 0.03 + Math.random() * 0.05,
      color: `hsl(${180 + Math.random() * 60}, 80%, ${60 + Math.random() * 20}%)`
    });
  }

  return (
    <group ref={groupRef}>
      {/* Main molecular structure */}
      <group ref={moleculeRef}>
        {/* Atoms */}
        {mainMolecule.map((atom, index) => {
          const element = elements[atom.element as keyof typeof elements];
          return (
            <Sphere key={`atom-${index}`} position={atom.position} args={[element.size, 16, 16]}>
              <meshStandardMaterial 
                color={element.color} 
                metalness={0.7} 
                roughness={0.3}
                emissive={element.glow}
                emissiveIntensity={0.2}
              />
            </Sphere>
          );
        })}
        
        {/* Chemical bonds */}
        {bonds.map((bond, index) => {
          const distance = Math.sqrt(
            Math.pow(bond.atom2[0] - bond.atom1[0], 2) +
            Math.pow(bond.atom2[1] - bond.atom1[1], 2) +
            Math.pow(bond.atom2[2] - bond.atom1[2], 2)
          );
          
          return (
            <Cylinder 
              key={`bond-${index}`} 
              position={bond.midpoint} 
              args={[0.03, 0.03, distance, 8]}
              rotation={[
                Math.atan2(bond.atom2[1] - bond.atom1[1], Math.sqrt(Math.pow(bond.atom2[0] - bond.atom1[0], 2) + Math.pow(bond.atom2[2] - bond.atom1[2], 2))),
                Math.atan2(bond.atom2[0] - bond.atom1[0], bond.atom2[2] - bond.atom1[2]),
                0
              ]}
            >
              <meshStandardMaterial 
                color="#CCCCCC" 
                metalness={0.8} 
                roughness={0.2}
                emissive="#666666"
                emissiveIntensity={0.1}
              />
            </Cylinder>
          );
        })}
      </group>

      {/* Floating compound molecules */}
      <group ref={compoundsRef}>
        {compounds.map((compound, index) => {
          const element = elements[compound.element];
          return (
            <Sphere key={`compound-${index}`} position={compound.position} args={[element.size * 0.7, 12, 12]}>
              <meshStandardMaterial 
                color={element.color} 
                metalness={0.9} 
                roughness={0.1}
                emissive={element.glow}
                emissiveIntensity={0.3}
                transparent={true}
                opacity={0.8}
              />
            </Sphere>
          );
        })}
      </group>

      {/* Energy particles */}
      <group ref={particlesRef}>
        {particles.map((particle, index) => (
          <Sphere key={`particle-${index}`} position={particle.position} args={[particle.size, 8, 8]}>
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
      case 'molecule':
        return <PharmaMolecule />;
      case 'particles':
        return <ParticleSystem />;
      case 'geometric':
        return <GeometricTransform />;
      default:
        return <PharmaMolecule />;
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