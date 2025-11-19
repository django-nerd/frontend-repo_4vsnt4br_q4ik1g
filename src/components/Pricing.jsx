import React from 'react'

function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-white to-blue-50/60 py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Egyszerű, átlátható csomagok</h2>
          <p className="mt-4 text-lg text-slate-600">Indulj most – skálázz a saját feltételeid szerint.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="absolute right-6 top-6 rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700">Kezdő</div>
            <h3 className="text-xl font-bold text-slate-900">Launch Kit</h3>
            <p className="mt-1 text-sm text-slate-600">Tölcsér, CRM, alap automatizmusok és done‑for‑you beállítás.</p>
            <p className="mt-6 text-4xl font-extrabold text-slate-900">$497 <span className="text-base font-medium text-slate-500">egyszeri díj</span></p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>1 prémium tölcsér (szöveg + design)</li>
              <li>Alap pipeline‑ok és naptárak</li>
              <li>Branding és domain beállítás</li>
              <li>Éles indulás 5–7 napon belül</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800">Indulás a Launch Kit‑tel</a>
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg ring-2 ring-blue-600/20">
            <div className="absolute right-6 top-6 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700">Legnépszerűbb</div>
            <h3 className="text-xl font-bold text-slate-900">Scale Suite</h3>
            <p className="mt-1 text-sm text-slate-600">Haladó automatizmusok, ügyfélportálok és concierge jellegű bevezetés.</p>
            <p className="mt-6 text-4xl font-extrabold text-slate-900">$1497 <span className="text-base font-medium text-slate-500">egyszeri díj</span></p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>Minden a Launch Kit‑ben</li>
              <li>Többlépcsős automatizmusok és lead‑nevelés</li>
              <li>Ügyfélportál sablonok</li>
              <li>White‑glove migráció</li>
              <li>30 napos optimalizációs támogatás</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-b from-[#F8E7B8] via-[#EACF7A] to-[#C99B29] px-5 py-3 font-semibold text-[#2b1a04] shadow-[0_8px_24px_rgba(201,155,41,0.35)] hover:brightness-105">Váltás a Scale Suite‑ra</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
