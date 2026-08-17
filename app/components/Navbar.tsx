export default function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full bg-zinc-900 text-white shadow-lg"
      id="mainNav"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <a
          href="#page-top"
          className="text-xl font-bold uppercase tracking-wide"
        >
          Andes Piscinas
        </a>

        <div className="flex items-center gap-2">

          <a
            href="#portfolio"
            className="rounded-lg px-5 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
          >
            Servicios
          </a>

          <a
            href="#about"
            className="rounded-lg px-5 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
          >
            Empresa
          </a>

          <a
            href="#contact"
            className="rounded-lg px-5 py-3 text-sm font-semibold uppercase tracking-wide transition hover:bg-white/10"
          >
            Contacto
          </a>

        </div>

      </div>
    </nav>
  );
}