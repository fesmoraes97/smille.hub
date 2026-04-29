import Background from '@/components/ui/Background'
import Hero from '@/components/sections/Hero'
import OQueFazemos from '@/components/sections/OQueFazemos'
import Estrategia from '@/components/sections/Estrategia'

export default function App() {
  return (
    <>
      <Background />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <OQueFazemos />
        <Estrategia />
      </main>
    </>
  )
}
