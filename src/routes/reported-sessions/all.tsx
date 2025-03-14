import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/reported-sessions/all')({
  component: AllReportedSessions,
})

function AllReportedSessions() {
  return <div>Hello "/reported-sessions/all"!</div>
}
