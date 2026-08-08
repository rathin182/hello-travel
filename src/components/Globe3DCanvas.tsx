"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.05;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.3;
      ringRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Outer Camera Ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[2.4, 2.45, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} wireframe />
      </mesh>

      <mesh>
        <ringGeometry args={[2.8, 2.82, 32]} />
        <meshBasicMaterial color="#52525b" side={THREE.DoubleSide} wireframe />
      </mesh>

      {/* 3D Wireframe Globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 24, 24]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.35}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const count = 120;
  const points = useRef<THREE.Points>(null);

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12;
  }

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.6} />
    </points>
  );
}

export default function Globe3DCanvas() {
  return (
    <section className="relative py-24 bg-[#050505] border-b border-zinc-900 px-6 sm:px-12 lg:px-16 overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-xs font-mono text-zinc-300 w-max">
            <span>3D INTERACTIVE GLOBE // THREE.JS ENGINE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black font-cinzel text-white uppercase leading-tight">
            GLOBAL CHARTER <br />
            <span className="text-stroke-white text-transparent">NAVIGATION</span>
          </h2>

          <p className="text-sm text-zinc-300 font-light leading-relaxed">
            Our global route matrix tracks flight paths, maritime currents, and mountain passes across 40+ countries. 
            Interact with the 3D lens coordinates to view real-time expedition availability.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold font-syne text-white block">48.85° N</span>
              <span className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase">PARIS HEADQUARTERS</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold font-syne text-white block">40+ PORTS</span>
              <span className="text-[10px] font-syne tracking-widest text-zinc-400 uppercase">GLOBAL ANCHORAGES</span>
            </div>
          </div>
        </div>

        {/* Right 3D Canvas */}
        <div className="lg:col-span-7 h-[420px] sm:h-[500px] w-full rounded-3xl glass-panel border border-zinc-800 overflow-hidden relative cursor-grab active:cursor-grabbing">
          <div className="absolute top-4 left-4 z-10 text-[10px] font-mono text-zinc-400 bg-black/80 px-3.5 py-1.5 rounded-full border border-zinc-800">
            [ 3D RENDER ENGINE: THREE.JS // DRAG TO ROTATE ]
          </div>

          <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <RotatingGlobe />
            </Float>
            <ParticleField />
            <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
