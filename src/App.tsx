import Background from '@/components/ui/Background'
import Hero from '@/components/sections/Hero'
import OQueFazemos from '@/components/sections/OQueFazemos'

export default function App() {
  return (
    <>
      <Background />
      <main className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <OQueFazemos />
      </main>
    </>
  )
}
