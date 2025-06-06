
import { Heart, Star, Crown, Smile, Sun, Music } from "lucide-react";

const LoveReasons = () => {
  const reasons = [
    {
      icon: Smile,
      title: "Seu Sorriso Lindo",
      description: "Seu sorriso ilumina meu mundo inteiro e torna tudo melhor. É a primeira coisa em que penso quando acordo."
    },
    {
      icon: Heart,
      title: "Seu Coração Bondoso",
      description: "A forma como você cuida dos outros e demonstra compaixão me faz me apaixonar mais por você a cada dia."
    },
    {
      icon: Music,
      title: "Seu Gosto Musical",
      description: "Quando você canta Jessie J ou qualquer música pop, meu coração acelera. Sua voz é minha melodia favorita."
    },
    {
      icon: Star,
      title: "Sua Personalidade Única",
      description: "Você ama o Auto da Compadecida tanto quanto eu amo você. Seu humor e inteligência me fascinam infinitamente."
    },
    {
      icon: Crown,
      title: "Suas Raízes Paraenses",
      description: "Belém do Pará te deu essa força e beleza única. Você carrega a magia da Amazônia no seu olhar."
    },
    {
      icon: Sun,
      title: "Seu Amor pela Mabel",
      description: "Ver como você ama nossa gatinha Mabel me mostra o quanto seu coração é carinhoso e cheio de amor."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl md:text-6xl font-bold valentine-text-gradient mb-4">
            Por Que Te Amo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Existem infinitas razões pelas quais você significa tudo para mim. Aqui estão algumas...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-morphism rounded-2xl p-6 text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="valentine-gradient rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-heart">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-valentine-darkblue mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveReasons;
