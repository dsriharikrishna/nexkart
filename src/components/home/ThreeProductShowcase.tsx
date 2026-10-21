"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

export function ThreeProductShowcase() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffeedd, 2.0);
    dirLight1.position.set(5, 8, 4);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xaaccff, 1.2);
    dirLight2.position.set(-5, -3, 3);
    scene.add(dirLight2);

    // Group for sculptural objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Sculptural Outer Cuff Ring (Solid Sterling / Platinum aesthetic)
    const torusGeo = new THREE.TorusGeometry(1.2, 0.28, 32, 100, Math.PI * 1.85);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8d8,
      metalness: 0.92,
      roughness: 0.18,
      envMapIntensity: 1.5,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 4;
    group.add(torus);

    // 2. Faceted Gemstone / Architectural Crystal Center
    const octaGeo = new THREE.OctahedronGeometry(0.55, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x9e643c, // Brand accent bronze/amber
      metalness: 0.3,
      roughness: 0.2,
      transparent: true,
      opacity: 0.88,
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    group.add(octa);

    // 3. Delicate Orbit Ring (Warm Gold)
    const ringGeo = new THREE.TorusGeometry(1.7, 0.04, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059, // Gold
      metalness: 0.95,
      roughness: 0.1,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 3;
    ring.rotation.y = Math.PI / 6;
    group.add(ring);

    // Mouse drag interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging) {
        group.rotation.y += delta * 0.45;
        octa.rotation.y -= delta * 0.6;
        octa.rotation.x += delta * 0.3;
        ring.rotation.z += delta * 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, [isRotating]);

  return (
    <div className="relative flex h-[380px] w-full items-center justify-center overflow-hidden border border-neutral-800 bg-[#111111] md:h-[480px]">
      <div ref={mountRef} className="h-full w-full cursor-grab active:cursor-grabbing" />

      {/* Editorial 3D Badge & Interactive Controls */}
      <div className="pointer-events-none absolute left-4 top-4 z-10">
        <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
          3D ATELIER ARTIFACT
        </span>
        <h4 className="mt-0.5 font-heading text-sm font-semibold tracking-wide text-white">
          Arc Cuff & Topaz Core
        </h4>
        <p className="text-[11px] text-neutral-400">Interactive 360° tactile render</p>
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className="backdrop-blur-xs border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/20"
        >
          {isRotating ? "Pause Spin" : "Auto Spin"}
        </button>
        <span className="hidden text-[10px] uppercase tracking-[0.15em] text-neutral-400 sm:inline">
          Drag to inspect
        </span>
      </div>
    </div>
  );
}
