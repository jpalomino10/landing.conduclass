"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Peñaloza",
    role: "Director, Academia Vial Bogotá",
    avatar: "RP",
    color: "bg-blue-600",
    rating: 5,
    text: "ConduClass transformó la operación de nuestra academia. Antes tardábamos horas organizando los horarios; ahora todo está automatizado. Nuestros instructores están más tranquilos y los estudiantes más satisfechos.",
  },
  {
    name: "Camila Ospina",
    role: "Administradora, ConductMed Medellín",
    avatar: "CO",
    color: "bg-purple-600",
    rating: 5,
    text: "La gestión de los vehículos y el control de mantenimiento fue lo que me enamoró. Ya no se nos 'cuela' ningún carro sin revisión. Además, los reportes nos ayudan a tomar mejores decisiones cada mes.",
  },
  {
    name: "Jorge Ramírez",
    role: "Fundador, EscuelaMoto Cali",
    avatar: "JR",
    color: "bg-orange-500",
    rating: 5,
    text: "Empezamos con 30 estudiantes y hoy gestionamos 180 gracias a que la plataforma escala con nosotros. El soporte del equipo es excepcional, siempre están disponibles cuando los necesitamos.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Academias que ya confían en ConduClass
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Más de 500 academias en Colombia ya gestionan sus clases con nosotros.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
