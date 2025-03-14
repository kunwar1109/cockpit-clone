import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/invoices/all')({
  component: AllInvoices,
})

function AllInvoices() {
  return <div>Hello "/invoices/all"!</div>
}
