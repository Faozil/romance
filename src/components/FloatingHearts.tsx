import React from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <Heart
          key={i}
          className={`absolute text-pink-300 opacity-60 animate-float fill-current`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 20}px`,
            height: `${20 + Math.random() * 20}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
