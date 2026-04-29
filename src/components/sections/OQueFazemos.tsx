import { Target, Share2, Search, Gauge, Briefcase } from 'lucide-react'
import { O_QUE_FAZEMOS } from '@/config/content'

const ICONS = [Target, Share2, Search, Gauge, Briefcase]

export default function OQueFazemos() {
  return (
    <section className="relative px-6 pt-16 pb-16 md:px-20 md:pt-[40px] md:pb-[80px]">

      <div className="relative max-w-[1440px] mx-auto flex flex-col gap-12">

        {/* Headline */}
        <h2
          className="text-4xl md:text-[40px] font-bold text-white text-center uppercase"
          style={{ lineHeight: 'calc(1em + 4px)' }}
        >
          {O_QUE_FAZEMOS.HEADLINE_BEFORE}
          <br className="hidden md:block" />
          <span className="text-[#ff8602]">{O_QUE_FAZEMOS.HEADLINE_HIGHLIGHT}</span>
          {O_QUE_FAZEMOS.HEADLINE_AFTER}
        </h2>

        {/* Corpo */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">

          {/* Esquerda — imagem com glow */}
          <div className="relative flex items-center justify-center shrink-0">
            {/* Glow */}
            <div
              className="absolute inset-0 -inset-8 rounded-3xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(180,100,255,0.55) 0%, transparent 70%)',
                filter: 'blur(24px)',
              }}
            />
            <img
              src={O_QUE_FAZEMOS.IMAGE}
              alt="O que fazemos"
              className="relative w-[520px]"
              style={{ borderRadius: '1rem' }}
            />
          </div>

          {/* Direita — tópicos */}
          <div className="flex flex-col gap-4 w-full max-w-[560px]">
            {O_QUE_FAZEMOS.TOPICS.map((topic, i) => {
              const Icon = ICONS[i]
              return (
                <div
                  key={topic.headline}
                  className="flex items-center gap-4 rounded-lg px-5 py-4 cursor-default transition-all duration-300 hover:scale-[1.02] hover:border-white/30"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    transition: 'transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(255,255,255,0.13)'
                    el.style.borderColor = 'rgba(255,255,255,0.28)'
                    el.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)'
                    el.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.background = 'rgba(255,255,255,0.07)'
                    el.style.borderColor = 'rgba(255,255,255,0.12)'
                    el.style.boxShadow = 'none'
                    el.style.transform = 'scale(1)'
                  }}
                >
                  {/* Ícone */}
                  <div
                    className="flex items-center justify-center rounded-lg shrink-0"
                    style={{ backgroundColor: '#ff8602', width: 44, height: 44 }}
                  >
                    <Icon size={20} className="text-white" />
                  </div>

                  {/* Texto */}
                  <div className="flex flex-col gap-1">
                    <h3
                      className="text-base font-bold text-white uppercase"
                      style={{ lineHeight: 1 }}
                    >
                      {topic.headline}
                    </h3>
                    <p className="text-sm font-normal" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {topic.descritivo}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
