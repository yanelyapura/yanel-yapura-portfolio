export default function Home() {
  return (
    <div className="min-h-svh">
      {/* HERO */}
      <section className="px-6 md:px-10 py-24 md:py-28 text-center">
        <p className="uppercase tracking-[0.12em] text-sm text-foreground/70 font-semibold">Frontend · Mobile · UI Motion</p>
        <h1 className="mt-3 font-serif text-4xl md:text-6xl leading-tight">
          Creo experiencias digitales <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-rose)] bg-clip-text text-transparent">memorables</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
          Desarrolladora Fullstack en formación. Construyo interfaces con React/React Native, integro APIs REST y servicios en Firebase/Realm, con foco en accesibilidad, performance y detalle visual.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#proyectos" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold text-white bg-[var(--color-primary)] hover:brightness-110 transition-shadow shadow-md">Ver proyectos</a>
          <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold border border-foreground/20 hover:bg-foreground/5 transition">Hablemos</a>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="px-6 md:px-10 py-12">
        <header className="text-center mb-6">
          <h2 className="font-serif text-3xl md:text-4xl">Proyectos destacados</h2>
          <p className="text-foreground/70">Selección curada con enfoque en resultados.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Brilla – E‑commerce de accesorios", tech: "HTML, SASS, Bootstrap, JS", accent: "accent", link: "#" },
            { title: "Simulador de Turnos (SPA)", tech: "JS, LocalStorage", accent: "rose", link: "#" },
            { title: "Buscador de Imágenes", tech: "JS, Fetch API, CSS Grid", accent: "primary", link: "#" },
          ].map((p) => (
            <a key={p.title} href={p.link} className="group rounded-[var(--radius-card)] border border-foreground/10 overflow-hidden bg-background/40 backdrop-blur-sm shadow hover:-translate-y-1 transition-transform">
              <div className={`h-40 bg-gradient-to-br ${
                p.accent === "accent" ? "from-[var(--color-accent)] to-[var(--color-primary)]" :
                p.accent === "rose" ? "from-[var(--color-rose)] to-[var(--color-primary)]" :
                "from-[var(--color-primary)] to-[var(--color-rose)]"
              }`}></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.tech}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="px-6 md:px-10 py-12">
        <header className="text-center mb-6">
          <h2 className="font-serif text-3xl md:text-4xl">Sobre mí</h2>
        </header>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="space-y-3">
            <p>
              Desarrolladora Fullstack en formación. Construyo interfaces web con React, maquetas con HTML/CSS, y apps móviles con React Native. Integro APIs REST y servicios en Firebase/Realm. Trabajo con Git/GitHub, Scrum y testing manual básico.
            </p>
            <p>
              Desde mi experiencia previa en salud, incorporé organización, priorización y comunicación clara en equipos multidisciplinarios.
            </p>
            <ul className="list-disc pl-5 text-foreground/80">
              <li>JavaScript (ES6+), HTML5, CSS3, Python</li>
              <li>React, React Native, Node.js</li>
              <li>Firebase (Auth, Firestore), Realm DB, APIs REST</li>
              <li>Git, GitHub, VS Code, npm, Postman</li>
              <li>Agile/Scrum, control de versiones, testing manual</li>
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-foreground/10 p-5 bg-background/40 shadow">
            <h3 className="font-semibold mb-2">Contacto</h3>
            <ul className="space-y-2">
              <li>Email: <a className="underline hover:opacity-80" href="mailto:yanelyapura@gmail.com">yanelyapura@gmail.com</a></li>
              <li>LinkedIn: <a className="underline hover:opacity-80" href="https://linkedin.com/in/yanelyapura/" target="_blank">linkedin.com/in/yanelyapura/</a></li>
              <li>GitHub: <a className="underline hover:opacity-80" href="https://github.com/yanelyapura" target="_blank">github.com/yanelyapura</a></li>
              <li>Ubicación: Moreno, Buenos Aires, Argentina</li>
            </ul>
            <div className="mt-4 text-sm text-foreground/70">
              Idiomas: Español (nativo), Inglés (intermedio)
            </div>
          </div>
        </div>
      </section>

      {/* FORMACIÓN */}
      <section id="formacion" className="px-6 md:px-10 py-12">
        <header className="text-center mb-6">
          <h2 className="font-serif text-3xl md:text-4xl">Formación</h2>
          <p className="text-foreground/70">Coderhouse y cursos Live completados</p>
        </header>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-[var(--radius-card)] border border-foreground/10 p-5 bg-background/40 shadow">
            <h3 className="font-semibold mb-2">Diplomaturas y módulos</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>IA: Generación de Prompts (Ago–Sep 2025)</li>
              <li>Javascript (Jun–Ago 2025)</li>
              <li>Scrum (Jun–Jul 2025)</li>
              <li>Testing QA Manual (Abr–Jun 2025)</li>
              <li>Soft Skills (Mar–Jun 2025)</li>
              <li>Cultura Digital (Mar–Abr 2025)</li>
              <li>Desarrollo Web (Mar–May 2025)</li>
              <li>Diplomatura Fullstack – Módulo 1 (Mar–Abr 2025)</li>
              <li>Inglés para el mundo digital (Jun–Sep 2025)</li>
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-foreground/10 p-5 bg-background/40 shadow">
            <h3 className="font-semibold mb-2">Cursos Live completados</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Python (Sep–Dic 2024)</li>
              <li>Desarrollo de Aplicaciones (Ene–Mar 2024)</li>
              <li>React JS (Oct–Nov 2023)</li>
              <li>JavaScript (Ago–Sep 2023)</li>
              <li>Desarrollo Web (May–Jul 2023)</li>
              <li>Community Manager & Publicidad (Nov 2022–Feb 2023)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA y FORMACIÓN PREVIA */}
      <section id="experiencia" className="px-6 md:px-10 py-12">
        <header className="text-center mb-6">
          <h2 className="font-serif text-3xl md:text-4xl">Experiencia previa (salud)</h2>
          <p className="text-foreground/70">Resumen relevante para soft skills y trabajo en equipo</p>
        </header>
        <div className="max-w-4xl mx-auto text-sm text-foreground/90 space-y-2">
          <p>Enfermera de piso — Hogar y Centro de Día Entre Amigos S.A. (2016–2025)</p>
          <p>Enfermera domiciliaria pediátrica — Empresa de cuidados domiciliarios (2014–2015)</p>
          <p>Enfermera — Hospital del Trauma Federico Abete (2013)</p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 md:px-10 py-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">¿Hablamos?</h2>
        <p className="text-foreground/80 mt-2">Escríbeme y conversemos sobre tu proyecto.</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold text-white bg-[var(--color-primary)] hover:brightness-110 transition-shadow shadow-md" href="mailto:yanelyapura@gmail.com">yanelyapura@gmail.com</a>
          <a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold border border-foreground/20 hover:bg-foreground/5 transition" href="https://linkedin.com/in/yanelyapura/" target="_blank">LinkedIn</a>
          <a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold border border-foreground/20 hover:bg-foreground/5 transition" href="https://github.com/yanelyapura" target="_blank">GitHub</a>
        </div>
        <p className="mt-6 text-sm text-foreground/60">Moreno, Buenos Aires, Argentina</p>
      </section>
    </div>
  );
}
