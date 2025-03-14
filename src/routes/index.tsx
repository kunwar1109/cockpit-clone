import * as React from 'react'
import { Navigate, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    throw redirect({
      to: '/reported-sessions/all'
    })
  },
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className="p-2 text-red-500">
      <h3>Welcome Home!</h3>
    </div>
  )
}
