import { FORMULARIO } from '@/config/content'
import ContactForm from '@/components/ui/ContactForm'

export default function Formulario() {
  return (
    <section className="relative overflow-hidden pt-[110px]" id="formulario">
      <div className="flex flex-col md:flex-row items-center">

        {/* Mobile — imagem em fluxo */}
        <div className="w-full px-6 md:hidden">
          <img
            src="assets/images/img-2-mobile.webp"
            alt=""
            className="w-full block"
          />
        </div>

        {/* Desktop — imagem com dimensões fixas */}
        <div className="hidden md:block shrink-0 overflow-hidden" style={{ width: '921px', height: '660px' }}>
          <img
            src={FORMULARIO.IMAGE}
            alt=""
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Direita — headline, subline e formulário */}
        <div className="flex-1 flex items-center justify-center px-6 py-16 md:px-[40px] md:py-[80px]">
          <div className="flex flex-col gap-8 w-full max-w-[700px]">

            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2
                className="text-[26px] md:text-[40px] font-bold uppercase text-white"
                style={{ lineHeight: 'calc(1em + 4px)' }}
              >
                {/* Mobile */}
                <span className="md:hidden">
                  Pronto para<br />
                  transformar<br />
                  marketing em uma<br />
                  <span style={{ color: '#ff8602' }}>máquina de vendas?</span>
                </span>
                {/* Desktop */}
                <span className="hidden md:inline">
                  Pronto para transformar
                  <br />
                  marketing em uma
                  <br />
                  <span style={{ color: '#ff8602' }}>máquina de vendas?</span>
                </span>
              </h2>
              <p
                className="text-[18px] md:text-[22px] text-white md:text-[#e4ccfd]"
                style={{ lineHeight: 1.3 }}
              >
                <span className="md:hidden">
                  Se você quer parar de investir sem<br />
                  retorno e começar a crescer com<br />
                  previsibilidade, esse é o momento.
                </span>
                <span className="hidden md:inline">
                  Se você quer parar de investir sem retorno e começar a
                  <br />
                  crescer com previsibilidade, esse é o momento.
                </span>
              </p>
            </div>

            <ContactForm showTitle={false} />

          </div>
        </div>

      </div>
    </section>
  )
}
