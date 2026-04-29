import { useState } from 'react'
import { Target, TrendingUp, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONFIG, HERO } from '@/config/content'

const PILL_ICONS = [Target, TrendingUp, Users]

const maskWhatsApp = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return `(${d}`
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const isValidWhatsApp = (v: string) => v.replace(/\D/g, '').length === 11

type Fields = { nome: string; email: string; whatsapp: string; mensagem: string }
type Touched = Partial<Record<keyof Fields, boolean>>

export default function Hero() {
  const [fields, setFields] = useState<Fields>({ nome: '', email: '', whatsapp: '', mensagem: '' })
  const [touched, setTouched] = useState<Touched>({})
  const [submitted, setSubmitted] = useState(false)

  const errors = {
    nome: !fields.nome.trim() ? 'Nome obrigatório' : '',
    email: !fields.email
      ? 'E-mail obrigatório'
      : !isValidEmail(fields.email)
        ? 'E-mail inválido'
        : '',
    whatsapp: !fields.whatsapp
      ? 'WhatsApp obrigatório'
      : !isValidWhatsApp(fields.whatsapp)
        ? 'Número inválido (precisa ter 11 dígitos)'
        : '',
    mensagem: '',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ nome: true, email: true, whatsapp: true, mensagem: true })
    if (errors.nome || errors.email || errors.whatsapp) return
    // TODO: enviar para CONFIG.FORM_ENDPOINT quando definido
    console.log('Enviando para:', CONFIG.FORM_ENDPOINT, fields)
    setSubmitted(true)
  }

  return (
    <section className="relative" id="hero">

      {/* Background — define a altura da seção sem distorção */}
      <img
        src="assets/images/baackground-hero-smille.webp"
        alt=""
        aria-hidden="true"
        className="w-full block"
      />

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 z-10 max-w-[1440px] mx-auto px-6 py-16 md:px-20 md:pt-[40px] md:pb-[120px] grid grid-cols-1 md:grid-cols-[1fr_420px] gap-6 md:gap-12 items-center w-full">

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

          {/* Pills + CTA com glow */}
          <div className="relative flex flex-col gap-3 w-fit">
            {/* Glow */}
            <div
              className="absolute -inset-6 rounded-3xl -z-10"
              style={{ backgroundColor: '#f2e6f3', filter: 'blur(28px)', opacity: 1 }}
            />

            {HERO.PILLS.map((text, i) => {
              const Icon = PILL_ICONS[i]
              return (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-[#622690] rounded-full px-5 py-3 w-fit"
                >
                  <Icon size={18} className="text-white shrink-0" />
                  <span className="text-sm font-medium text-white">{text}</span>
                </div>
              )
            })}

            {/* CTA */}
            <a
              href="#formulario"
              className="inline-flex items-center justify-center bg-[#ff8602] text-white font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-lg w-fit min-h-[52px] hover:opacity-90 transition-opacity mt-1"
            >
              {HERO.CTA}
            </a>
          </div>
        </div>

        {/* Direita — Formulário */}
        <div id="formulario" className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 32px 80px -4px rgba(0,0,0,0.65)' }}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
              <p className="text-2xl font-bold text-[#622690]" style={{ lineHeight: 1 }}>
                Recebemos sua mensagem!
              </p>
              <p className="text-[#1E1A20]">Em breve entraremos em contato.</p>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-[#622690] mb-6 uppercase text-center" style={{ lineHeight: 1.3 }}>
                {HERO.FORM_TITLE}{' '}
                <strong className="text-[#ff8602] font-bold">{HERO.FORM_TITLE_HIGHLIGHT}</strong>
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                <Field
                  label="Nome"
                  type="text"
                  value={fields.nome}
                  onChange={(v) => setFields((f) => ({ ...f, nome: v }))}
                  onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
                  error={touched.nome ? errors.nome : ''}
                  placeholder="Seu nome completo"
                />
                <Field
                  label="E-mail"
                  type="email"
                  value={fields.email}
                  onChange={(v) => setFields((f) => ({ ...f, email: v }))}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  error={touched.email ? errors.email : ''}
                  placeholder="seu@email.com"
                />
                <Field
                  label="WhatsApp"
                  type="tel"
                  value={fields.whatsapp}
                  onChange={(v) => setFields((f) => ({ ...f, whatsapp: maskWhatsApp(v) }))}
                  onBlur={() => setTouched((t) => ({ ...t, whatsapp: true }))}
                  error={touched.whatsapp ? errors.whatsapp : ''}
                  placeholder="(00) 00000-0000"
                />
                <Field
                  label="Mensagem"
                  type="textarea"
                  value={fields.mensagem}
                  onChange={(v) => setFields((f) => ({ ...f, mensagem: v }))}
                  onBlur={() => setTouched((t) => ({ ...t, mensagem: true }))}
                  error=""
                  placeholder="Como podemos ajudar?"
                />
                <button
                  type="submit"
                  className="w-full bg-[#ff8602] text-white font-bold uppercase tracking-widest py-4 rounded-lg min-h-[52px] hover:opacity-90 transition-opacity mt-2 cursor-pointer"
                >
                  Enviar
                </button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  type: string
  value: string
  onChange: (v: string) => void
  onBlur: () => void
  error: string
  placeholder: string
}

function Field({ label, type, value, onChange, onBlur, error, placeholder }: FieldProps) {
  const inputClass = cn(
    'w-full px-4 py-3 rounded-lg border text-sm text-[#1E1A20] outline-none transition-colors bg-gray-50 focus:bg-white',
    'focus:border-[#622690]',
    error ? 'border-red-400' : 'border-gray-200'
  )

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-[#1E1A20]">{label}</label>
      {type === 'textarea' ? (
        <textarea
          className={cn(inputClass, 'resize-none h-24')}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className={inputClass}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
