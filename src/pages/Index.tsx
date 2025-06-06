
import { Heart } from "lucide-react";
import HeartFireworks from "@/components/valentine/HeartFireworks";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-valentine-cream to-valentine-lightblue">
      {/* Heart Fireworks Animation */}
      <HeartFireworks />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heart and message */}
          <div className="mb-8 animate-fade-in-up">
            <div className="mb-6">
              <Heart className="w-20 h-20 text-valentine-blue mx-auto mb-4 animate-pulse-heart" />
            </div>
            <h1 className="font-dancing text-6xl md:text-8xl font-bold valentine-text-gradient mb-6">
              Eu Te Amo
            </h1>
            <div className="glass-morphism rounded-2xl p-8 mb-6">
              <p className="text-xl md:text-2xl text-valentine-darkblue font-medium mb-4">
                Minha Amazona, Meu Amor
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Você é a luz que ilumina meus dias, minha vida. 
                Desde Belém até aqui, você trouxe magia para minha vida.
                Te amo infinitamente! 💙
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
