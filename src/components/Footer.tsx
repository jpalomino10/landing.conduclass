import { Car, Globe, MessageCircle, Video } from "lucide-react";

const links = {
  Producto: [
    { label: "Características", href: "#caracteristicas" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precios", href: "#precios" },
    { label: "Seguridad", href: "#beneficios" },
  ],
  Empresa: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Casos de éxito", href: "#" },
    { label: "Prensa", href: "#" },
  ],
  Soporte: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Documentación", href: "#" },
    { label: "Contacto", href: "#contacto" },
    { label: "Estado del servicio", href: "#" },
  ],
  Legal: [
    { label: "Términos de uso", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Habeas Data", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Condu<span className="text-blue-400">Class</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              La plataforma líder para la gestión de academias de conducción en Colombia.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Globe, href: "#", label: "Web" },
                { Icon: MessageCircle, href: "#", label: "WhatsApp" },
                { Icon: Video, href: "#", label: "TikTok" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} ConduClass. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Hecho con ❤️ para academias de conducción de Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
