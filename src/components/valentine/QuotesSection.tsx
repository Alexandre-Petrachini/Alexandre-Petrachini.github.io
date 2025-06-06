
import { Music, Heart, Star } from "lucide-react";

const QuotesSection = () => {
  const quotes = [
    {
      text: "Você é meu hoje e todos os meus amanhãs.",
      author: "Para minha amazona do coração"
    },
    {
      text: "Eu te amo não apenas pelo que você é, mas pelo que eu me torno quando estou com você.",
      author: "Inspirado em você, meu amor"
    },
    {
      text: "Em todo o mundo, não há coração para mim como o seu. Em todo o mundo, não há amor para você como o meu.",
      author: "De Belém para o infinito"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold valentine-text-gradient mb-4">
            Palavras de Amor
          </h2>
          <p className="text-lg text-gray-600">
            Palavras lindas que capturam como me sinto por você
          </p>
        </div>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl p-8 text-center animate-fade-in-up"
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <Music className="w-8 h-8 text-valentine-gold mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-4 italic">
                "{quote.text}"
              </blockquote>
              <cite className="text-valentine-blue font-semibold">
                — {quote.author}
              </cite>
              <div className="flex justify-center gap-2 mt-4">
                <Star className="w-4 h-4 text-valentine-gold" />
                <Star className="w-4 h-4 text-valentine-gold" />
                <Star className="w-4 h-4 text-valentine-gold" />
              </div>
            </div>
          ))}
        </div>

        {/* Personal message */}
        <div className="mt-16 text-center">
          <div className="glass-morphism rounded-3xl p-8 md:p-12">
            <Heart className="w-12 h-12 text-valentine-blue mx-auto mb-6 animate-pulse-heart" />
            <h3 className="font-dancing text-3xl md:text-4xl font-bold valentine-text-gradient mb-4">
              Minha Promessa Para Você
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Prometo te amar com cada respiração, apoiar seus sonhos com cada fibra do meu ser,
              e valorizar cada momento que compartilhamos juntos. Você é meu coração, minha alma, meu tudo.
              Que possamos sempre rir assistindo Auto da Compadecida, cantar Jessie J juntos, 
              e fazer carinho na nossa Mabel. Te amo infinitamente, minha amazona! 💙
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
