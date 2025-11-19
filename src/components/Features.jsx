import React from 'react'

const features = [
  {
    title: 'Saját márka, saját élmény',
    desc: 'Minden teljesen white‑label: logó, színek, domain és ügyfélélmény – a te neveddel fut minden.',
  },
  {
    title: 'Előre felépített automatizmusok',
    desc: 'Tölcsérek, pipeline‑ok, naptár, SMS, e‑mail – ügynökségi növekedésre hangolva, az első naptól.',
  },
  {
    title: 'Ügyfélportál sablonok',
    desc: 'Letisztult belépés, dashboardok, űrlapok és riportok – fejlesztők nélkül.',
  },
  {
    title: 'Done‑for‑you bevezetés',
    desc: 'Migrálunk, konfigurálunk, indulunk. Te értékesítesz, mi építünk a háttérben.',
  },
]

function Features() {
  return (
    <section className="relative bg-white py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-44 h-44 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Minden, ami az értékesítéshez, onboardinghoz és megtartáshoz kell
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A háttérben bevált infrastruktúra működik, elöl pedig a te prémium márkaélményed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 ring-1 ring-inset ring-blue-200" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
              <div className="mt-5 h-1 w-12 rounded bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
