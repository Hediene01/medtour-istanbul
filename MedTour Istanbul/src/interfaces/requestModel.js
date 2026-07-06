export const SERVICE_OPTIONS = [
  'Dental Treatment',
  'Hair Transplant',
  'Plastic Surgery',
  'Eye Surgery',
  'Medical Checkup',
  'Dermatology',
  'Physiotherapy',
]

export const STATUS_OPTIONS = [
  'Pending',
  'Confirmed',
  'In Treatment',
  'Completed',
  'Cancelled',
]

export const INITIAL_REQUEST_FORM = {
  fullName: '',
  phone: '',
  country: '',
  service: '',
  appointmentDate: '',
  status: '',
  notes: '',
}

export const SAMPLE_REQUESTS = [
  {
    id: 'sample-1',
    fullName: 'Sara Ahmed',
    phone: '+216 22 458 901',
    country: 'Tunisia',
    service: 'Dental Treatment',
    appointmentDate: '2026-07-15',
    status: 'Pending',
    notes: 'Interested in veneers and a full smile design consultation.',
    createdAt: '2026-07-01T09:30:00.000Z',
  },
  {
    id: 'sample-2',
    fullName: 'Mohamed Ali',
    phone: '+213 555 784 210',
    country: 'Algeria',
    service: 'Hair Transplant',
    appointmentDate: '2026-07-18',
    status: 'Confirmed',
    notes: 'Flight details received. Airport transfer requested.',
    createdAt: '2026-07-02T13:45:00.000Z',
  },
  {
    id: 'sample-3',
    fullName: 'Lina Hassan',
    phone: '+212 661 320 118',
    country: 'Morocco',
    service: 'Eye Surgery',
    appointmentDate: '2026-07-21',
    status: 'Completed',
    notes: 'Post-treatment follow-up completed remotely.',
    createdAt: '2026-07-03T11:10:00.000Z',
  },
]
