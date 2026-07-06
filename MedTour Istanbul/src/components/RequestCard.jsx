import { getTranslatedOption } from '../utils/translations'

const statusStyles = {
  Pending: 'bg-amber-50 text-amber-700 ring-amber-200',
  Confirmed: 'bg-teal-50 text-teal-700 ring-teal-200',
  'In Treatment': 'bg-blue-50 text-blue-700 ring-blue-200',
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Cancelled: 'bg-rose-50 text-rose-700 ring-rose-200',
}

const formatDate = (dateString, language) =>
  new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${dateString}T00:00:00`))

function RequestCard({ language, request, onDeleteRequest, onEditRequest, t }) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-slate-200/80">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-bold text-slate-950">{request.fullName}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusStyles[request.status]}`}
            >
              {getTranslatedOption(t.statuses, request.status)}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {request.country} - {request.phone}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-100"
            onClick={() => onEditRequest(request)}
            type="button"
          >
            {t.edit}
          </button>
          <button
            className="rounded-full border border-rose-100 bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 transition hover:-translate-y-0.5 hover:bg-rose-100"
            onClick={() => onDeleteRequest(request.id)}
            type="button"
          >
            {t.delete}
          </button>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            {t.service}
          </p>
          <p className="mt-2 font-semibold text-slate-800">
            {getTranslatedOption(t.services, request.service)}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            {t.appointmentDate}
          </p>
          <p className="mt-2 font-semibold text-slate-800">
            {formatDate(request.appointmentDate, language)}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            {t.created}
          </p>
          <p className="mt-2 font-semibold text-slate-800">
            {new Intl.DateTimeFormat(language === 'tr' ? 'tr-TR' : 'en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(request.createdAt))}
          </p>
        </div>
      </div>

      {request.notes && (
        <p className="mt-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm leading-6 text-slate-600">
          {request.notes}
        </p>
      )}
    </article>
  )
}

export default RequestCard
