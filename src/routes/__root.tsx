import { Outlet, createRootRoute, useParams } from '@tanstack/react-router'
import { Sidebar } from '../components/side-bar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='grid grid-cols-[250px_1fr]'>
      <Sidebar />
      <Outlet />
    </div>
  )
}
