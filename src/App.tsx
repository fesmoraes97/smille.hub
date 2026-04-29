export default function App() {
  return (
    <div style={{ fontFamily: "'Work Sans', sans-serif", backgroundColor: '#FBECFF', minHeight: '100vh' }}>

      <div style={{ position: 'fixed', top: 12, right: 12, backgroundColor: '#622690', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6, zIndex: 99, fontFamily: 'monospace' }}>
        max-width: 1440px
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 1, backgroundColor: 'rgba(98,38,144,0.2)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 1, backgroundColor: 'rgba(98,38,144,0.2)', pointerEvents: 'none' }} />

        {/* HERO */}
        <section style={{ padding: '120px 80px', borderBottom: '1px dashed rgba(98,38,144,0.3)', position: 'relative' }}>
          <SectionLabel label="HERO" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 720 }}>
            <h1 style={{ margin: 0, fontSize: 56, fontWeight: 700, lineHeight: 1, color: '#622690' }}>
              Headline principal da landing page
            </h1>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 400, lineHeight: 1.6, color: '#1E1A20' }}>
              Subtítulo ou chamada complementar com texto corrido. Aqui entra uma frase de apoio que reforça a proposta de valor da Smille Hub.
            </p>
            <div>
              <button style={{ fontSize: 16, fontWeight: 600, fontFamily: "'Work Sans', sans-serif", backgroundColor: '#622690', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 36px', cursor: 'pointer' }}>
                Chamada para ação
              </button>
            </div>
          </div>
          <PaddingGuide />
        </section>

        {/* SEÇÃO 2 — Grid 3 colunas */}
        <section style={{ padding: '120px 80px', borderBottom: '1px dashed rgba(98,38,144,0.3)', position: 'relative' }}>
          <SectionLabel label="SEÇÃO 2 — grid 3 colunas" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            <h2 style={{ margin: 0, fontSize: 36, fontWeight: 700, lineHeight: 1, color: '#622690' }}>
              Título da seção de benefícios
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {['Benefício 1', 'Benefício 2', 'Benefício 3'].map((label) => (
                <div key={label} style={{ backgroundColor: 'rgba(98,38,144,0.08)', border: '1px solid rgba(98,38,144,0.2)', borderRadius: 8, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ width: 40, height: 40, backgroundColor: 'rgba(98,38,144,0.2)', borderRadius: 8 }} />
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: '#622690' }}>{label}</h3>
                  <p style={{ margin: 0, fontSize: 15, fontWeight: 400, color: '#1E1A20', lineHeight: 1.6 }}>
                    Descrição curta do benefício. Texto corrido em Work Sans 400.
                  </p>
                </div>
              ))}
            </div>
            <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#622690', opacity: 0.5 }}>gap entre cards: 24px</span>
          </div>
        </section>

        {/* SEÇÃO 3 — 2 colunas */}
        <section style={{ padding: '120px 80px', borderBottom: '1px dashed rgba(98,38,144,0.3)', position: 'relative' }}>
          <SectionLabel label="SEÇÃO 3 — 2 colunas, gap: 48px" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h2 style={{ margin: 0, fontSize: 36, fontWeight: 700, lineHeight: 1, color: '#622690' }}>
                Título da seção de conteúdo
              </h2>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 400, color: '#1E1A20', lineHeight: 1.7 }}>
                Parágrafo de apoio com texto corrido em Work Sans 400. Aqui entra a argumentação principal dessa seção, com mais profundidade sobre o serviço ou proposta.
              </p>
              <div>
                <button style={{ fontSize: 15, fontWeight: 600, fontFamily: "'Work Sans', sans-serif", backgroundColor: 'transparent', color: '#622690', border: '2px solid #622690', borderRadius: 8, padding: '12px 28px', cursor: 'pointer' }}>
                  Saiba mais
                </button>
              </div>
            </div>
            <div style={{ backgroundColor: 'rgba(98,38,144,0.1)', border: '1px solid rgba(98,38,144,0.2)', borderRadius: 8, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontFamily: 'monospace', color: '#622690' }}>
              imagem / composição
            </div>
          </div>
        </section>

        {/* SEÇÃO 4 — CTA Final */}
        <section style={{ padding: '120px 80px', position: 'relative' }}>
          <SectionLabel label="SEÇÃO 4 — CTA Final" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ margin: 0, fontSize: 40, fontWeight: 700, lineHeight: 1, color: '#622690', maxWidth: 600 }}>
              Frase de encerramento e chamada final para ação
            </h2>
            <p style={{ margin: 0, fontSize: 16, fontWeight: 400, color: '#1E1A20', maxWidth: 480 }}>
              Texto de suporte em Work Sans 400 para reforçar a CTA.
            </p>
            <button style={{ fontSize: 16, fontWeight: 600, fontFamily: "'Work Sans', sans-serif", backgroundColor: '#622690', color: '#fff', border: 'none', borderRadius: 8, padding: '18px 48px', cursor: 'pointer' }}>
              Chamada para ação
            </button>
          </div>
        </section>

      </div>

      {/* Legenda */}
      <div style={{ backgroundColor: '#622690', color: '#fff', padding: '20px 80px', display: 'flex', gap: 32, fontSize: 12, fontFamily: 'monospace', flexWrap: 'wrap' }}>
        <span>📐 Container: 1280px</span>
        <span>↔ Padding lateral: 80px desktop</span>
        <span>↕ Padding vertical seção: 120px desktop</span>
        <span>⬛ Gap grid: 48px · gap cards: 24px</span>
      </div>
    </div>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ position: 'absolute', top: 12, left: 12, fontSize: 10, color: '#622690', fontFamily: 'monospace', opacity: 0.4 }}>
      {label}
    </div>
  )
}

function PaddingGuide() {
  return (
    <div style={{ position: 'absolute', top: 8, right: 16, fontSize: 10, color: '#622690', fontFamily: 'monospace', opacity: 0.4 }}>
      pt: 120px · pl: 80px
    </div>
  )
}
