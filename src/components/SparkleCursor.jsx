import { useEffect, useRef } from 'react';

const COLORS = [
  '#ffffff', // Pure white
  '#e0e0e0', // Light silver
  '#f8f8ff', // Ghost white
  '#d1d5db', // Tailwind gray-300 (soft silver)
];

const TRAIL_LENGTH = 6;
const MIN_DIST = 10; // Minimum px between sparkles
const MAX_SIZE = 20;
const MIN_SIZE = 8;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function SparkleCursor() {
  const lastPos = useRef({ x: null, y: null });
  const trail = useRef([]);

  useEffect(() => {
    const handleMove = (e) => {
      const { x, y } = lastPos.current;
      if (x !== null && y !== null) {
        const dist = Math.hypot(e.clientX - x, e.clientY - y);
        if (dist < MIN_DIST) return;
      }
      lastPos.current = { x: e.clientX, y: e.clientY };
      // Add new position to trail
      trail.current.push({ x: e.clientX, y: e.clientY, t: Date.now() });
      if (trail.current.length > TRAIL_LENGTH) trail.current.shift();
      // Render all sparkles in the trail
      trail.current.forEach((pos, i) => {
        const t = i / (TRAIL_LENGTH - 1);
        const size = MAX_SIZE - t * (MAX_SIZE - MIN_SIZE);
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.left = `${pos.x - size / 2}px`;
        sparkle.style.top = `${pos.y - size / 2}px`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.zIndex = 9999;
        sparkle.style.opacity = `${0.8 - t * 0.5}`;
        sparkle.style.transition = 'opacity 0.7s linear, transform 0.7s linear';
        sparkle.style.transform = `rotate(${randomBetween(0, 360)}deg) scale(1)`;
        sparkle.innerHTML = `
          <svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#glow)">
              <path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" fill="${color}"/>
            </g>
            <defs>
              <filter id="glow" x="-10" y="-10" width="40" height="40">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        `;
        document.body.appendChild(sparkle);
        requestAnimationFrame(() => {
          sparkle.style.opacity = '0';
          sparkle.style.transform += ` scale(${randomBetween(1.2, 1.5)})`;
        });
        setTimeout(() => {
          sparkle.remove();
        }, 700);
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return null;
} 