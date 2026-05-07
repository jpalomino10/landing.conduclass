"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const highlights = [
  "Sin tarjeta de crédito",
  "Configuración en 5 minutos",
  "Soporte 24/7",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Software #1 para academias de conducción
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Gestiona tu academia{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                de conducción
              </span>{" "}
              sin complicaciones
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              ConduClass centraliza estudiantes, instructores, vehículos y agenda en
              una sola plataforma inteligente. Más tiempo para enseñar, menos tiempo
              en papeleo.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-4"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
              >
                Comenzar gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                Ver demo
              </a>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-slate-800/80 backdrop-blur rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden">
              {/* Mockup header */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-700/60 bg-slate-900/50">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-4 text-xs text-slate-400 font-mono">
                  app.conduclass.co
                </span>
              </div>

              {/* Mockup body */}
              <div className="p-5 space-y-4">
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Estudiantes", value: "248", color: "bg-blue-500" },
                    { label: "Instructores", value: "12", color: "bg-orange-500" },
                    { label: "Vehículos", value: "18", color: "bg-green-500" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-700/50 rounded-xl p-3">
                      <div className={`w-7 h-7 ${stat.color} rounded-lg mb-2 opacity-90`} />
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Calendar mockup */}
                <div className="bg-slate-700/40 rounded-xl p-4">
                  <div className="text-xs font-semibold text-slate-300 mb-3">
                    Clases de hoy — martes 6 mayo
                  </div>
                  {[
                    { time: "08:00", name: "Carlos Gómez", inst: "Luis R.", status: "Completada" },
                    { time: "10:30", name: "Ana Torres", inst: "María V.", status: "En curso" },
                    { time: "14:00", name: "Pedro Silva", inst: "Luis R.", status: "Pendiente" },
                  ].map((row) => (
                    <div
                      key={row.time}
                      className="flex items-center justify-between py-2 border-b border-slate-600/40 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-blue-400 w-10">{row.time}</span>
                        <div>
                          <div className="text-xs font-medium text-white">{row.name}</div>
                          <div className="text-xs text-slate-400">{row.inst}</div>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          row.status === "Completada"
                            ? "bg-green-500/20 text-green-400"
                            : row.status === "En curso"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-slate-600/50 text-slate-400"
                        }`}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="bg-slate-700/40 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-300 font-semibold">Progreso mensual</span>
                    <span className="text-xs text-blue-400 font-bold">78%</span>
                  </div>
                  <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                  <div className="mt-2 text-xs text-slate-400">156 de 200 clases completadas</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Clase completada</div>
                <div className="text-xs text-slate-500">Pedro aprobó nivel básico</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 bg-blue-600 rounded-2xl shadow-xl px-4 py-3 text-white"
            >
              <div className="text-xs font-semibold opacity-80">Nuevos estudiantes</div>
              <div className="text-2xl font-extrabold">+34%</div>
              <div className="text-xs opacity-70">este mes</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 38.7C840 45.3 960 58.7 1080 61.3C1200 64 1320 56 1380 52L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
