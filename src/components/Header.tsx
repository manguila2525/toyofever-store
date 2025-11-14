import { ChevronDownIcon,  PhoneIcon, MenuIcon, ShoppingCart, Shirt } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/Logo/toyofever.png'
import { Link } from 'react-router'

export type Category = 'todos' | 'autana' | 'prado' | 'fj' | 'fj40' | 'machito'

const products = [
  { name: 'Todos los Modelos 🔥', description: 'Ver todas las Camisas / Franelas disponibles', href: '#', icon: Shirt, category: 'todos' as Category },
  { name: 'Modelos de Autana', description: 'Modelos desde la talla S hasta 2XL', href: '#', icon: Shirt, category: 'autana' as Category },
  { name: 'Modelos de Prado', description: 'Modelos desde la talla S hasta 2XL', href: '#', icon: Shirt, category: 'prado' as Category },
  { name: 'Modelos de FJ', description: 'Modelos desde la talla S hasta 2XL', href: '#', icon: Shirt, category: 'fj' as Category },
  { name: 'Modelos de FJ40', description: 'Modelos desde la talla S hasta 2XL', href: '#', icon: Shirt, category: 'fj40' as Category },
  { name: 'Modelos de Machito', description: 'Modelos desde la talla S hasta 2XL', href: '#', icon: Shirt, category: 'machito' as Category },
]

const callsToAction = [
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

interface HeaderProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
   searchTerm?: string;
  onSearchChange?: (term: string) => void;
}

export default function Header({ onCategoryChange, searchTerm, onSearchChange }: HeaderProps) {
  const [, setMobileMenuOpen] = useState(false)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)

  const handleCategoryClick = (category: Category) => {
    onCategoryChange(category)
    setDesktopMenuOpen(false)
  }

  return (
    <header className='fixed w-full bg-white z-100'>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={logo}
              className="h-18 w-auto"
            />
          </Link>
          <div className="flex-1 max-w-md mx-4">
  <input
    type="text"
    placeholder="Buscar productos..."
    value={searchTerm}
    onChange={(e) => onSearchChange?.(e.target.value)}
    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
              className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
            >
              Categorías
              <ChevronDownIcon 
                aria-hidden="true" 
                className={`size-5 flex-none text-gray-400 transition-transform duration-200 ${
                  desktopMenuOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {desktopMenuOpen && (
              <div
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-200 ease-out"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      onClick={() => handleCategoryClick(item.category)}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <div className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </div>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={() => onCategoryChange('todos')}
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
          >
            Nuevo
          </button>
          <button 
            onClick={() => onCategoryChange('todos')}
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700"
          >
            SALE
          </button>
          <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700">
            Quienes somos?
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700">
            <span aria-hidden="true"> <ShoppingCart /></span>
          </a>
        </div>
      </nav>

    </header>
  )
}