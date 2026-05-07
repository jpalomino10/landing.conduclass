"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  UserCheck,
  Car,
  CalendarDays,
  ClipboardList,
  Bell,
  BarChart3,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestión de estudiantes",
    description:
      "Registra datos personales, documentos, historial de clases y seguimiento del progreso de cada estudiante.",
    color: "bg-blue-50 text-blue-600",
    border: "border-blue-100",
  },
  {
    icon: UserCheck,
    title: "Gestión de instructores",
    description:
      "Administra licencias, disponibilidad, asignaciones y rendimiento de cada instructor fácilmente.",
    color: "bg-orange-50 text-orange-600",
    border: "border-orange-100",
  },
  {
    icon: Car,
    title: "Control de vehículos",
    description:
      "Registro de flota, estado de mantenimiento, disponibilidad y asignación automática para cada práctica.",
    color: "bg-green-50 text-green-600",
    border: "border-green-100",
  },
  {
    icon: CalendarDays,
    title: "Agenda inteligente",
    description:
      "Programa, reprograma y cancela clases con asignación automática de instructor y vehículo disponible.",
    color: "bg-purple-50 text-purple-600",
    border: "border-purple-100",
  },
  {
    icon: ClipboardList,
    title: "Evaluaciones por nivel",
    description:
      "Registra el desempeño por clase con calificaciones, observaciones y avance por nivel (básico, intermedio, avanzado).",
    color: "bg-cyan-50 text-cyan-600",
    border: "border-cyan-100",
  },
  {
    icon: Bell,
    title: "Notificaciones automáticas",
    description:
      "Recordatorios de clases, alertas de cambios de horario y avisos de mantenimiento en tiempo real.",
    color: "bg-yellow-50 text-yellow-600",
    border: "border-yellow-100",
  },
  {
    icon: BarChart3,
    title: "Reportes y estadísticas",
    description:
      "Dashboards con progreso de estudiantes, uso de vehículos y desempeño de instructores para tomar mejores decisiones.",
    color: "bg-rose-50 text-rose-600",
    border: "border-rose-100",
  },
  {
    icon: Shield,
    title: "Roles y seguridad",
    description:
      "Control de acceso por roles: administrador, instructor y estudiante. Protección de datos según Ley Habeas Data.",
    color: "bg-indigo-50 text-indigo-600",
    border: "border-indigo-100",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="caracteristicas" className="py-24 bg-slate-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Características
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Todo lo que necesitas para gestionar tu academia
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Una plataforma completa diseñada específicamente para el flujo de trabajo de
            las academias de conducción.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`bg-white rounded-2xl p-6 border ${feature.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
