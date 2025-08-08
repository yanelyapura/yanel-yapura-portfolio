"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b border-foreground/10 bg-background/70">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center gap-3">
        <Link href="#" className="font-bold">Yanel Yapura</Link>
        <div className="ml-auto flex items-center gap-2 text-sm">
          <a href="#proyectos" className="px-3 py-1.5 rounded-full hover:bg-foreground/5">Proyectos</a>
          <a href="#sobre-mi" className="px-3 py-1.5 rounded-full hover:bg-foreground/5">Sobre mí</a>
          <a href="#formacion" className="px-3 py-1.5 rounded-full hover:bg-foreground/5">Formación</a>
          <a href="#contacto" className="px-3 py-1.5 rounded-full hover:bg-foreground/5">Contacto</a>
          <button
            aria-label="Cambiar tema"
            className="ml-1 px-3 py-1.5 rounded-full border border-foreground/15 hover:bg-foreground/5"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {mounted ? (theme === "light" ? "🌙" : "💡") : "💡"}
          </button>
        </div>
      </nav>
    </header>
  );
}


