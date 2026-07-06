import { SAMPLE_REQUESTS } from '../interfaces/requestModel'

const STORAGE_KEY = 'medtour-istanbul-requests'

export function loadRequests() {
  try {
    const savedRequests = localStorage.getItem(STORAGE_KEY)

    if (!savedRequests) {
      saveRequests(SAMPLE_REQUESTS)
      return SAMPLE_REQUESTS
    }

    const parsedRequests = JSON.parse(savedRequests)
    return Array.isArray(parsedRequests) ? parsedRequests : SAMPLE_REQUESTS
  } catch (error) {
    console.error('Unable to load requests from LocalStorage:', error)
    return SAMPLE_REQUESTS
  }
}

export function saveRequests(requests) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests))
  } catch (error) {
    console.error('Unable to save requests to LocalStorage:', error)
  }
}
