
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';
import WhatsAppButton from './components/WhatsAppButton';
import {
  //Sitio administrable
  Smartphone,
  Palette,
  Star,
  CheckCircle,
  Globe,
  Zap,
  Award,
  Clock,
  Mail,
  Phone,
  MapPin,
  Users
} from 'lucide-react';
import FAQSection from './components/faqs';
import FeaturesGrid from "./components/FeaturesGrid";


function App() {

  


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
<section
      id="inicio"
      className="relative pt-16 overflow-hidden h-screen"
    >
      {/* Columna izquierda (1/3) */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-black z-0 hidden md:block" />

      {/* Columna derecha (2/3) con video */}
      <div className="absolute top-0 md:left-1/3 left-0 md:w-2/3 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/vo.mp4"
        />
      </div>

      {/* Contenido encima */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">

          {/* Filtro degradado SOLO en móvil y solo detrás del texto */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/50 to-transparent md:hidden pointer-events-none rounded-2xl" />

          {/* Textos animados */}
<motion.div
  className="text-center lg:text-left relative"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* Título principal */}
  <motion.h1
    className="font-oswald text-4xl md:text-6xl font-bold text-white leading-tight tracking-wide mb-4"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
<span className="block font-normal">SITIOS WEB</span>

<span className="block text-6xl md:text-8xl font-extrabold mb-2">PROFESIONALES</span>

<span className="block text-3xl md:text-4xl font-light">

  <span className="inline-block ml-10 align-top">PARA</span> <span className="font-normal md:text-7xl">TU NEGOCIO</span>
</span>


  </motion.h1>

  {/* Párrafo descriptivo */}
  <motion.p
    className="text-2xl md:text-xl text-gray-400 mb-8 max-w-100 pt-7"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
  >
    Creamos sitios web con diseños modernos, precios justos y optimizados para
    celular. Tu negocio merece una presencia digital profesional.
  </motion.p>

  {/* Botones */}
  <motion.div
    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <button
      onClick={() =>
        document
          .getElementById("contacto")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="px-6 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-orange-400 to-pink-600 text-white shadow-lg hover:scale-105 transform transition-all duration-200"
    >
      Solicita tu cotización gratis
    </button>
    <button
      onClick={() =>
        document
          .getElementById("servicios")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="px-6 py-4 rounded-full text-lg font-semibold border-2 border-yellow-500 text-white hover:bg-yellow-500 hover:text-black transform transition-all duration-200"
    >
      Ver nuestros servicios
    </button>
  </motion.div>
</motion.div>

        </div>
      </div>

      {/* Botón desliza hacia abajo */}
      <motion.button
        onClick={() =>
          document
            .getElementById("servicios")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity cursor-pointer bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
        <span className="text-sm font-medium">Desliza hacia abajo</span>
      </motion.button>

    </section>



      {/* Services Section */}
      <section id="servicios" className="py-20 bg-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas de diseño web adaptadas a las necesidades
              de pequeños negocios. Desde páginas básicas hasta tiendas en línea.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Paquete Básico */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300 border-4 border-purple-600">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Profesional</h3>
                <p className='mb-3'>Para personas y empresas que desean establecer su presencia en línea. </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-purple-600">$5,350</span>
                  <span className="text-gray-600 ml-2">MXN</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Sitio web de 1 a 3 páginas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Diseño para computadoras y celulares</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Galería de productos básica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Optimización para aparecer en Google</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>1 año de hosting y dominio incluido</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Integración Google Maps</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Integración redes sociales</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Copywriting profesional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>2 revisiones incluidas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Entrega en 7 días hábiles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Botón flotante de WhatsApp </span>
                  </li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  Elegir Profesional
                </button>
              </div>
            </div>

            {/* Paquete Profesional */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300 border-4 border-pink-600">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Más Popular
                </span>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className='mb-3'>Perfecto para PYMEs y negocios en crecimiento.</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-pink-600">$8,999</span>
                  <span className="text-gray-600 ml-2">MXN</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Todo lo del paquete Profesional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Hasta 7 páginas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Galeria de productos avanzada</span>
                  </li>

                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>3 revisiones incluidas</span>
                  </li>

                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Efectos animados</span>
                  </li>

                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Diseño personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Sistema de reservas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Display de Reseñas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>SEO avanzado </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Entrega en 14 días hábiles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Formulario de contacto</span>
                  </li>
                </ul>
                <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 ">
                  Elegir Premium
                </button>
              </div>
            </div>

            {/* Paquete Comercio */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300 border-4 border-[#FFAE33]">
              <div className="text-center">
                <div className="bg-[#f8e5c9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[#FFAE33]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalizado</h3>
                <p className='mb-3'>Para proyectos especiales que requieren funcionalidades únicas y soluciones a la medida.</p>
                <div className="mb-6">
                  <span className="text-gray-600 ml-2" >Desde: </span><span className="text-4xl font-bold text-[#FFAE33]">$19,999</span>
                  <span className="text-gray-600 ml-2">MXN</span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Todo lo del paquete Premium Pro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Tienda en línea completa</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Carrito de compras</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Pagos con tarjeta</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Inventario automático</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Entrenamiento incluido</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Integraciones a medida </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Funciones personalizadas</span>
                  </li>
                  <br />
                  <br />
                  <br />
                </ul>
                <button className="w-full bg-[#FFAE33] text-white py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200">
                  Elegir Personalizado
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-white">¿Por qué elegir Prismatiko</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos especialistas en crear sitios web que realmente funcionen para tu negocio
            </p>
          </div>

<FeaturesGrid/>

        </div>
      </section>



      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Más de 200 negocios mexicanos confían en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Prismatiko transformó completamente mi restaurante. Ahora recibo
                más reservas por internet que por teléfono. El sitio web es
                hermoso y muy fácil de usar."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="María González"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">María González</h4>
                  <p className="text-gray-600">Restaurante La Cocina de María</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Mi salón de belleza ahora tiene una presencia digital increíble.
                Las clientas pueden ver mis trabajos y agendar citas en línea.
                ¡El equipo de Prismatiko es genial!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Ana Rodríguez"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Ana Rodríguez</h4>
                  <p className="text-gray-600">Salón de Belleza Ana</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Como contador, necesitaba una página web profesional que
                transmitiera confianza. Prismatiko creó exactamente lo que
                necesitaba. Ahora consigo más clientes."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Carlos Méndez"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Carlos Méndez</h4>
                  <p className="text-gray-600">Despacho Contable CM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


         <FAQSection />

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contacta con nosotros
            </h2>
            <p className="text-xl text-gray-600">
              ¿Listo para llevar tu negocio al siguiente nivel? Hablemos de tu proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Información de contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+52 55 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">hola@prismatiko.mx</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ubicación</p>
                      <p className="text-gray-600">Ciudad de México, México</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Horario de atención
                </h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span className="font-semibold">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-semibold">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-semibold">Cerrado</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-semibold mb-4">
                  ¿Prefieres hablar por WhatsApp?
                </h4>
                <p className="mb-4">
                  Te respondemos más rápido por WhatsApp. Haz clic en el botón verde
                  para iniciar una conversación.
                </p>
                <a
                  href="https://wa.me/525512345678?text=¡Hola! Me interesa conocer más sobre sus servicios de diseño web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


   

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Prismatiko</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Especialistas en diseño web para pequeños negocios mexicanos.
                Creamos sitios web que convierten visitas en clientes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Diseño Web Profesional</li>
                <li>Tiendas en Línea</li>
                <li>Optimización SEO</li>
                <li>Hosting y Dominio</li>
                <li>Mantenimiento Web</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <p>+52 55 1234 5678</p>
                <p>hola@prismatiko.mx</p>
                <p>Ciudad de México, México</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Prismatiko. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;