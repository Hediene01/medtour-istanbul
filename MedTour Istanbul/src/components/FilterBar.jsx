import { SERVICE_OPTIONS, STATUS_OPTIONS } from '../interfaces/requestModel'
import { getTranslatedOption } from '../utils/translations'

function FilterBar({ filters, onFilterChange, onResetFilters, t }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        {t.status}
        <select
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 shadow-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
          onChange={(event) => onFilterChange('status', event.target.value)}
          value={filters.status}
        >
          <option value="">{t.allStatuses}</option>
          {STATUS_OPTIONS.map((status) => (
            <option key={status} value={status}>
              {getTranslatedOption(t.statuses, status)}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        {t.service}
        <select
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 shadow-sm outline-none transition focus:border-teal-500 focus:ring-4 focus:ring-teal-100"
          onChange={(event) => onFilterChange('service', event.target.value)}
          value={filters.service}
        >
          <option value="">{t.allServices}</option>
          {SERVICE_OPTIONS.map((service) => (
            <option key={service} value={service}>
              {getTranslatedOption(t.services, service)}
            </option>
          ))}
        </select>
      </label>

      <button
        className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-700"
        onClick={onResetFilters}
        type="button"
      >
        {t.resetFilters}
      </button>
    </div>
  )
}

export default FilterBar
