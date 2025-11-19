import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Dark tech background with subtle shine */}
      <div className="relative min-h-[90vh] w-full bg-[#0a1b34]">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(29,78,216,0.25),transparent_40%)]" />
        {/* Shining sweep */}
        <div className="pointer-events-none absolute -inset-y-32 -left-32 w-[60rem] rotate-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2 lg:px-12">
          {/* Copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.6)]" />
              Teljesen white‑label platform – a te márkáddal
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Építs saját márkás szoftver‑élményt
              <span className="block text-blue-200/90">anélkül, hogy fejlesztő csapatra lenne szükség</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
              A ModiNova egy kész, üzemkész értékesítési és ügyfélkezelő rendszer, amelyet a te arculatodra szabunk. Te értékesíted a SAJÁT megoldásodat – mi pedig mindent beállítunk a háttérben.
            </p>

            <ul className="mt-5 max-w-xl list-disc space-y-2 pl-5 text-blue-100/80">
              <li>Teljes arculati illesztés: logó, színek, domain</li>
              <li>Kész tölcsérek, CRM, automatizmusok, ügyfélportálok</li>
              <li>Gyors bevezetés: napok alatt indulás</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-[#F8E7B8] via-[#EACF7A] to-[#C99B29] px-6 py-3 text-base font-semibold text-[#2b1a04] shadow-[0_8px_24px_rgba(201,155,41,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Időpontfoglalás
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="#2b1a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span className="text-sm text-blue-200/70">Készre konfigurálva • A te márkáddal • Folyamatos támogatás</span>
            </div>
          </div>

          {/* 3D Spline scene */}
          <div className="relative h-[420px] w-full md:h-[560px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5/5 shadow-[inset_0_1px_40px_rgba(59,130,246,0.08)]" />
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
