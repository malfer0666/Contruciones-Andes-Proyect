import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="page-top"
          className="flex min-h-screen items-center justify-center bg-zinc-100 px-6 pt-20"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">

            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Andes Piscinas
              </p>

              <h1 className="text-5xl font-bold leading-tight text-zinc-900 md:text-6xl">
                La piscina que
                <span className="block text-blue-600">
                  necesitas.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                Diseñamos y construimos piscinas pensadas para cada cliente,
                adaptándonos a sus espacios, necesidades y estilo.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#portfolio"
                  className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Ver nuestros servicios
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-zinc-300 px-7 py-3 text-center font-semibold text-zinc-800 transition hover:bg-zinc-100"
                >
                  Cotizar piscina
                </a>
              </div>
            </div>

            <div className="flex h-[400px] w-full max-w-xl items-center justify-center overflow-hidden rounded-3xl bg-blue-200">
              <p className="text-lg font-medium text-blue-800">
                Imagen de piscina
              </p>
            </div>

          </div>
        </section>

        {/* Servicios */}
        <section
          id="portfolio"
          className="bg-white px-6 py-24"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Nuestros servicios
              </p>

              <h2 className="mt-3 text-4xl font-bold text-zinc-900">
                Todo para tu piscina
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
                Te ayudamos a encontrar la solución que mejor se adapte a tu
                proyecto.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 text-4xl">
                  🏊
                </div>

                <h3 className="text-xl font-bold text-zinc-900">
                  Compra de piscinas
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Encuentra piscinas pensadas para distintos espacios,
                  tamaños y necesidades.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 text-4xl">
                  🧪
                </div>

                <h3 className="text-xl font-bold text-zinc-900">
                  Productos y accesorios
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Todo lo necesario para mantener, cuidar y disfrutar tu
                  piscina durante todo el año.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 text-4xl">
                  📋
                </div>

                <h3 className="text-xl font-bold text-zinc-900">
                  Piscina personalizada
                </h3>

                <p className="mt-3 leading-7 text-zinc-600">
                  Cada espacio es diferente. Creamos soluciones adaptadas a
                  las necesidades de cada cliente.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Empresa */}
        <section
          id="about"
          className="bg-zinc-100 px-6 py-24"
        >
          <div className="mx-auto max-w-5xl text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Nuestra empresa
            </p>

            <h2 className="mt-3 text-4xl font-bold text-zinc-900">
              Experiencia y confianza
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
              En Andes Piscinas contamos con años de experiencia en el rubro,
              entregando asesoría especializada y soluciones pensadas para
              cada proyecto.
            </p>

          </div>
        </section>

        {/* Contacto */}
        <section
          id="contact"
          className="bg-blue-600 px-6 py-24 text-white"
        >
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-4xl font-bold">
              ¿Estás pensando en construir tu piscina?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
              Cuéntanos qué necesitas y te ayudaremos a encontrar una
              solución diseñada para ti.
            </p>

            <a
              href="mailto:contacto@andespiscinas.cl"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-zinc-100"
            >
              Contáctanos
            </a>

          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}