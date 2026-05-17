import { useState } from 'react'
import { cn } from '@/lib/utils'
import { CONFIG, HERO } from '@/config/content'

const maskWhatsApp = (value: string) => {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return `(${d}`
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const isValidWhatsApp = (v: string) => v.replace(/\D/g, '').length === 11

type Fields = { nome: string; email: string; whatsapp: string; faturamento: string; mensagem: string }
type Touched = Partial<Record<keyof Fields, boolean>>

const FATURAMENTO_OPTIONS = [
  'Até 30 mil',
  'De 30 a 100 mil',
  'De 100 a 300 mil',
  'Acima de 300 mil',
]

type ContactFormProps = { showTitle?: boolean }

export default function ContactForm({ showTitle = true }: ContactFormProps) {
  const [fields, setFields] = useState<Fields>({ nome: '', email: '', whatsapp: '', faturamento: '', mensagem: '' })
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
    faturamento: !fields.faturamento ? 'Selecione uma opção' : '',
    mensagem: '',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ nome: true, email: true, whatsapp: true, faturamento: true, mensagem: true })
    if (errors.nome || errors.email || errors.whatsapp || errors.faturamento) return

    try {
      const url = new URL(CONFIG.FORM_ENDPOINT)
      Object.entries(fields).forEach(([key, value]) => url.searchParams.append(key, value))
      await fetch(url.toString(), { mode: 'no-cors' })
    } catch {
      // falha silenciosa — não bloqueia o agradecimento
    }

    setSubmitted(true)
  }

  return (
    <div className="bg-white rounded-2xl p-8" style={{ boxShadow: '0 32px 80px -4px rgba(0,0,0,0.65)' }}>
      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
          <p className="text-2xl font-bold text-[#622690]" style={{ lineHeight: 1 }}>
            Recebemos sua mensagem!
          </p>
          <p className="text-[#1E1A20]">Em breve entraremos em contato.</p>
        </div>
      ) : (
        <>
          {showTitle && (
            <h2 className="text-xl font-semibold text-[#622690] mb-6 uppercase text-center" style={{ lineHeight: 1.3 }}>
              {HERO.FORM_TITLE}{' '}
              <strong className="text-[#ff8602] font-bold">{HERO.FORM_TITLE_HIGHLIGHT}</strong>
            </h2>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <Field
              label="Nome"
              type="text"
              value={fields.nome}
              onChange={(v) => setFields((f) => ({ ...f, nome: v }))}
              onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
              error={touched.nome ? errors.nome : ''}
              placeholder="Seu nome completo"
              required
            />
            <Field
              label="E-mail"
              type="email"
              value={fields.email}
              onChange={(v) => setFields((f) => ({ ...f, email: v }))}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              error={touched.email ? errors.email : ''}
              placeholder="seu@email.com"
              required
            />
            <Field
              label="WhatsApp"
              type="tel"
              value={fields.whatsapp}
              onChange={(v) => setFields((f) => ({ ...f, whatsapp: maskWhatsApp(v) }))}
              onBlur={() => setTouched((t) => ({ ...t, whatsapp: true }))}
              error={touched.whatsapp ? errors.whatsapp : ''}
              placeholder="(00) 00000-0000"
              required
            />
            <SelectField
              label="Qual o faturamento da sua empresa?"
              value={fields.faturamento}
              onChange={(v) => setFields((f) => ({ ...f, faturamento: v }))}
              onBlur={() => setTouched((t) => ({ ...t, faturamento: true }))}
              error={touched.faturamento ? errors.faturamento : ''}
              options={FATURAMENTO_OPTIONS}
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
              className="cta-button w-full text-white font-bold uppercase tracking-widest py-4 rounded-lg min-h-[52px] mt-2 cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </>
      )}
    </div>
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
  required?: boolean
}

function Field({ label, type, value, onChange, onBlur, error, placeholder, required }: FieldProps) {
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
          required={required}
        />
      )}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}

type SelectFieldProps = {
  label: string
  value: string
  onChange: (v: string) => void
  onBlur: () => void
  error: string
  options: string[]
}

function SelectField({ label, value, onChange, onBlur, error, options }: SelectFieldProps) {
  const id = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-[#1E1A20]">{label}</label>
      <div className="relative">
        <select
          id={id}
          className={cn(
            'w-full px-4 py-3 pr-10 rounded-lg border text-sm text-[#1E1A20] outline-none transition-colors bg-gray-50 focus:bg-white focus:border-[#622690] appearance-none cursor-pointer',
            error ? 'border-red-400' : 'border-gray-200',
            !value && 'text-gray-400'
          )}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          required
        >
          <option value="" disabled>Selecione uma opção</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-[#1E1A20]">{opt}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
