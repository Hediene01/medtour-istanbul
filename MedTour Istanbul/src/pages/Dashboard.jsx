import { useEffect, useMemo, useState } from 'react'
import DashboardStats from '../components/DashboardStats'
import FilterBar from '../components/FilterBar'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import RequestForm from '../components/RequestForm'
import RequestList from '../components/RequestList'
import SearchBar from '../components/SearchBar'
import { loadRequests, saveRequests } from '../utils/localStorage'
import { translations } from '../utils/translations'

const createId = () => {
  if (crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return `request-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function Dashboard() {
  const [requests, setRequests] = useState(() => loadRequests())
  const [editingRequest, setEditingRequest] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({ status: '', service: '' })
  const [language, setLanguage] = useState(
    () => localStorage.getItem('medtour-istanbul-language') || 'en',
  )
  const t = translations[language]

  useEffect(() => {
    saveRequests(requests)
  }, [requests])

  useEffect(() => {
    localStorage.setItem('medtour-istanbul-language', language)
    document.documentElement.lang = language
  }, [language])

  const filteredRequests = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return requests.filter((request) => {
      const matchesSearch =
        !normalizedSearch ||
        request.fullName.toLowerCase().includes(normalizedSearch) ||
        request.country.toLowerCase().includes(normalizedSearch) ||
        request.phone.toLowerCase().includes(normalizedSearch)

      const matchesStatus = !filters.status || request.status === filters.status
      const matchesService = !filters.service || request.service === filters.service

      return matchesSearch && matchesStatus && matchesService
    })
  }, [filters, requests, searchTerm])

  const handleSubmitRequest = (formData) => {
    if (editingRequest) {
      setRequests((currentRequests) =>
        currentRequests.map((request) =>
          request.id === editingRequest.id
            ? { ...editingRequest, ...formData }
            : request,
        ),
      )
      setEditingRequest(null)
      return
    }

    const newRequest = {
      id: createId(),
      ...formData,
      createdAt: new Date().toISOString(),
    }

    setRequests((currentRequests) => [newRequest, ...currentRequests])
  }

  const handleEditRequest = (request) => {
    setEditingRequest(request)
    document.getElementById('new-request')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDeleteRequest = (requestId) => {
    setRequests((currentRequests) =>
      currentRequests.filter((request) => request.id !== requestId),
    )

    if (editingRequest?.id === requestId) {
      setEditingRequest(null)
    }
  }

  const handleFilterChange = (filterName, value) => {
    setFilters((currentFilters) => ({ ...currentFilters, [filterName]: value }))
  }

  return (
    <div id="dashboard" className="min-h-screen bg-slate-50">
      <Navbar language={language} onLanguageChange={setLanguage} t={t} />
      <Hero t={t} />

      <main className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-6 lg:px-8">
        <DashboardStats requests={requests} t={t} />

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <RequestForm
            editingRequest={editingRequest}
            onCancelEdit={() => setEditingRequest(null)}
            onSubmitRequest={handleSubmitRequest}
            t={t}
          />

          <section id="requests" className="grid gap-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
                    {t.pipelineEyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {t.patientRequests}
                  </h2>
                </div>
                <p className="text-sm font-semibold text-slate-500">
                  {t.showing} {filteredRequests.length} {t.of} {requests.length}
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                <SearchBar
                  onSearchChange={setSearchTerm}
                  searchTerm={searchTerm}
                  t={t}
                />
                <FilterBar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onResetFilters={() => {
                    setFilters({ status: '', service: '' })
                    setSearchTerm('')
                  }}
                  t={t}
                />
              </div>
            </div>

            <RequestList
              language={language}
              onDeleteRequest={handleDeleteRequest}
              onEditRequest={handleEditRequest}
              requests={filteredRequests}
              t={t}
            />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
