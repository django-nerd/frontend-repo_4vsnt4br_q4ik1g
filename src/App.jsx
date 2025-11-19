import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero />

      {/* Features */}
      <div id="features">
        <Features />
      </div>

      {/* Pricing */}
      <Pricing />

      {/* CTA */}
      <CTA />

      {/* Plus section: Részletes előnyök és társadalmi bizonyíték */}
      <section className="bg-[#0f2142] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold">Miért most és miért így?</h3>
              <p className="mt-4 text-blue-100/90">
                A piac gyorsan telítődik. Az ügynökségek, amelyek előbb lépnek, stabil MRR‑t építenek ki saját márkás platformmal. A ModiNova segítségével anélkül kínálsz prémium szoftverélményt, hogy saját fejlesztésbe fektetnél.
              </p>
              <ul className="mt-6 space-y-3 text-blue-100/90">
                <li>• Nincs több váltás eszközök között – egy belépés, minden megoldva</li>
                <li>• Kevesebb lemorzsolódás, magasabb ügyfélérték</li>
                <li>• Gyorsabb onboarding, kevesebb support teher</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-blue-100/90">Mit várhatsz az első 30 napban?</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-blue-100/80">
                <li>Kickoff – igényfelmérés és arculati illesztés</li>
                <li>Beállítás – tölcsérek, CRM, automatizmusok</li>
                <li>Élesítés – mérőszámok és riportok bekötése</li>
                <li>Finomhangolás – 30 napos optimalizáció</li>
              </ol>
              <a href="#cta" className="mt-6 inline-block rounded-xl bg-gradient-to-b from-[#F8E7B8] via-[#EACF7A] to-[#C99B29] px-5 py-3 font-semibold text-[#2b1a04] shadow-[0_8px_24px_rgba(201,155,41,0.35)] hover:brightness-105">Lássuk a részleteket</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} ModiNova — White‑label rendszer a te márkáddal</p>
          <nav className="flex items-center gap-5 text-sm text-slate-600">
            <a href="#pricing" className="hover:text-slate-900">Árazás</a>
            <a href="#features" className="hover:text-slate-900">Funkciók</a>
            <a href="#cta" className="hover:text-slate-900">Időpontfoglalás</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
