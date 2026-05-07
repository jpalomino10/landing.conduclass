"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, CalendarCheck, ClipboardCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Registra tu academia",
    description:
      "Crea tu cuenta, configura el perfil de tu academia e importa tus datos de estudiantes, instructores y vehículos en minutos.",
    color: "bg-blue-600",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Programa tus clases",
    description:
      "Usa la agenda inteligente para asignar instructores y vehículos automáticamente. Tus estudiantes reciben recordatorios de forma automática.",
    color: "bg-purple-600",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Evalúa y registra",
    description:
      "El instructor registra el desempeño al finalizar cada clase. El estudiante ve su avance por niveles en tiempo real.",
    color: "bg-orange-500",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Analiza y crece",
    description:
      "Consulta reportes detallados de progreso, uso de recursos y rendimiento. Toma decisiones basadas en datos reales.",
    color: "bg-green-600",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="como-funciona" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            ¿Cómo funciona?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            De cero a tu academia digital en 4 pasos
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Configuración rápida, sin complicaciones técnicas. Empieza a operar el
            mismo día.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 mx-32" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number badge */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-lg z-10 relative`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-7 h-7 bg-white border-2 border-slate-200 rounded-full text-xs font-extrabold text-slate-400 flex items-center justify-center">
                      {step.number.slice(1)}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
