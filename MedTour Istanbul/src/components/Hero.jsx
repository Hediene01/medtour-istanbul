function Hero({ t }) {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16 overflow-hidden">
      {/* Subtle floating background shapes */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-teal-100/30 blur-3xl -z-10 animate-pulse" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-100/20 blur-3xl -z-10 animate-pulse" />
      
      <div>
        <span className="inline-flex rounded-full border border-teal-200/60 bg-gradient-to-r from-teal-50 to-cyan-50 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
          {t.heroBadge}
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl leading-tight">
          {t.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 font-medium">
          {t.heroText}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#new-request"
            className="rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-3 text-center text-sm font-bold text-white shadow-xl shadow-teal-600/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-600/40"
          >
            {t.heroPrimary}
          </a>
          <a
            href="#requests"
            className="rounded-full border border-slate-200/60 bg-white/70 px-6 py-3 text-center text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-teal-200 hover:text-teal-700 hover:bg-white hover:shadow-md"
          >
            {t.heroSecondary}
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-white/40 bg-white/80 p-4 shadow-2xl shadow-slate-300/40 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-slate-400/50">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
          <div className="bg-gradient-to-br from-teal-600/20 via-slate-950 to-slate-950 p-6 sm:p-8 relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20">
                {t.heroPanelBadge}
              </span>
              <span className="rounded-full bg-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-100 border border-emerald-400/40">
                {t.heroPanelStatus}
              </span>
            </div>
            <div className="relative z-10 mt-24 rounded-2xl bg-gradient-to-br from-white/95 to-white/90 p-5 text-slate-950 shadow-2xl backdrop-blur sm:mt-36 border border-white/40">
              <p className="text-sm font-semibold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                {t.heroPanelLabel}
              </p>
              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">{t.heroPanelTitle}</h2>
                  <p className="mt-1 text-sm text-slate-500">{t.heroPanelText}</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 px-4 py-3 text-sm font-bold text-slate-700 border border-slate-200/50">
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

/* Add animation for floating shapes */
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes gentle-float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-pulse {
      animation: gentle-float 6s ease-in-out infinite;
    }
  `
  if (!document.head.querySelector('style[data-hero-animation]')) {
    style.setAttribute('data-hero-animation', 'true')
    document.head.appendChild(style)
  }
}
