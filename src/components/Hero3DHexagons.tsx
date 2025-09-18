import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// Hexagon geometry
const createHexagonGeometry = () => {
  const shape = new THREE.Shape();
  const radius = 1;
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath();
  
  const extrudeSettings = {
    depth: 0.15,
    bevelEnabled: true,
    bevelSegments: 1,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05
  };
  
  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
};

interface HexagonProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
}

const Hexagon = ({ position, rotation, scale, color }: HexagonProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => createHexagonGeometry(), []);
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position} rotation={rotation} scale={scale}>
        <mesh ref={meshRef} geometry={geometry}>
          <meshPhongMaterial 
            color={color} 
            transparent 
            opacity={0.7}
            shininess={100}
          />
        </mesh>
        {/* Inner glow effect */}
        <mesh geometry={geometry} scale={0.8}>
          <meshPhongMaterial 
            color={color} 
            transparent 
            opacity={0.3}
            shininess={200}
          />
        </mesh>
      </group>
    </Float>
  );
};

const Hero3DHexagons = () => {
  const hexagons = useMemo(() => [
    {
      position: [2, 1, 0] as [number, number, number],
      rotation: [0.1, 0.2, 0] as [number, number, number],
      scale: 0.8,
      color: "#22d3ee"
    },
    {
      position: [-1, 2, 1] as [number, number, number],
      rotation: [0.2, -0.1, 0.1] as [number, number, number],
      scale: 0.6,
      color: "#0ea5e9"
    },
    {
      position: [3, -1, -1] as [number, number, number],
      rotation: [-0.1, 0.3, -0.1] as [number, number, number],
      scale: 0.7,
      color: "#22d3ee"
    },
    {
      position: [0, 0, 2] as [number, number, number],
      rotation: [0.3, 0.1, 0.2] as [number, number, number],
      scale: 0.9,
      color: "#0ea5e9"
    },
    {
      position: [-2, -1, 0] as [number, number, number],
      rotation: [0.1, -0.2, 0.3] as [number, number, number],
      scale: 0.5,
      color: "#38bdf8"
    },
    {
      position: [1, -2, 1] as [number, number, number],
      rotation: [-0.2, 0.1, -0.1] as [number, number, number],
      scale: 0.6,
      color: "#22d3ee"
    },
    {
      position: [-3, 1, -1] as [number, number, number],
      rotation: [0.2, 0.3, 0.1] as [number, number, number],
      scale: 0.8,
      color: "#0ea5e9"
    },
    {
      position: [0, 3, 0] as [number, number, number],
      rotation: [-0.1, -0.1, 0.2] as [number, number, number],
      scale: 0.4,
      color: "#38bdf8"
    },
    {
      position: [2, 0, -2] as [number, number, number],
      rotation: [0.3, -0.2, 0.1] as [number, number, number],
      scale: 0.7,
      color: "#22d3ee"
    },
    {
      position: [-1, -3, 1] as [number, number, number],
      rotation: [0.1, 0.4, -0.2] as [number, number, number],
      scale: 0.5,
      color: "#0ea5e9"
    },
    {
      position: [4, 2, 0] as [number, number, number],
      rotation: [0.2, -0.3, 0.1] as [number, number, number],
      scale: 0.3,
      color: "#38bdf8"
    },
    {
      position: [-2, 2, -2] as [number, number, number],
      rotation: [-0.1, 0.1, -0.2] as [number, number, number],
      scale: 0.4,
      color: "#22d3ee"
    }
  ], []);

  return (
    <div className="w-full h-96 lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#22d3ee" />
        <pointLight position={[5, -5, 5]} intensity={0.3} color="#0ea5e9" />
        
        {hexagons.map((hex, index) => (
          <Hexagon key={index} {...hex} />
        ))}
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DHexagons;