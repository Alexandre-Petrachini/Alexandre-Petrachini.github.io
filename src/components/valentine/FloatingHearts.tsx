
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string; size: string }>>([]);

  useEffect(() => {
    const heartArray = [];
    for (let i = 0; i < 15; i++) {
      heartArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        size: Math.random() > 0.5 ? 'w-4 h-4' : 'w-3 h-3'
      });
    }
    setHearts(heartArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            top: '100%'
          }}
        >
          <Heart 
            className={`${heart.size} text-valentine-blue`}
            style={{
              animation: `float 6s ease-in-out infinite ${heart.delay}, 
                         pulse-heart 3s ease-in-out infinite ${heart.delay}`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
