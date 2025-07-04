import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Box, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, shape = 'sphere' }: { position: [number, number, number], color: string, shape?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const ShapeComponent = () => {
    switch (shape) {
      case 'torus':
        return (
          <Torus ref={meshRef} args={[1, 0.3, 16, 100]}>
            <MeshWobbleMaterial color={color} factor={0.6} speed={2} />
          </Torus>
        );
      case 'box':
        return (
          <Box ref={meshRef} args={[1.5, 1.5, 1.5]}>
            <MeshDistortMaterial color={color} distort={0.3} speed={2} />
          </Box>
        );
      default:
        return (
          <Sphere ref={meshRef} args={[1, 32, 32]}>
            <MeshWobbleMaterial color={color} factor={0.4} speed={1.5} />
          </Sphere>
        );
    }
  };

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <ShapeComponent />
      </mesh>
    </Float>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        
        {/* Floating geometric shapes */}
        <FloatingShape position={[-4, 2, -2]} color="#a855f7" shape="sphere" />
        <FloatingShape position={[4, -1, -3]} color="#ec4899" shape="torus" />
        <FloatingShape position={[2, 3, -4]} color="#06b6d4" shape="box" />
        <FloatingShape position={[-3, -2, -1]} color="#f59e0b" shape="sphere" />
        <FloatingShape position={[0, -3, -5]} color="#8b5cf6" shape="torus" />
        <FloatingShape position={[-2, 1, -3]} color="#10b981" shape="box" />
      </Canvas>
    </div>
  );
};

export default Background3D;