import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Smartphone, Zap, Award, Users } from "lucide-react";

export default function FeaturesGrid() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 100 });

    const elements = document.querySelectorAll("[data-aos]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const cards = [
    {
      icon: <Smartphone className="w-10 h-10" style={{ color: "#ffa33a" }} />,
      title: "Optimizado para Celular",
      text: "Tu sitio web se verá perfecto en todos los dispositivos: móvil, tablet y desktop.",
      delay: 0,
    },
    {
      icon: <Zap className="w-10 h-10" style={{ color: "#ffa33a" }} />,
      title: "Hosting Incluido",
      text: "Te incluimos hosting rápido y seguro por un año completo. Sin complicaciones ni costos adicionales sorpresa.",
      delay: 100,
    },
    {
      icon: <Award className="w-10 h-10" style={{ color: "#ffa33a" }} />,
      title: "SEO Optimizado",
      text: "Te ayudamos a aparecer en Google para que más clientes encuentren tu negocio.",
      delay: 200,
    },
    {
      icon: <Users className="w-10 h-10" style={{ color: "#ffa33a" }} />,
      title: "Soporte Personalizado",
      text: "Te acompañamos en todo el proceso y después del lanzamiento de tu sitio web.",
      delay: 300,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-[Quicksand]">
      {cards.map((card, i) => (
        <div
          key={i}
          className="text-center group h-full flex flex-col"
          data-aos="fade-up"
          data-aos-delay={card.delay}
        >
          <div className="bg-[#940f8c] rounded-2xl p-8 border border-gray-700 hover:border-purple-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(148,15,140,0.4)] flex flex-col flex-1">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300 shadow-inner">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#ffa33a" }}>
              {card.title}
            </h3>
            <p className="text-gray-300">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
