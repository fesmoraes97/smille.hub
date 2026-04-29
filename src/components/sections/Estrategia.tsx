import { motion } from 'framer-motion'
import { ESTRATEGIA } from '@/config/content'

const floatHover = {
  whileHover: { y: -14 },
  transition: { type: 'spring', stiffness: 280, damping: 18 },
  shadowIdle: '0 8px 32px rgba(0,0,0,0.35)',
  shadowHover: '0 28px 60px rgba(0,0,0,0.5)',
}

function BoxDescritivo({ index }: { index: number }) {
  const box = ESTRATEGIA.BOXES[index]

  if (index === 0) {
    return (
      <p className="text-[18px] text-white" style={{ lineHeight: 1.5 }}>
        <strong className="font-semibold">{box.descritivo_bold}</strong>
        {' do seu'}
        <br className="hidden md:block" />
        {' negócio antes de investir 1 real.'}
      </p>
    )
  }

  if (index === 1) {
    return (
      <p className="text-[18px] text-white" style={{ lineHeight: 1.5 }}>
        {'Campanhas estruturadas para'}
        <br className="hidden md:block" />
        {' '}<strong className="font-semibold">{box.descritivo_bold}</strong>
      </p>
    )
  }

  return (
    <p className="text-[18px] text-white" style={{ lineHeight: 1.5 }}>
      {'Análise contínua para '}
      <strong className="font-semibold">{'melhorar'}</strong>
      <br className="hidden md:block" />
      {' performance e reduzir custo.'}
    </p>
  )
}

export default function Estrategia() {
  return (
    <section className="relative px-6 pb-16 md:px-20 md:pb-[80px]">

      {/* Divisória laranja */}
      <div className="w-full h-[2px] mb-16 md:mb-[80px]" style={{ backgroundColor: '#ff8602' }} />

      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">

        {/* Headline + Subline */}
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-4xl md:text-[40px] font-bold text-white uppercase" style={{ lineHeight: 'calc(1em + 4px)' }}>
            {ESTRATEGIA.HEADLINE_BEFORE}
            <br className="hidden md:block" />
            <span className="text-[#ff8602]"> {ESTRATEGIA.HEADLINE_AFTER}</span>
          </h2>

          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {ESTRATEGIA.SUBLINE_BEFORE}
            <br className="hidden md:block" />
            {' '}<strong className="text-white font-semibold">{ESTRATEGIA.SUBLINE_BOLD}</strong>
          </p>
        </div>

        {/* 3 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ESTRATEGIA.BOXES.map((box, i) => (
              <motion.div
                key={box.headline}
                className="relative rounded-lg overflow-hidden cursor-pointer"
                style={{ boxShadow: floatHover.shadowIdle }}
                whileHover={{ y: -14, boxShadow: floatHover.shadowHover }}
                transition={floatHover.transition}
              >
                <img
                  src={box.image}
                  alt={box.headline}
                  className="w-full block"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-[24px] font-bold text-white mb-1" style={{ lineHeight: 1 }}>
                    {box.headline}
                  </h3>
                  <BoxDescritivo index={i} />
                </div>
              </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
