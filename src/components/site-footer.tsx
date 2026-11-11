import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link className="footer-name" href="/">{site.name}<span>®</span></Link>
      <p>Feito com atenção ao detalhe, em algum lugar no Brasil.</p>
      <a href={site.links[0].href} target="_blank" rel="noreferrer">{site.links[0].label} ↗</a>
      <span>© {new Date().getFullYear()} {site.name}</span>
    </footer>
  );
}
