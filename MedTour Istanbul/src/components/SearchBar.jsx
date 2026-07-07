function SearchBar({ searchTerm, onSearchChange, t }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {t.searchPatients}
      <input
        className="rounded-2xl border border-slate-200/60 bg-white/50 px-4 py-3 text-slate-950 shadow-sm outline-none transition-all duration-200 backdrop-blur-sm focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100/50 hover:border-slate-300/60"
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder={t.searchPlaceholder}
        value={searchTerm}
      />
    </label>
  )
}

export default SearchBar
