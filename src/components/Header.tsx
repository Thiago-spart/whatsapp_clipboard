import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-4 flex items-center bg-gray-800 text-white shadow-lg">
      <h2 className="ml-4 text-lg font-semibold">
        <Link to="/">
          <span className="font-bold text-green-400 text-xl mr-1">
            WhatsApp
          </span>
          clipboard link generator
        </Link>
      </h2>
    </header>
  )
}
