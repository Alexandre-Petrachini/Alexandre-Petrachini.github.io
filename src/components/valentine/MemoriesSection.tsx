
import { Camera, MapPin, Calendar, Heart } from "lucide-react";

const MemoriesSection = () => {
  const memories = [
    {
      icon: Calendar,
      title: "Nosso Primeiro Encontro",
      description: "O momento em que soube que você era especial. O tempo pareceu parar quando olhei nos seus olhos.",
      emotion: "Nervosismo gostoso e conexão instantânea"
    },
    {
      icon: Heart,
      title: "Primeiro 'Eu Te Amo'",
      description: "Essas três palavras que mudaram tudo. Meu coração tem sido seu desde então.",
      emotion: "Alegria pura e amor avassalador"
    },
    {
      icon: MapPin,
      title: "Belém e Nossas Aventuras",
      description: "Sua cidade natal me encanta, assim como você. Cada lugar que visitamos juntos se torna mágico.",
      emotion: "Admiração e alegria compartilhada"
    },
    {
      icon: Camera,
      title: "Momentos com a Mabel",
      description: "Ver você brincando com nossa gatinha, rindo das travessuras dela. Esses momentos simples são meus tesouros.",
      emotion: "Contentamento e felicidade profunda"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-valentine-lightblue/10 to-valentine-cream/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold valentine-text-gradient mb-4">
            Nossas Memórias Lindas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada momento com você se torna uma memória preciosa que guardo no meu coração.
          </p>
        </div>

        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 animate-fade-in-up`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex-1">
                <div className="glass-morphism rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="valentine-gradient rounded-full w-12 h-12 flex items-center justify-center">
                      <memory.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-2xl text-valentine-darkblue">
                      {memory.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {memory.description}
                  </p>
                  <div className="text-sm text-valentine-blue font-medium italic">
                    "{memory.emotion}"
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="w-32 h-32 valentine-gradient rounded-full flex items-center justify-center heart-float">
                  <Heart className="w-16 h-16 text-white opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
