function Navbar({ language, onLanguageChange, t }) {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#dashboard" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-600 text-lg font-bold text-white shadow-lg shadow-teal-600/20">
            MI
          </span>
          <span>
            <span className="block text-lg font-bold text-slate-950">
              MedTour Istanbul
            </span>
            <span className="block text-xs font-medium text-slate-500">
              {t.navSubtitle}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a className="transition hover:text-teal-700" href="#requests">
            {t.navRequests}
          </a>
          <a className="transition hover:text-teal-700" href="#new-request">
            {t.navNewRequest}
          </a>
          <a className="transition hover:text-teal-700" href="#insights">
            {t.navInsights}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label={t.languageLabel}
            className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-teal-200 hover:text-teal-700"
            onClick={() => onLanguageChange(language === 'en' ? 'tr' : 'en')}
            type="button"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
          <a
            href="#new-request"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-teal-700"
          >
            {t.navAddRequest}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
