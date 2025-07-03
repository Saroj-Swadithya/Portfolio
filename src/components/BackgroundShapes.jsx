const shapes = {
  about: [
    { type: 'star', color: '#e6a9ec', size: 12, style: { top: 10, left: 40 } },
    { type: 'circle', color: '#e3e4fa', size: 16, style: { top: 10, right: 120 } },
    { type: 'heart', color: '#e56e94', size: 14, style: { bottom: 10, left: 60 } },
    { type: 'sparkle', color: '#d1d5db', size: 10, style: { bottom: 10, right: 80 } },
    { type: 'blob', color: '#fad0c4', size: 18, style: { top: 60, left: 10 } },
    { type: 'star', color: '#a6c1ee', size: 20, style: { top: 60, right: 10 } },
    { type: 'circle', color: '#e6a9ec', size: 14, style: { bottom: 60, left: 10 } },
    { type: 'heart', color: '#e56e94', size: 12, style: { bottom: 60, right: 10 } },
    { type: 'sparkle', color: '#d1d5db', size: 14, style: { top: 120, left: 120 } },
    { type: 'blob', color: '#fad0c4', size: 24, style: { bottom: 120, right: 120 } },
    { type: 'star', color: '#e6a9ec', size: 16, style: { top: 10, left: '50%' } },
    { type: 'circle', color: '#e3e4fa', size: 12, style: { bottom: 10, left: '50%' } },
    { type: 'heart', color: '#e56e94', size: 18, style: { top: '50%', left: 10 } },
    { type: 'sparkle', color: '#d1d5db', size: 12, style: { top: '50%', right: 10 } },
  ],
  projects: [
    { type: 'star', color: '#a1c4fd', size: 18, style: { top: 40, left: 100 } },
    { type: 'circle', color: '#ffe6e8', size: 16, style: { bottom: 60, right: 40 } },
    { type: 'blob', color: '#a6c1ee', size: 24, style: { top: 160, left: 160 } },
    { type: 'sparkle', color: '#e6a9ec', size: 14, style: { bottom: 120, right: 120 } },
    { type: 'heart', color: '#e56e94', size: 16, style: { top: 60, right: 60 } },
  ],
  experience: [
    { type: 'circle', color: '#fad0c4', size: 18, style: { top: 60, left: 60 } },
    { type: 'star', color: '#e6a9ec', size: 16, style: { bottom: 40, right: 80 } },
    { type: 'blob', color: '#a1c4fd', size: 22, style: { top: 120, right: 100 } },
    { type: 'sparkle', color: '#d1d5db', size: 14, style: { bottom: 100, left: 120 } },
    { type: 'heart', color: '#fad0c4', size: 16, style: { top: 180, left: 180 } },
  ],
  tech: [
    { type: 'blob', color: '#a1c4fd', size: 24, style: { top: 40, left: 120 } },
    { type: 'star', color: '#e6a9ec', size: 18, style: { bottom: 60, right: 60 } },
    { type: 'circle', color: '#c2e9fb', size: 16, style: { top: 100, right: 60 } },
    { type: 'sparkle', color: '#e3e4fa', size: 14, style: { bottom: 80, left: 180 } },
    { type: 'heart', color: '#e56e94', size: 16, style: { top: 60, right: 180 } },
  ],
  education: [
    { type: 'star', color: '#e6a9ec', size: 18, style: { top: 40, left: 60 } },
    { type: 'circle', color: '#e3e4fa', size: 16, style: { bottom: 60, right: 80 } },
    { type: 'blob', color: '#fad0c4', size: 24, style: { top: 120, right: 40 } },
    { type: 'sparkle', color: '#d1d5db', size: 14, style: { bottom: 100, left: 100 } },
    { type: 'heart', color: '#e56e94', size: 16, style: { top: 180, left: 180 } },
  ],
};

function renderShape({ type, color, size, style }, i) {
  const base = {
    position: 'absolute',
    opacity: 0.35,
    filter: 'blur(0.5px)',
    pointerEvents: 'none',
    ...style,
  };
  if (type === 'star') {
    return (
      <svg key={i} width={size} height={size} style={base} viewBox="0 0 20 20" fill="none"><path d="M10 2 L12 8 L18 10 L12 12 L10 18 L8 12 L2 10 L8 8 Z" fill={color} /></svg>
    );
  }
  if (type === 'circle') {
    return (
      <svg key={i} width={size} height={size} style={base} viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill={color} /></svg>
    );
  }
  if (type === 'heart') {
    return (
      <svg key={i} width={size} height={size} style={base} viewBox="0 0 20 20"><path d="M10 18s-6-4.35-6-8.5S6.5 2 10 6.5 16 2 16 9.5 10 18 10 18z" fill={color} /></svg>
    );
  }
  if (type === 'sparkle') {
    return (
      <svg key={i} width={size} height={size} style={base} viewBox="0 0 20 20"><path d="M10 2 L12 10 L18 10 L12 12 L10 18 L8 12 L2 10 L8 10 Z" fill={color} /></svg>
    );
  }
  if (type === 'blob') {
    return (
      <svg key={i} width={size} height={size} style={base} viewBox="0 0 20 20"><path d="M10 2 Q15 5 18 10 Q15 15 10 18 Q5 15 2 10 Q5 5 10 2Z" fill={color} /></svg>
    );
  }
  return null;
}

export default function BackgroundShapes({ variant }) {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {shapes[variant]?.map(renderShape)}
    </div>
  );
} 