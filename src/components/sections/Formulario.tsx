import { FORMULARIO } from '@/config/content'
import ContactForm from '@/components/ui/ContactForm'

export default function Formulario() {
  return (
    <section className="relative overflow-hidden pt-[110px]" id="formulario">
      <div className="flex flex-col md:flex-row items-center">

        {/* Esquerda — imagem 781×560, colada na borda, centralizada verticalmente */}
        <div className="shrink-0 overflow-hidden" style={{ width: '921px', height: '660px' }}>
          <img
            src={FORMULARIO.IMAGE}
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Direita — headline, subline e formulário */}
        <div className="flex-1 flex items-center justify-center px-6 py-16 md:px-[40px] md:py-[80px]">
          <div className="flex flex-col gap-8 w-full max-w-[700px]">

            <div className="flex flex-col gap-4">
              <h2
                className="text-4xl md:text-[40px] font-bold uppercase text-white"
                style={{ lineHeight: 'calc(1em + 4px)' }}
              >
                Pronto para transformar
                <br />
                marketing em uma
                <br />
                <span style={{ color: '#ff8602' }}>máquina de vendas?</span>
              </h2>
              <p
                className="text-[22px]"
                style={{ color: '#e4ccfd', lineHeight: 1.3 }}
              >
                Se você quer parar de investir sem retorno e começar a
                <br />
                crescer com previsibilidade, esse é o momento.
              </p>
            </div>

            <ContactForm showTitle={false} />

          </div>
        </div>

      </div>
    </section>
  )
}
