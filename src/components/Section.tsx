import {
  //Sitio administrable

  CheckCircle,
  Globe,
  Zap,
  Award,

} from 'lucide-react';

export const Section = () => {




    

  return (
    <>
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
                   <br />
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
    </>
  )
}
