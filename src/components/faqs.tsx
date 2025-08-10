import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "¿QUÉ NECESITO PARA EMPEZAR?",
    answer:
      "Te pediremos un cuestionario sencillo donde nos cuentes qué quieres en tu página y el contenido que tienes (fotos, logo, textos). Si no cuentas con alguno, no te preocupes, podemos ayudarte con eso. También necesitaremos información sobre tu negocio y el objetivo de la página. Así podremos crear una web que se adapte perfectamente a ti.",
  },
  {
    question: "¿QUÉ PASA SI NO ME GUSTA EL DISEÑO?",
    answer:
      "Nuestro objetivo es que quedes 100% satisfecho con el resultado. Por eso, durante todo el proceso trabajamos contigo, escuchando tus ideas y ajustando el diseño según tus comentarios. Además, tu sitio web incluye revisiones para asegurarnos de que te guste antes de finalizarlo.",
  },
  {
    question: "EL SITIO WEB ES MIO",
    answer:
      "Si, tu sitio web es completamente tuyo.",
  },
  {
    question: "¿CÓMO ES LA FORMA DE PAGO?",
    answer:
      "Para comenzar, solicitamos un 35% de anticipo. El resto se paga al entregarte la página, una vez que estés totalmente satisfecho. Aceptamos depósito bancario o transferencia electrónica."
  },
  {
    question: "¿QUPE PASA SI YA TENGO UN SITIO WEB",
    answer:
      "Nos encargamos de rediseñar e implementar un nuevo sitio web, optimizado con todas las funcionalidades que necesitas, asegurando que mantengas y mejores tu visibilidad en buscadores.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index : number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="bg-[#0b0b14] text-white py-16 px-4 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, x: 150 }} // de 50 a 150 para que se mueva más lejos
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 mb-2">• FAQs</p>
          <h2 className="text-5xl font-extrabold leading-tight">
            PREGUNTAS{" "}
            <span className="bg-gradient-to-r from-yellow-500  to-pink-500 bg-clip-text text-transparent">
              FRECUENTES
            </span>
          </h2>
        </motion.div>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/20 pb-4 cursor-pointer"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <motion.h3
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold"
                >
                  {faq.question}
                </motion.h3>
                {openIndex === index ? (
                  <ChevronUp className="text-pink-500" />
                ) : (
                  <ChevronDown className="text-pink-500" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-300 mt-2 leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
