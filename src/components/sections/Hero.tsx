import { Target, TrendingUp, Users } from 'lucide-react'
import { HERO } from '@/config/content'
import ContactForm from '@/components/ui/ContactForm'

const PILL_ICONS = [Target, TrendingUp, Users]

export default function Hero() {
  return (
    <section className="relative" id="hero">

      {/* Imagem — define a altura da seção */}
      <img
        src="assets/images/baackground-hero-smille.webp"
        alt=""
        aria-hidden="true"
        className="relative w-full block"
      />

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-6 py-16 md:px-20 md:pt-[40px] md:pb-[40px] grid grid-cols-1 md:grid-cols-[1fr_420px] gap-6 md:gap-12 items-center w-full">

        {/* Esquerda */}
        <div className="flex flex-col gap-10">

          {/* Logo */}
          <img
            src="assets/logo-smille.svg"
            alt="Smille Hub"
            className="h-12 w-auto self-start"
          />

          {/* Textos */}
          <div className="flex flex-col gap-5">
            <p className="text-lg font-medium text-[#1E1A20]">
              {HERO.PRE_HEADLINE}
            </p>
            <h1 className="text-[56px] font-bold uppercase" style={{ lineHeight: 1 }}>
              <span className="block text-[#ff8602]">Campanhas</span>
              <span className="block text-[#ff8602]">Digitais</span>
              <span className="block text-[#622690]">Inteligentes</span>
            </h1>
          </div>

          {/* Pills + CTA */}
          <div className="flex flex-col gap-3 w-fit">

            {HERO.PILLS.map((text, i) => {
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

            {/* CTA */}
            <a
              href="#formulario"
              className="cta-button inline-flex items-center justify-center text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-lg w-fit min-h-[52px] mt-1"
            >
              {HERO.CTA}
            </a>
          </div>
        </div>

        {/* Direita — Formulário */}
        <div id="formulario">
          <ContactForm />
        </div>

      </div>
    </section>
  )
}
