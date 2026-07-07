import { getTranslatedOption } from '../utils/translations'

const statusStyles = {
  Pending: 'bg-amber-50/80 text-amber-700 ring-1 ring-amber-200/60 shadow-sm shadow-amber-100/50',
  Confirmed: 'bg-teal-50/80 text-teal-700 ring-1 ring-teal-200/60 shadow-sm shadow-teal-100/50',
  'In Treatment': 'bg-blue-50/80 text-blue-700 ring-1 ring-blue-200/60 shadow-sm shadow-blue-100/50',
  Completed: 'bg-emerald-50/80 text-emerald-700 ring-1 ring-emerald-200/60 shadow-sm shadow-emerald-100/50',
  Cancelled: 'bg-rose-50/80 text-rose-700 ring-1 ring-rose-200/60 shadow-sm shadow-rose-100/50',
}

const formatDate = (dateString, language) =>
  new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${dateString}T00:00:00`))

function RequestCard({ language, request, onDeleteRequest, onEditRequest, t }) {
  return (
    <article className="group rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/30 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200/60 hover:shadow-lg hover:shadow-slate-300/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold text-slate-950 group-hover:text-teal-700 transition-colors">{request.fullName}</h3>
            <span
              className={`rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-sm transition-all duration-200 ${statusStyles[request.status]}`}
            >
              {getTranslatedOption(t.statuses, request.status)}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-slate-500 group-hover:text-slate-600 transition-colors">
            {request.country} - {request.phone}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-full border border-blue-200/60 bg-gradient-to-r from-blue-50 to-blue-50/50 px-4 py-2 text-sm font-bold text-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-md hover:border-blue-300/60"
            onClick={() => onEditRequest(request)}
            type="button"
          >
            {t.edit}
          </button>
          <button
            className="rounded-full border border-rose-200/60 bg-gradient-to-r from-rose-50 to-rose-50/50 px-4 py-2 text-sm font-bold text-rose-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-rose-100 hover:shadow-md hover:border-rose-300/60"
            onClick={() => onDeleteRequest(request.id)}
            type="button"
          >
            {t.delete}
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/40 bg-gradient-to-br from-slate-50/80 to-slate-100/50 p-4 backdrop-blur-sm group-hover:border-slate-300/60 transition-all">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-600 transition-colors">
            {t.service}
          </p>
          <p className="mt-2 font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
            {getTranslatedOption(t.services, request.service)}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/40 bg-gradient-to-br from-slate-50/80 to-slate-100/50 p-4 backdrop-blur-sm group-hover:border-slate-300/60 transition-all">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-600 transition-colors">
            {t.appointmentDate}
          </p>
          <p className="mt-2 font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
            {formatDate(request.appointmentDate, language)}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/40 bg-gradient-to-br from-slate-50/80 to-slate-100/50 p-4 backdrop-blur-sm group-hover:border-slate-300/60 transition-all">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-600 transition-colors">
            {t.created}
          </p>
          <p className="mt-2 font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
            {new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(request.createdAt))}
          </p>
        </div>
      </div>

      {request.notes && (
        <p className="mt-4 rounded-2xl border border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-white px-4 py-3 text-sm leading-6 text-slate-600 backdrop-blur-sm group-hover:border-slate-300/60 transition-all">
          {request.notes}
        </p>
      )}
    </article>
  )
}

export default RequestCard

/* Add smooth transitions for request cards */
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes card-glow {
      0%, 100% { box-shadow: 0 0 0 rgba(0, 0, 0, 0); }
      50% { box-shadow: 0 0 8px rgba(13, 148, 136, 0.05); }
    }
  `
  if (!document.head.querySelector('style[data-card-animation]')) {
    style.setAttribute('data-card-animation', 'true')
    document.head.appendChild(style)
  }
}
