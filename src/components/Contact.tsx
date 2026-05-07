"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Deja tus datos y un asesor te contactará en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: "Correo electrónico",
                  value: "hola@conduclass.co",
                  href: "mailto:hola@conduclass.co",
                },
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: "+57 300 123 4567",
                  href: "https://wa.me/573001234567",
                },
                {
                  icon: MapPin,
                  label: "Cobertura",
                  value: "Todo Colombia",
                  href: "#",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-0.5">{item.label}</div>
                      <a
                        href={item.href}
                        className="text-base font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100">
              <div className="text-sm font-semibold text-slate-700 mb-4">
                Con ConduClass obtienes:
              </div>
              {[
                "30 días de prueba gratuita",
                "Migración de datos sin costo",
                "Capacitación incluida",
                "Soporte técnico en español",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-white fill-white">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-500 text-sm">
                  Te contactaremos en las próximas 24 horas. ¡Gracias por tu interés!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Carlos García"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Academia / Empresa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Academia Vial Colombia"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@academia.co"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    ¿Cuántos estudiantes activos tiene tu academia?
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-slate-700"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Menos de 20</option>
                    <option>20 - 50</option>
                    <option>50 - 150</option>
                    <option>150 - 300</option>
                    <option>Más de 300</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos sobre tu academia o las dudas que tienes..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all shadow-sm hover:shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Solicitar información gratuita
                </button>

                <p className="text-xs text-center text-slate-400">
                  Al enviar, aceptas nuestra{" "}
                  <a href="#" className="underline hover:text-slate-600">
                    política de privacidad
                  </a>
                  . Nunca compartiremos tus datos.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
