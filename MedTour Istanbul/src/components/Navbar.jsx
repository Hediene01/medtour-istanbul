function Navbar({ language, onLanguageChange, t }) {
  return (
    <header className="sticky top-0 z-20 border-b border-white/20 bg-white/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#dashboard" className="flex items-center gap-3 transition-transform hover:scale-105">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-lg font-bold text-white shadow-lg shadow-teal-600/30">
            MI
          </span>
          <span>
            <span className="block text-lg font-bold bg-gradient-to-r from-slate-950 to-slate-700 bg-clip-text text-transparent">
              MedTour Istanbul
            </span>
            <span className="block text-xs font-medium text-slate-500">
              {t.navSubtitle}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          <a className="transition-all duration-200 hover:text-teal-700 hover:scale-105" href="#requests">
            {t.navRequests}
          </a>
          <a className="transition-all duration-200 hover:text-teal-700 hover:scale-105" href="#new-request">
            {t.navNewRequest}
          </a>
          <a className="transition-all duration-200 hover:text-teal-700 hover:scale-105" href="#insights">
            {t.navInsights}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label={t.languageLabel}
            className="rounded-full border border-slate-200/50 bg-white/50 px-3 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-teal-300 hover:bg-white/80 hover:text-teal-700 hover:shadow-md"
            onClick={() => onLanguageChange(language === 'en' ? 'tr' : 'en')}
            type="button"
          >
            {language === 'en' ? 'TR' : 'EN'}
          </button>
          <a
            href="#new-request"
            className="rounded-full bg-gradient-to-r from-teal-600 to-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-600/40"
          >
            {t.navAddRequest}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
