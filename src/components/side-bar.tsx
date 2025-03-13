import { Link } from "@tanstack/react-router"

export const Sidebar = () => {
  return <nav className="p-2 flex flex-col w-full gap-2 text-lg h-screen border-r border-slate-500">
    <Link
      to="/"
      activeProps={{
        className: 'font-bold',
      }}
      activeOptions={{ exact: true }}
    >
      Home
    </Link>{' '}
    <Link
      to="/about"
      activeProps={{
        className: 'font-bold',
      }}
    >
      About
    </Link>
  </nav>
}