export default function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(160,60,255,0.75) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,134,2,0.45) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(200,80,255,0.6) 0%, transparent 70%)', filter: 'blur(55px)' }} />
    </div>
  )
}
