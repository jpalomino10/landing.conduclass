"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Smartphone, Lock } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorra hasta 10 horas semanales",
    description:
      "Automatiza la programación de clases, envío de recordatorios y generación de reportes. Dedica ese tiempo a mejorar la calidad de tu enseñanza.",
    items: [
      "Agenda automática con validación de disponibilidad",
      "Recordatorios por SMS y correo electrónico",
      "Reportes listos en un clic",
    ],
    accent: "blue",
  },
  {
    icon: Smartphone,
    title: "Accesible desde cualquier dispositivo",
    description:
      "Diseñada mobile-first para que administradores, instructores y estudiantes puedan usar la plataforma desde celular, tablet o computador sin fricción.",
    items: [
      "Interfaz adaptable a cualquier pantalla",
      "App web progresiva (PWA)",
      "Funciona sin conexión en modo básico",
    ],
    accent: "purple",
  },
  {
    icon: Lock,
    title: "Seguridad y cumplimiento legal",
    description:
      "Cumple con la Ley Habeas Data de Colombia. Datos cifrados, copias de seguridad automáticas y control de acceso por roles.",
    items: [
      "Roles: Administrador, Instructor, Estudiante",
      "Cifrado de datos en reposo y tránsito",
      "Backups automáticos diarios",
    ],
    accent: "green",
  },
];

const accentMap: Record<string, string> = {
  blue: "bg-blue-600 text-white shadow-blue-200",
  purple: "bg-purple-600 text-white shadow-purple-200",
  green: "bg-green-600 text-white shadow-green-200",
};

const badgeMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
  green: "bg-green-50 text-green-700",
};

const dotMap: Record<string, string> = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
};

export default function Benefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="beneficios" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            ¿Por qué elegir ConduClass?
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Construido pensando en las necesidades reales de las academias de conducción
            en Colombia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${accentMap[benefit.accent]} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {benefit.description}
                </p>

                <ul className="space-y-2">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${dotMap[benefit.accent]}`}
                      />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a
                    href="#contacto"
                    className={`inline-block text-sm font-semibold px-4 py-2 rounded-xl ${badgeMap[benefit.accent]} hover:opacity-80 transition-opacity`}
                  >
                    Saber más →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
