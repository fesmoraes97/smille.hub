import { FileX, ShieldCheck, Zap } from 'lucide-react'
import { RESULTADOS } from '@/config/content'

const PILL_ICONS = [FileX, ShieldCheck, Zap]

export default function Resultados() {
  return (
    <section
      className="relative px-6 pt-[110px] pb-[110px] md:px-20"
      style={{ backgroundColor: '#fef7fe' }}
    >
      <div className="relative max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12" style={{ zIndex: 30 }}>

        {/* Esquerda — texto */}
        <div className="flex flex-col gap-6 order-2 md:order-1 text-center md:text-left">
          <h2
            className="text-[28px] md:text-[40px] font-bold uppercase"
            style={{ color: '#622690', lineHeight: 'calc(1em + 4px)' }}
          >
            {/* Mobile */}
            <span className="md:hidden">
              Resultados vêm<br />
              <span style={{ color: '#ff8602' }}>de método,</span><br />
              não de sorte
            </span>
            {/* Desktop */}
            <span className="hidden md:inline">
              Resultados vêm
              <br />
              <span style={{ color: '#ff8602' }}>de método,</span> não de sorte
            </span>
          </h2>
          <p
            className="text-[18px] md:text-[22px]"
            style={{ color: '#1E1A20', lineHeight: 1.3 }}
          >
            <span className="md:hidden">
              Aplicamos processos validados<br />
              para transformar investimento<br />
              em crescimento previsível.
            </span>
            <span className="hidden md:inline">
              Aplicamos processos validados para transformar
              <br />
              investimento em crescimento previsível.
            </span>
          </p>

          {/* Pills */}
          <div className="flex flex-col gap-3 items-center md:items-start mx-auto md:mx-0">
            {RESULTADOS.PILLS.map((text, i) => {
              const Icon = PILL_ICONS[i]
              return (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-full px-5 py-3 w-fit"
                  style={{
                    background: 'linear-gradient(to right, #622690, #8b45c0)',
                    borderBottom: '2px solid #ff8602',
                  }}
                >
                  <Icon size={18} className="text-white shrink-0" />
                  <span className="text-sm font-medium text-white">{text}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Direita — imagem */}
        <div className="flex items-center justify-center shrink-0 order-1 md:order-2">
          <img
            src="assets/images/target-mobile.webp"
            alt="Resultados"
            className="w-full max-w-[480px] md:hidden"
            style={{ borderRadius: '1.5rem' }}
          />
          <img
            src={RESULTADOS.IMAGE}
            alt="Resultados"
            className="hidden md:block md:w-[480px]"
            style={{ borderRadius: '1.5rem' }}
          />
        </div>

      </div>
    </section>
  )
}
