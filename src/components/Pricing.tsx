"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: { monthly: 99_000, annual: 79_000 },
    description: "Para academias pequeñas que empiezan a digitalizarse.",
    features: [
      "Hasta 50 estudiantes activos",
      "3 instructores",
      "5 vehículos",
      "Agenda básica",
      "Notificaciones por correo",
      "Soporte por correo",
    ],
    cta: "Empezar gratis",
    highlight: false,
  },
  {
    name: "Profesional",
    price: { monthly: 199_000, annual: 159_000 },
    description: "El plan más popular para academias en crecimiento.",
    features: [
      "Hasta 200 estudiantes activos",
      "Instructores ilimitados",
      "Vehículos ilimitados",
      "Agenda inteligente automática",
      "Notificaciones SMS + correo",
      "Reportes avanzados",
      "Evaluaciones por niveles",
      "Soporte prioritario",
    ],
    cta: "Empezar gratis",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    description: "Para redes de academias con necesidades personalizadas.",
    features: [
      "Estudiantes ilimitados",
      "Múltiples sedes",
      "API e integraciones a medida",
      "White-label disponible",
      "Onboarding dedicado",
      "SLA garantizado 99.9%",
      "Soporte 24/7 dedicado",
    ],
    cta: "Hablar con ventas",
    highlight: false,
  },
];

function formatPrice(p: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(p);
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="precios" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Precios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Planes simples y transparentes
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Empieza gratis por 30 días. Sin tarjeta de crédito requerida.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-2xl border border-slate-200 p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                !annual ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl transition-all ${
                annual ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Anual
              <span className="text-xs bg-green-400 text-green-900 px-1.5 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-200 scale-105"
                  : "bg-white border-slate-200 hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-orange-400 text-orange-900 text-xs font-bold rounded-full shadow">
                    <Zap className="w-3 h-3" /> Más popular
                  </span>
                </div>
              )}

              <div className={`text-sm font-semibold mb-1 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                {plan.name}
              </div>
              <div className="mb-2">
                {plan.price.monthly ? (
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                      {formatPrice(annual ? plan.price.annual! : plan.price.monthly)}
                    </span>
                    <span className={`text-sm mb-1.5 ${plan.highlight ? "text-blue-200" : "text-slate-400"}`}>
                      /mes
                    </span>
                  </div>
                ) : (
                  <div className={`text-3xl font-extrabold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                    A medida
                  </div>
                )}
              </div>
              <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? "text-blue-100" : "text-slate-500"}`}>
                {plan.description}
              </p>

              <a
                href="#contacto"
                className={`block text-center py-3 px-6 rounded-2xl font-semibold text-sm transition-all mb-8 ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlight ? "text-blue-200" : "text-blue-600"
                      }`}
                    />
                    <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
