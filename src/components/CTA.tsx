"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl px-8 py-16 sm:px-16 text-center shadow-2xl shadow-blue-200"
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-blue-100 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              30 días gratis, sin compromisos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Moderniza tu academia hoy mismo
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Únete a más de 500 academias de conducción que ya gestionan sus clases,
              instructores y vehículos con ConduClass. Configúrate en minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                Comenzar gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+573001234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-2xl border border-white/30 transition-all"
              >
                Hablar con un asesor
              </a>
            </div>

            <p className="mt-6 text-blue-200 text-sm">
              Sin tarjeta de crédito · Cancela cuando quieras · Soporte en español
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
