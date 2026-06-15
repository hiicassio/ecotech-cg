import { useState, useEffect } from 'react'
import {
  Leaf,
  Menu,
  X,
  AlertTriangle,
  Droplets,
  HeartPulse,
  CloudUpload,
  RotateCcw,
  Battery,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Recycle,
  ChevronRight,
  Shield,
} from 'lucide-react'

/* ─── Dados mockados ─── */

const NAV_LINKS = [
  { label: 'O Problema', href: '#problema' },
  { label: 'Como Descartar', href: '#como-descartar' },
  { label: 'Onde Descartar', href: '#onde-descartar' },
]

const PROBLEM_CARDS = [
  {
    id: 'toxinas',
    icon: AlertTriangle,
    title: 'Toxinas nos Componentes',
    description:
      'Baterias, placas-mãe e telas contêm metais pesados como chumbo, mercúrio e cádmio. Quando descartados incorretamente, esses materiais se tornam fontes permanentes de contaminação tóxica.',
    accent: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  {
    id: 'contaminacao',
    icon: Droplets,
    title: 'Contaminação do Meio Ambiente',
    description:
      'O descarte no lixo comum permite que substâncias químicas vazem para o solo e lençóis freáticos, comprometendo ecossistemas inteiros e a qualidade da água que abastece comunidades.',
    accent: 'bg-blue-50 text-blue-700 border-blue-200',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'saude',
    icon: HeartPulse,
    title: 'Riscos à Saúde Humana',
    description:
      'A exposição prolongada a esses metais causa doenças neurológicas, renais e respiratórias graves — impactando diretamente a ODS 3: Saúde e Bem-Estar de toda a população.',
    accent: 'bg-red-50 text-red-700 border-red-200',
    iconBg: 'bg-red-100 text-red-700',
  },
]

const DISPOSAL_STEPS = [
  {
    step: 1,
    icon: CloudUpload,
    title: 'Faça backup dos seus dados',
    description:
      'Salve fotos, documentos e contatos em nuvem ou em um HD externo antes de qualquer procedimento.',
  },
  {
    step: 2,
    icon: RotateCcw,
    title: 'Restaure as configurações de fábrica',
    description:
      'Apague todos os dados pessoais do aparelho para proteger sua privacidade e segurança digital.',
  },
  {
    step: 3,
    icon: Battery,
    title: 'Separe baterias e cabos',
    description:
      'Remova baterias (se removíveis) e embale cabos separadamente para facilitar o reciclagem correta.',
  },
]

const ECOPONTOS = [
  {
    id: 'panama',
    name: 'Ecoponto Panamá',
    address: 'R. Sagarana com Av. José Barbosa Rodrigues',
    city: 'Campo Grande, MS',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=R.+Sagarana+Av.+José+Barbosa+Rodrigues+Campo+Grande+MS',
  },
  {
    id: 'noroeste',
    name: 'Ecoponto Noroeste',
    address: 'R. Piraputanga com Guarulhos',
    city: 'Campo Grande, MS',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=R.+Piraputanga+Guarulhos+Campo+Grande+MS',
  },
  {
    id: 'uniao',
    name: 'Ecoponto União',
    address: 'Av. Roseira, esquina com R. Carmem Bazzano Pedra',
    city: 'Campo Grande, MS',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.+Roseira+R.+Carmem+Bazzano+Pedra+Campo+Grande+MS',
  },
  {
    id: 'moreninhas',
    name: 'Ecoponto Moreninhas',
    address: 'R. Copaíba, entre as ruas João Batista e Valério de Almeida',
    city: 'Campo Grande, MS',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=R.+Copaíba+Campo+Grande+MS',
  },
]

/* ─── Componentes ─── */

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="group flex items-center gap-2.5 text-slate-950"
          aria-label="EcoTech CG — Página inicial"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-eco-700 text-white transition-colors group-hover:bg-eco-800">
            <Leaf className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight sm:text-xl">
            EcoTech <span className="text-eco-700">CG</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-eco-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#onde-descartar"
            className="inline-flex items-center gap-1.5 rounded-lg bg-eco-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-eco-800"
          >
            Ecopontos
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-eco-50 hover:text-eco-800"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#onde-descartar"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 rounded-lg bg-eco-700 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-eco-800"
              >
                Encontrar Ecopontos
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-eco-50 via-white to-slate-50 pt-28 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-eco-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-eco-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-eco-200 bg-eco-50 px-4 py-1.5 text-sm font-medium text-eco-800">
            <Shield className="h-4 w-4" aria-hidden="true" />
            Alinhado à ODS 3 — Saúde e Bem-Estar
          </span>

          <h1
            id="hero-title"
            className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]"
          >
            O descarte incorreto do seu eletrônico{' '}
            <span className="text-eco-700">coloca a sua saúde em risco.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Proteja o meio ambiente e a saúde da sua comunidade. Encontre o ponto
            de descarte seguro mais próximo de você.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#onde-descartar"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-eco-700 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-eco-700/25 transition-all hover:bg-eco-800 hover:shadow-xl hover:shadow-eco-700/30 sm:w-auto"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Encontrar Ecopontos
            </a>
            <a
              href="#problema"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-800 transition-colors hover:border-eco-300 hover:bg-eco-50 sm:w-auto"
            >
              Saiba mais
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { value: '50M+', label: 'toneladas de e-waste/ano no mundo' },
            { value: '80%', label: 'não são reciclados corretamente' },
            { value: '4', label: 'ecopontos em Campo Grande' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-eco-700 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section
      id="problema"
      className="scroll-mt-20 bg-slate-950 py-16 sm:py-24"
      aria-labelledby="problema-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco-400">
            O Problema
          </span>
          <h2
            id="problema-title"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Por que o lixo eletrônico ameaça a sua saúde?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            O descarte inadequado de aparelhos eletrônicos gera impactos diretos na
            saúde pública — um dos pilares da ODS 3 da ONU.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEM_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <article
                key={card.id}
                className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-eco-700/50 hover:shadow-lg hover:shadow-eco-900/20"
              >
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.iconBg}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                  {card.description}
                </p>
                <div
                  className={`mt-5 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${card.accent}`}
                >
                  ODS 3 — Saúde e Bem-Estar
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DisposalGuide() {
  return (
    <section
      id="como-descartar"
      className="scroll-mt-20 bg-white py-16 sm:py-24"
      aria-labelledby="guia-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco-700">
            Como Descartar
          </span>
          <h2
            id="guia-title"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Guia de preparação do aparelho
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Siga estes três passos simples antes de levar seu eletrônico a um
            ecoponto. É rápido, seguro e protege você e o meio ambiente.
          </p>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-eco-200 via-eco-400 to-eco-200 md:block"
            aria-hidden="true"
          />

          {DISPOSAL_STEPS.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-eco-200 bg-eco-50 shadow-sm">
                  <Icon className="h-10 w-10 text-eco-700" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-eco-700 text-sm font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </li>
            )
          })}
        </ol>

        <div className="mx-auto mt-14 flex max-w-2xl items-start gap-4 rounded-2xl border border-eco-200 bg-eco-50 p-5 sm:p-6">
          <Recycle className="mt-0.5 h-6 w-6 shrink-0 text-eco-700" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-eco-900 sm:text-base">
            <strong className="font-semibold">Dica:</strong> leve também carregadores,
            fones de ouvido e outros acessórios eletrônicos. Tudo pode ser
            reciclado nos ecopontos de Campo Grande.
          </p>
        </div>
      </div>
    </section>
  )
}

function EcopointsSection() {
  return (
    <section
      id="onde-descartar"
      className="scroll-mt-20 bg-gradient-to-b from-slate-50 to-eco-50/50 py-16 sm:py-24"
      aria-labelledby="ecopontos-title"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-eco-700">
            Onde Descartar
          </span>
          <h2
            id="ecopontos-title"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Ecopontos em Campo Grande
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Encontre o ponto de coleta mais próximo e descarte seus eletrônicos de
            forma segura e responsável.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ECOPONTOS.map((ponto) => (
            <article
              key={ponto.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-eco-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-eco-100 text-eco-700">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-950">{ponto.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {ponto.address}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{ponto.city}</p>
                </div>
              </div>

              <a
                href={ponto.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-eco-700 bg-white px-4 py-2.5 text-sm font-semibold text-eco-800 transition-colors hover:bg-eco-700 hover:text-white"
              >
                Ver no Mapa
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-eco-700 text-white">
              <Leaf className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-white">EcoTech CG</span>
          </div>

          <p className="max-w-md text-center text-sm leading-relaxed sm:text-left">
            Projeto desenvolvido para fins acadêmicos — Promovendo a ODS 3 da ONU.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-eco-600 hover:bg-eco-900/30 hover:text-eco-400"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:border-eco-600 hover:bg-eco-900/30 hover:text-eco-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} EcoTech CG. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

/* ─── App principal ─── */

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-eco-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo principal
      </a>

      <Header />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <DisposalGuide />
        <EcopointsSection />
      </main>
      <Footer />
    </div>
  )
}
