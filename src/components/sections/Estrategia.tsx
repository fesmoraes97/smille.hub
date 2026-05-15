import { motion } from 'framer-motion'
import { ESTRATEGIA } from '@/config/content'

const floatHover = {
  whileHover: { y: -14 },
  transition: { type: 'spring' as const, stiffness: 280, damping: 18 },
  shadowIdle: '0 8px 32px rgba(0,0,0,0.35)',
  shadowHover: '0 28px 60px rgba(0,0,0,0.5)',
}

function BoxDescritivo({ index }: { index: number }) {
  const box = ESTRATEGIA.BOXES[index]

  if (index === 0) {
    return (
      <p className="text-[16px] md:text-[18px] text-white leading-[1.1] md:leading-[1.5]">
        <strong className="font-semibold">{box.descritivo_bold}</strong>
        {' do seu'}
        <br />
        {' negócio antes de investir 1 real.'}
      </p>
    )
  }

  if (index === 1) {
    return (
      <p className="text-[16px] md:text-[18px] text-white leading-[1.1] md:leading-[1.5]">
        {'Campanhas estruturadas para'}
        <br />
        {' '}<strong className="font-semibold">{box.descritivo_bold}</strong>
      </p>
    )
  }

  return (
    <p className="text-[16px] md:text-[18px] text-white leading-[1.1] md:leading-[1.5]">
      {'Análise contínua para '}
      <strong className="font-semibold">{'melhorar'}</strong>
      <br />
      {' performance e reduzir custo.'}
    </p>
  )
}

export default function Estrategia() {
  return (
    <section className="relative px-6 pt-[110px] pb-[110px] md:px-20">

<div className="max-w-[1440px] mx-auto flex flex-col gap-12">

        {/* Headline + Subline */}
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-[24px] md:text-[40px] font-bold text-white uppercase" style={{ lineHeight: 'calc(1em + 4px)' }}>
            {/* Mobile */}
            <span className="md:hidden">
              Você não precisa<br />
              de mais cliques.<br />
              <span className="text-[#ff8602]">Precisa de estratégia.</span>
            </span>
            {/* Desktop */}
            <span className="hidden md:inline">
              {ESTRATEGIA.HEADLINE_BEFORE}
              <br />
              <span className="text-[#ff8602]"> {ESTRATEGIA.HEADLINE_AFTER}</span>
            </span>
          </h2>

          <p className="text-[18px] md:text-[22px] text-white md:text-white/70 mx-auto" style={{ lineHeight: 1.3, maxWidth: 'fit-content' }}>
            {ESTRATEGIA.SUBLINE_BEFORE}
            <br />
            {' '}<strong className="text-white font-semibold">{ESTRATEGIA.SUBLINE_BOLD}</strong>
          </p>
        </div>

        {/* 3 Boxes */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6" style={{ zIndex: 30 }}>
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
                  <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-3 md:mb-1" style={{ lineHeight: 1 }}>
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
