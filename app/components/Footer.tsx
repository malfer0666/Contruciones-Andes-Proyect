export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Empresa */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide">
              Andes Piscinas
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-zinc-400">
              Soluciones para piscinas pensadas para cada espacio y
              necesidad. Te ayudamos a encontrar la alternativa ideal
              para tu proyecto.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#page-top"
                className="text-zinc-400 transition hover:text-white"
              >
                Inicio
              </a>

              <a
                href="#portfolio"
                className="text-zinc-400 transition hover:text-white"
              >
                Servicios
              </a>

              <a
                href="#about"
                className="text-zinc-400 transition hover:text-white"
              >
                Empresa
              </a>

              <a
                href="#contact"
                className="text-zinc-400 transition hover:text-white"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-zinc-400">
              <p>
                Región Metropolitana
              </p>

              <p>
                VI Región
              </p>

              <p>
                VII Región
              </p>

              <a
                href="mailto:contacto@andespiscinas.cl"
                className="transition hover:text-white"
              >
                contacto@andespiscinas.cl
              </a>
            </div>
          </div>

        </div>

        {/* Línea */}
        <div className="my-10 border-t border-zinc-800"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Andes Piscinas. Todos los derechos reservados.
          </p>

          <p>
            Calidad y experiencia en piscinas.
          </p>

        </div>

      </div>
    </footer>
  );
}