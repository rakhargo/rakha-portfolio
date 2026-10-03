'use client';
import { useEffect, useRef } from 'react';

// A mathematical network visualization: three intersecting surfaces represent
// the overlap between software, AI, and decentralized systems.
export default function Constellation({ paused }) {
  const canvasRef = useRef(null);
  const phaseRef = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let frame, inViewport = true, phase = phaseRef.current, lastTime = 0;
    let width = 0, height = 0;
    const lowEnd = (navigator.hardwareConcurrency || 8) <= 4;
    const project = (x, y, z, rotation) => {
      const a = rotation + 0.45;
      const rx = x * Math.cos(a) + z * Math.sin(a);
      const rz = -x * Math.sin(a) + z * Math.cos(a);
      const ry = y * Math.cos(0.45) - rz * Math.sin(0.45);
      const depth = y * Math.sin(0.45) + rz * Math.cos(0.45);
      const perspective = 700 / (700 + depth);
      const scale = Math.min(width, height) / 540;
      return [width / 2 + rx * perspective * scale, height / 2 + ry * perspective * scale, depth];
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.min(width, height) * 0.47;
      const glow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, radius);
      glow.addColorStop(0, 'rgba(195,215,255,0.46)');
      glow.addColorStop(0.68, 'rgba(219,231,255,0.20)');
      glow.addColorStop(1, 'rgba(238,245,255,0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
      const rings = lowEnd ? 24 : 38;
      for (let ring = 0; ring < rings; ring++) {
        const angle = ring / rings * Math.PI * 2;
        ctx.beginPath();
        for (let step = 0; step <= 90; step++) {
          const t = step / 90 * Math.PI * 2;
          const wave = 128 + 52 * Math.cos(t * 3 + angle);
          const x = wave * Math.cos(angle);
          const z = wave * Math.sin(angle);
          const y = 98 * Math.sin(t) + 28 * Math.cos(angle * 3);
          const [px, py] = project(x, y, z, phase);
          if (!step) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = ring % 3 ? 'rgba(67,100,205,0.23)' : 'rgba(95,129,223,0.38)';
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }
      for (let i = 0; i < 110; i++) {
        const t = i / 110 * Math.PI * 2;
        const a = t * 7.3;
        const [px, py, depth] = project(190 * Math.cos(t) * Math.cos(a), 145 * Math.sin(t), 190 * Math.cos(t) * Math.sin(a), phase);
        ctx.beginPath(); ctx.arc(px, py, depth < 0 ? 1.9 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = depth < 0 ? 'rgba(53,88,238,0.7)' : 'rgba(112,143,224,0.35)'; ctx.fill();
      }
    };
    const loop = (time) => {
      if (time - lastTime > 33) { phase += 0.0018; phaseRef.current = phase; draw(); lastTime = time; }
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(frame);
      if (!paused && inViewport && !document.hidden && !lowEnd) frame = requestAnimationFrame(loop);
      else draw();
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width; height = entry.contentRect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    });
    const observer = new IntersectionObserver(([entry]) => { inViewport = entry.isIntersecting; start(); });
    const visibility = () => start();
    resize.observe(canvas); observer.observe(canvas);
    document.addEventListener('visibilitychange', visibility);
    start();
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); document.removeEventListener('visibilitychange', visibility); };
  }, [paused]);
  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />;
}
