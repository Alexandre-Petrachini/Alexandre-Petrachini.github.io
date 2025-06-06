
import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="font-dancing text-6xl md:text-8xl lg:text-9xl font-bold valentine-text-gradient mb-4">
            Eu Te Amo
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-valentine-gold animate-pulse" />
            <p className="text-xl md:text-2xl text-valentine-blue font-medium">
              Minha Vida, Meu Amor
            </p>
            <Sparkles className="w-6 h-6 text-valentine-gold animate-pulse" />
          </div>
        </div>

        {/* Love message */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Heart className="w-12 h-12 text-valentine-blue mx-auto mb-6 animate-pulse-heart" />
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
            Meu amor, você é a luz que ilumina meus dias, a melodia que faz meu coração cantar,
            e o sonho do qual nunca quero acordar. Desde Belém até aqui, você trouxe magia para
            minha vida. Cada momento ao seu lado é um presente, e cada dia me apaixono mais por você.
          </p>
          <div className="flex items-center justify-center gap-2 text-valentine-blue">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Para Sempre Sua</span>
            <Heart className="w-5 h-5" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="text-center">
            <div className="w-16 h-16 valentine-gradient rounded-full flex items-center justify-center mb-2 mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-medium text-valentine-blue">Meu Coração</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 valentine-gradient rounded-full flex items-center justify-center mb-2 mx-auto">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-medium text-valentine-blue">Meus Sonhos</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 valentine-gradient rounded-full flex items-center justify-center mb-2 mx-auto">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-medium text-valentine-blue">Meu Futuro</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
