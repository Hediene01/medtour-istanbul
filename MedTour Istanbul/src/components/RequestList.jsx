import EmptyState from './EmptyState'
import RequestCard from './RequestCard'

function RequestList({ language, requests, onDeleteRequest, onEditRequest, t }) {
  if (requests.length === 0) {
    return <EmptyState t={t} />
  }

  return (
    <div className="grid gap-4">
      {requests.map((request) => (
        <RequestCard
          key={request.id}
          language={language}
          onDeleteRequest={onDeleteRequest}
          onEditRequest={onEditRequest}
          request={request}
          t={t}
        />
      ))}
    </div>
  )
}

export default RequestList
