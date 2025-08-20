import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartTrail {
  id: number;
  x: number;
  y: number;
}

const CursorTrail: React.FC = () => {
  const [hearts, setHearts] = useState<HeartTrail[]>([]);

  useEffect(() => {
    let heartId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newHeart: HeartTrail = {
        id: heartId++,
        x: e.clientX,
        y: e.clientY
      };

      setHearts(prev => [...prev.slice(-4), newHeart]);
    };

    // Throttle mouse move events
    let throttleTimer: number | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer === null) {
        throttleTimer = window.setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null;
        }, 100);
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    // Clean up hearts
    const cleanupInterval = setInterval(() => {
      setHearts(prev => prev.slice(-5));
    }, 2000);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      clearInterval(cleanupInterval);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {hearts.map((heart, index) => (
        <Heart
          key={heart.id}
          className="absolute text-pink-400 animate-fade-out fill-current"
          style={{
            left: heart.x - 10,
            top: heart.y - 10,
            width: '20px',
            height: '20px',
            opacity: (5 - index) * 0.2,
            animationDelay: `${index * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;
