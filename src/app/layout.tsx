import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

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

export const viewport: Viewport = { themeColor: "#f1ede5", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" data-theme="editorial" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
          <SiteHeader />
          <main id="conteudo">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
