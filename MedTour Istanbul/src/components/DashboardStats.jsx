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
          className="rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/50 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-300/50 hover:border-slate-300/80 group"
        >
          <div className={`h-2.5 w-14 rounded-full ${stat.accent} shadow-lg transition-all duration-300 group-hover:w-16`} />
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-600 transition-colors">
            {t.stats[stat.key]}
          </p>
          <p className="mt-3 text-3xl font-bold bg-gradient-to-r from-slate-950 to-slate-700 bg-clip-text text-transparent group-hover:from-slate-950 group-hover:to-slate-600 transition-all">
            {stats[stat.key]}
          </p>
        </article>
      ))}
    </section>
  )
}

export default DashboardStats

/* Add smooth transitions for stats cards */
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes stat-glow {
      0%, 100% { box-shadow: 0 0 0 rgba(0, 0, 0, 0); }
      50% { box-shadow: 0 0 12px rgba(13, 148, 136, 0.1); }
    }
  `
  if (!document.head.querySelector('style[data-stats-animation]')) {
    style.setAttribute('data-stats-animation', 'true')
    document.head.appendChild(style)
  }
}
