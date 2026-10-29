import Link from "next/link";
import { site } from "@/content/site";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label={`${site.name}, início`}>
        <span className="wordmark__mark" aria-hidden="true">J.</span>
        <span>{site.shortName}<small> / {site.role.toLowerCase()}</small></span>
      </Link>
      <nav className="main-nav" aria-label="Navegação principal">
        <Link href="/#sobre">Sobre</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/artigos">Artigos</Link>
        <Link href="/#experiencia">Experiência</Link>
        <Link href="/#habilidades">Habilidades</Link>
        <Link href="/#contato">Contato</Link>
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
