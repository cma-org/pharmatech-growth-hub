import { Canvas } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
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
  scale: number;
  color: string;
  text: string;
  subtext?: string;
}

const Hexagon = ({ position, scale, color, text, subtext }: HexagonProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => createHexagonGeometry(), []);
  
  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhongMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          shininess={100}
        />
      </mesh>
      {/* Inner glow effect */}
      <mesh geometry={geometry} scale={0.9}>
        <meshPhongMaterial 
          color={color} 
          transparent 
          opacity={0.2}
          shininess={200}
        />
      </mesh>
      
      {/* Main text */}
      <Text
        position={[0, 0.2, 0.2]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
      >
        {text}
      </Text>
      
      {/* Subtext */}
      {subtext && (
        <Text
          position={[0, -0.2, 0.2]}
          fontSize={0.12}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {subtext}
        </Text>
      )}
    </group>
  );
};

const Hero3DHexagons = () => {
  const hexagons = useMemo(() => [
    {
      position: [2, 1.5, 0] as [number, number, number],
      scale: 0.8,
      color: "#22d3ee",
      text: "GMP",
      subtext: "Compliance"
    },
    {
      position: [-1.5, 2, 1] as [number, number, number],
      scale: 0.7,
      color: "#0ea5e9",
      text: "GxP",
      subtext: "Training"
    },
    {
      position: [3, -0.5, -1] as [number, number, number],
      scale: 0.6,
      color: "#22d3ee",
      text: "Quality",
      subtext: "Assurance"
    },
    {
      position: [0.5, 0, 2] as [number, number, number],
      scale: 0.9,
      color: "#0ea5e9",
      text: "10K+",
      subtext: "Trained"
    },
    {
      position: [-2.5, -0.5, 0] as [number, number, number],
      scale: 0.5,
      color: "#38bdf8",
      text: "FDA",
      subtext: "Ready"
    },
    {
      position: [1.5, -2, 1] as [number, number, number],
      scale: 0.7,
      color: "#22d3ee",
      text: "Audit",
      subtext: "Excellence"
    },
    {
      position: [-3, 0.5, -1] as [number, number, number],
      scale: 0.8,
      color: "#0ea5e9",
      text: "CSV",
      subtext: "Systems"
    },
    {
      position: [0, 3, 0] as [number, number, number],
      scale: 0.4,
      color: "#38bdf8",
      text: "75+",
      subtext: "Years Exp"
    }
  ], []);

  return (
    <div className="w-full h-96 lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#22d3ee" />
        
        {hexagons.map((hex, index) => (
          <Hexagon key={index} {...hex} />
        ))}
      </Canvas>
    </div>
  );
};

export default Hero3DHexagons;