import { useEffect, useState } from 'react'
import {
  INITIAL_REQUEST_FORM,
  SERVICE_OPTIONS,
  STATUS_OPTIONS,
} from '../interfaces/requestModel'
import { getTranslatedOption } from '../utils/translations'

function RequestForm({ editingRequest, onCancelEdit, onSubmitRequest, t }) {
  const [formData, setFormData] = useState(INITIAL_REQUEST_FORM)
  const [error, setError] = useState('')

  useEffect(() => {
    if (editingRequest) {
      setFormData({
        fullName: editingRequest.fullName,
        phone: editingRequest.phone,
        country: editingRequest.country,
        service: editingRequest.service,
        appointmentDate: editingRequest.appointmentDate,
        status: editingRequest.status,
        notes: editingRequest.notes,
      })
      setError('')
    }
  }, [editingRequest])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  const resetForm = () => {
    setFormData(INITIAL_REQUEST_FORM)
    setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const requiredFields = [
      'fullName',
      'phone',
      'country',
      'service',
      'appointmentDate',
      'status',
    ]
    const hasMissingField = requiredFields.some((field) => !formData[field].trim())

    if (hasMissingField) {
      setError(t.validationError)
      return
    }

    onSubmitRequest(formData)
    resetForm()
  }

  const handleCancel = () => {
    resetForm()
    onCancelEdit()
  }

  return (
    <section
      id="new-request"
      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-6 lg:p-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
            {t.formEyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            {editingRequest ? t.formEditTitle : t.formAddTitle}
          </h2>
        </div>
        {editingRequest && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            {t.editing} {editingRequest.fullName}
          </span>
        )}
      </div>

      {error && (
        <p className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 grid gap-5 lg:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {t.fullName} *
          <input
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="fullName"
            onChange={handleChange}
            placeholder="Sara Ahmed"
            value={formData.fullName}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {t.phone} *
          <input
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="phone"
            onChange={handleChange}
            placeholder="+90 555 000 00 00"
            value={formData.phone}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {t.country} *
          <input
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="country"
            onChange={handleChange}
            placeholder="Tunisia"
            value={formData.country}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {t.appointmentDate} *
          <input
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="appointmentDate"
            onChange={handleChange}
            type="date"
            value={formData.appointmentDate}
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {t.service} *
          <select
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="service"
            onChange={handleChange}
            value={formData.service}
          >
            <option value="">{t.selectService}</option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {getTranslatedOption(t.services, service)}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          {t.status} *
          <select
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="status"
            onChange={handleChange}
            value={formData.status}
          >
            <option value="">{t.selectStatus}</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {getTranslatedOption(t.statuses, status)}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700 lg:col-span-2">
          {t.notes}
          <textarea
            className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
            name="notes"
            onChange={handleChange}
            placeholder={t.notesPlaceholder}
            value={formData.notes}
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-2">
          <button
            className="rounded-full bg-teal-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal-600/20 transition hover:-translate-y-0.5 hover:bg-teal-700"
            type="submit"
          >
            {editingRequest ? t.saveUpdate : t.addRequest}
          </button>
          {editingRequest && (
            <button
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              onClick={handleCancel}
              type="button"
            >
              {t.cancelEdit}
            </button>
          )}
        </div>
      </form>
    </section>
  )
}

export default RequestForm
