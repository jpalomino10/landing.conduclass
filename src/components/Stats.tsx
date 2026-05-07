"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Academias activas", description: "en toda Colombia" },
  { value: "12 000+", label: "Estudiantes gestionados", description: "cada mes" },
  { value: "98%", label: "Satisfacción de clientes", description: "en encuestas NPS" },
  { value: "3 min", label: "Tiempo de configuración", description: "para empezar" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 bg-white border-y border-slate-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-600">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
