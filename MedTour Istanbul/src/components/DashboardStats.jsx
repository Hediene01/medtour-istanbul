const statsConfig = [
  { key: 'total', accent: 'bg-blue-500' },
  { key: 'pending', accent: 'bg-amber-500' },
  { key: 'confirmed', accent: 'bg-teal-500' },
  { key: 'completed', accent: 'bg-emerald-500' },
  { key: 'cancelled', accent: 'bg-rose-500' },
]

function DashboardStats({ requests, t }) {
  const stats = {
    total: requests.length,
    pending: requests.filter((request) => request.status === 'Pending').length,
    confirmed: requests.filter((request) => request.status === 'Confirmed').length,
    completed: requests.filter((request) => request.status === 'Completed').length,
    cancelled: requests.filter((request) => request.status === 'Cancelled').length,
  }

  return (
    <section id="insights" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {statsConfig.map((stat) => (
        <article
          key={stat.key}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80"
        >
          <div className={`h-2 w-12 rounded-full ${stat.accent}`} />
          <p className="mt-5 text-sm font-semibold text-slate-500">
            {t.stats[stat.key]}
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-950">
            {stats[stat.key]}
          </p>
        </article>
      ))}
    </section>
  )
}

export default DashboardStats
