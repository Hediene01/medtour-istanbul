function EmptyState({ t }) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-teal-50 text-2xl text-teal-700">
        +
      </div>
      <h3 className="mt-5 text-xl font-bold text-slate-950">
        {t.noRequestsTitle}
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        {t.noRequestsText}
      </p>
    </div>
  )
}

export default EmptyState
