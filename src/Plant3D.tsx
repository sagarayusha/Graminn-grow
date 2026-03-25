import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

function PlantModel() {
  const meshRef = useRef<any>();
  
  // Rotating animation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Simple 3D representation since we don't have an actual GLTF model */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
        <meshStandardMaterial color="#0B3D2E" />
      </mesh>
      
      {/* Leaves */}
      <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color="#22C55E" />
      </mesh>
      <mesh position={[-0.5, -0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="#22C55E" />
      </mesh>
      
      {/* Infected area (red glowing spot) */}
      <mesh position={[0.8, 0.2, 0.2]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

export default function Plant3D() {
  return (
    <div className="w-full h-48 bg-black/30 rounded-xl overflow-hidden border border-white/10 relative">
      <div className="absolute top-2 left-2 z-10 text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/50">
        Infected Area Highlighted
      </div>
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        <PlantModel />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}