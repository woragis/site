import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const preferencesBootstrap = `(() => {
  try {
    const saved = JSON.parse(localStorage.getItem("portfolio-preferences") || "null");
    const legacy = localStorage.getItem("portfolio-theme");
    const theme = ["editorial", "atelier", "index"].includes(saved?.theme) ? saved.theme : (["editorial", "atelier", "index"].includes(legacy) ? legacy : "editorial");
    const mode = ["light", "dark", "system"].includes(saved?.colorMode) ? saved.colorMode : "system";
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.colorMode = mode;
    root.style.colorScheme = mode === "dark" || (mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  } catch {}
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: `${site.name} — Portfólio`,
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${site.name} — Portfólio`,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.role}`, description: site.description },
};

export const viewport: Viewport = { themeColor: "#f1ede5", colorScheme: "light dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="editorial" data-color-mode="system" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Script id="portfolio-preferences" strategy="beforeInteractive">{preferencesBootstrap}</Script>
          <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
          <SiteHeader />
          <main id="conteudo">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
