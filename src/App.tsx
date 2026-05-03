import Background from '@/components/ui/Background'
import Hero from '@/components/sections/Hero'
import OQueFazemos from '@/components/sections/OQueFazemos'
import Estrategia from '@/components/sections/Estrategia'
import Resultados from '@/components/sections/Resultados'
import Formulario from '@/components/sections/Formulario'
import Footer from '@/components/sections/Footer'

export default function App() {
  return (
    <>
      <Background />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <OQueFazemos />

        {/* Wrapper que permite a div-1.webp sobrepor a seção seguinte */}
        <div className="relative">
          <Estrategia />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ transform: 'translateY(25%)', zIndex: 20, lineHeight: 0 }}
          >
            <img src="assets/images/div-1.webp" alt="" className="w-full block" />
          </div>
        </div>

        {/* Wrapper que permite a div-2.webp sobrepor a seção seguinte */}
        <div className="relative">
          <Resultados />
          <div
            className="absolute left-0 right-0 bottom-0 pointer-events-none"
            style={{ transform: 'translateY(75%)', zIndex: 20, lineHeight: 0 }}
          >
            <img src="assets/images/div-2.webp" alt="" className="w-full block" />
          </div>
        </div>

        <Formulario />
        <Footer />
      </main>
    </>
  )
}
