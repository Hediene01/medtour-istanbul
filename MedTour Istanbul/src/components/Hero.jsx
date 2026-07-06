function Hero({ t }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
      <div>
        <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
          {t.heroBadge}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl">
          {t.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          {t.heroText}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#new-request"
            className="rounded-full bg-teal-600 px-6 py-3 text-center text-sm font-bold text-white shadow-xl shadow-teal-600/25 transition hover:-translate-y-0.5 hover:bg-teal-700"
          >
            {t.heroPrimary}
          </a>
          <a
            href="#requests"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 text-center text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-700"
          >
            {t.heroSecondary}
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/70 bg-white p-4 shadow-2xl shadow-slate-200/80">
        <div className="overflow-hidden rounded-2xl bg-slate-950 text-white">
          <div className="bg-[linear-gradient(135deg,#0f766e,#0f172a)] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {t.heroPanelBadge}
              </span>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                {t.heroPanelStatus}
              </span>
            </div>
            <div className="mt-24 rounded-2xl bg-white/95 p-5 text-slate-950 shadow-2xl backdrop-blur sm:mt-36">
              <p className="text-sm font-semibold text-teal-700">
                {t.heroPanelLabel}
              </p>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{t.heroPanelTitle}</h2>
                  <p className="mt-1 text-sm text-slate-500">{t.heroPanelText}</p>
                </div>
                <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700">
                  18 Jul
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
