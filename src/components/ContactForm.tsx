import React, { useState, useEffect } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { useForm } from "@formspree/react";

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const [state, handleSubmitFormspree] = useForm("xkgzpllo");

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (
      !/^(\+52)?[\s\-]?(\d{2,3})[\s\-]?(\d{3,4})[\s\-]?(\d{4})$/.test(
        formData.telefono
      )
    ) {
      newErrors.telefono = "Ingresa un número de teléfono válido";
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio";
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!validateForm()) return;

  await handleSubmitFormspree(e);
};

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    }
  }, [state.succeeded]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          ¡Mensaje enviado con éxito!
        </h3>
        <p className="text-green-700">
          Gracias por contactarnos. Nos pondremos en contacto contigo dentro de las próximas 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl shadow-lg p-8 space-y-6"
    >
      {/* ... campos ... (igual que antes) */}
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
          <User className="w-4 h-4 inline mr-2" />
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.nombre ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Tu nombre completo"
        />
        {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          <Mail className="w-4 h-4 inline mr-2" />
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
          <Phone className="w-4 h-4 inline mr-2" />
          Teléfono *
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.telefono ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="55 1234 5678"
        />
        {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
            errors.mensaje ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Cuéntanos sobre tu proyecto..."
        />
        {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
      </div>

      {/* Botón */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Enviando mensaje...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Enviar mensaje</span>
          </>
        )}
      </button>

      <p className="text-sm text-gray-600 text-center">
        * Campos obligatorios. Respetamos tu privacidad y no compartimos tu información.
      </p>
    </form>
  );
};

export default ContactForm;
