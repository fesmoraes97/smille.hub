import { QUEM_SOMOS } from '@/config/content'

export default function QuemSomos() {
  return (
    <section className="relative px-6 pt-16 pb-20 md:px-20 md:pt-[80px] md:pb-[100px]">
      <div className="max-w-[820px] mx-auto flex flex-col gap-10">

        {/* Headline */}
        <div className="flex flex-col gap-4">
          <h2
            className="text-3xl md:text-[40px] font-bold text-white"
            style={{ lineHeight: 'calc(1em + 6px)' }}
          >
            {QUEM_SOMOS.HEADLINE}
          </h2>
          <div className="w-16 h-[3px] rounded-full" style={{ backgroundColor: '#ff8602' }} />
        </div>

        {/* Parágrafos */}
        <div className="flex flex-col gap-5">
          {QUEM_SOMOS.PARAGRAFOS.map((p, i) => (
            <p
              key={i}
              className="text-[17px]"
              style={{
                color: i === 2 ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.8)',
                lineHeight: 1.7,
                fontWeight: i === 2 ? 600 : 400,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Fechamento — callout */}
        <div
          className="px-6 py-5 rounded-lg"
          style={{
            borderLeft: '4px solid #ff8602',
            background: 'rgba(255,255,255,0.06)',
          }}
        >
          <p className="text-[19px] font-semibold text-white italic" style={{ lineHeight: 1.4 }}>
            {QUEM_SOMOS.FECHAMENTO}
          </p>
        </div>

      </div>
    </section>
  )
}
