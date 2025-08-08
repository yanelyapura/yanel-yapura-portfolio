export const metadata = {
  title: "Proyectos · Yanel Yapura",
};

const projects = [
  {
    title: "Brilla – E‑commerce de accesorios",
    tech: ["HTML5", "SASS", "Bootstrap 5", "JavaScript"],
    contributions:
      "Interfaz responsive, validación de formularios, mejoras de accesibilidad y SEO básico.",
    accent: "accent",
    repo: "#",
  },
  {
    title: "Simulador de Turnos (SPA)",
    tech: ["JavaScript", "LocalStorage"],
    contributions:
      "Alta/baja/edición de reservas, filtros por servicio, panel simple de estadísticas en cliente.",
    accent: "rose",
    repo: "#",
  },
  {
    title: "Buscador de Imágenes",
    tech: ["JavaScript", "Fetch API", "CSS Grid"],
    contributions:
      "Consumo de API externa, paginación, manejo de estados y errores en front-end.",
    accent: "primary",
    repo: "#",
  },
  {
    title: "Portafolio Personal",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    contributions: "Estructura modular para presentar proyectos y documentación.",
    accent: "primary",
    repo: "#",
  },
  {
    title: "Automatización en Python",
    tech: ["Python"],
    contributions: "Scripts para procesamiento de datos y organización en módulos.",
    accent: "primary",
    repo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 md:px-10 py-12 max-w-6xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="font-serif text-4xl">Proyectos</h1>
        <p className="text-foreground/70 mt-2">Selección de proyectos con tecnologías y aportes.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-[var(--radius-card)] border border-foreground/10 overflow-hidden bg-background/40 backdrop-blur-sm shadow"
          >
            <div
              className={`h-28 bg-gradient-to-br ${
                p.accent === "accent"
                  ? "from-[var(--color-accent)] to-[var(--color-primary)]"
                  : p.accent === "rose"
                  ? "from-[var(--color-rose)] to-[var(--color-primary)]"
                  : "from-[var(--color-primary)] to-[var(--color-rose)]"
              }`}
            />
            <div className="p-5 space-y-2">
              <h2 className="font-semibold text-xl">{p.title}</h2>
              <p className="text-sm text-foreground/70">{p.tech.join(", ")}</p>
              <p className="text-sm">{p.contributions}</p>
              {p.repo && (
                <a
                  href={p.repo}
                  className="inline-block mt-2 text-sm underline hover:opacity-80"
                  target="_blank"
                >
                  Repositorio
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}


