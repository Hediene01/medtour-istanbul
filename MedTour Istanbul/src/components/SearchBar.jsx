function SearchBar({ searchTerm, onSearchChange, t }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700">
      {t.searchPatients}
      <input
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 shadow-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder={t.searchPlaceholder}
        value={searchTerm}
      />
    </label>
  )
}

export default SearchBar
