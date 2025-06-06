
import { Heart, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

const HeartFireworks = () => {
  const [particles, setParticles] = useState<Array<{ 
    id: number; 
    x: number; 
    y: number; 
    type: 'heart' | 'sparkle' | 'star';
    delay: number;
    duration: number;
    direction: number;
    distance: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const centerX = 50; // 50% of screen width
      const centerY = 40; // 40% of screen height
      
      // Create explosion particles
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * 2 * Math.PI; // Distribute evenly in circle
        const distance = 100 + Math.random() * 200; // Random distance from center
        const type = i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'sparkle' : 'star';
        
        newParticles.push({
          id: i,
          x: centerX,
          y: centerY,
          type: type as 'heart' | 'sparkle' | 'star',
          delay: Math.random() * 2, // Random delay up to 2 seconds
          duration: 3 + Math.random() * 2, // Duration between 3-5 seconds
          direction: angle,
          distance: distance
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
    
    // Regenerate particles every 8 seconds
    const interval = setInterval(generateParticles, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: 'heart' | 'sparkle' | 'star') => {
    switch (type) {
      case 'heart':
        return Heart;
      case 'sparkle':
        return Sparkles;
      case 'star':
        return Star;
      default:
        return Heart;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map((particle) => {
        const Icon = getIcon(particle.type);
        const endX = particle.x + Math.cos(particle.direction) * (particle.distance / 10);
        const endY = particle.y + Math.sin(particle.direction) * (particle.distance / 10);
        
        return (
          <div
            key={particle.id}
            className="absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `firework-explode ${particle.duration}s ease-out ${particle.delay}s infinite`,
              '--end-x': `${endX - particle.x}vw`,
              '--end-y': `${endY - particle.y}vh`,
            } as React.CSSProperties}
          >
            <Icon 
              className={`w-4 h-4 text-valentine-blue opacity-80 ${
                particle.type === 'heart' ? 'text-valentine-blue' : 
                particle.type === 'sparkle' ? 'text-valentine-gold' : 
                'text-valentine-darkblue'
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeartFireworks;
