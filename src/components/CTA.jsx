import React from 'react'

function CTA() {
  return (
    <section id="cta" className="relative bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-blue-100/70 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Foglalj be egy rövid, kötetlen konzultációt
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Megmutatjuk, hogyan tudod saját márkád alatt értékesíteni a rendszert. Mi mindent beállítunk, te pedig a növekedésre fókuszálsz.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left">
            <p className="text-sm font-semibold text-slate-900">Stresszpontok, amiket levesszük a válladról</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Beállítási káosz, elhúzódó indulás</li>
              <li>Széttöredezett eszközök és előfizetések</li>
              <li>Ügyfélportál hiánya, gyenge riportok</li>
              <li>Alacsony lead‑konverzió, manufaktúra jellegű folyamatok</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left">
            <p className="text-sm font-semibold text-slate-900">Pozitívumok, amiket kapsz</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Teljesen white‑label élmény – a te márkáddal</li>
              <li>Kész tölcsérek és automatizmusok</li>
              <li>Átlátható CRM és pipeline menedzsment</li>
              <li>Gyors bevezetés és folyamatos támogatás</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-left">
            <p className="text-sm font-semibold text-slate-900">Bónuszok, ha most foglalsz</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Extra tölcsér sablon (értéke $297)</li>
              <li>Haladó e‑mail/sms sabloncsomag (értéke $197)</li>
              <li>30 napos priority támogatás</li>
              <li>Exkluzív best practice tréning</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#F8E7B8] via-[#EACF7A] to-[#C99B29] px-6 py-3 text-base font-semibold text-[#2b1a04] shadow-[0_8px_24px_rgba(201,155,41,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Foglalj időpontot most
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="#2b1a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#features" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50">Nézd meg a funkciókat</a>
        </div>

        <p className="mt-6 text-xs text-slate-500">A demó során bemutatjuk, hogyan tudod a rendszert teljesen saját márkád alatt értékesíteni – fejlesztés nélkül.</p>
      </div>
    </section>
  )
}

export default CTA
