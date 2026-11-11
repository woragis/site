import { ImageResponse } from "next/og";

export const alt = "Jezreel de Andrade — portfólio de desenvolvimento de software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f1ede5", color: "#201f1b", padding: "68px 76px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 21, letterSpacing: 2, textTransform: "uppercase" }}><span>Jezreel de Andrade / Engenharia de software</span><span>Portfólio · 2026</span></div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}><span style={{ color: "#a04e32", fontSize: 20, letterSpacing: 3, marginBottom: 20 }}>PROJETOS · ENGENHARIA · IDEIAS</span><span style={{ fontFamily: "Georgia, serif", fontSize: 78, lineHeight: 1.05, letterSpacing: -4 }}>Código bem pensado.<br />Produtos feitos para durar.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #bcb6ab", paddingTop: 22, fontSize: 18 }}><span>Desenvolvedor de software</span><span>PORTFÓLIO / SOFTWARE ENGINEERING</span></div>
    </div>, size,
  );
}
