import './App.css'
import Header, { type Category } from './components/Header'
import { useEffect, useState } from 'react'
import { db } from './firebase/config'
import { collection, getDocs } from 'firebase/firestore'

import { Outlet } from 'react-router'

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos')

  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const storeCollectionRef = collection(db, 'store')

  const getStore = async () => {
    try {
      setLoading(true)
      const data = await getDocs(storeCollectionRef)
      console.log(data)
    } catch (error) {
      console.error('Error fetching store data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className='min-h-[900px]'>
        <div className='pt-30'>
          <Outlet />
        </div>
      </div>

      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Únete a nuestra comunidad</h2>
          <p className="text-gray-300 mb-8">
            Recibe las últimas novedades y ofertas exclusivas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nuestra Tienda</h3>
            <p className="text-gray-400">
              Ofrecemos los mejores productos con calidad y estilo único para nuestros clientes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">Todos</button></li>
              <li><button className="hover:text-white transition-colors">Camisetas</button></li>
              <li><button className="hover:text-white transition-colors">Pantalones</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">Contacto</button></li>
              <li><button className="hover:text-white transition-colors">FAQ</button></li>
              <li><button className="hover:text-white transition-colors">Envíos</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button className="hover:text-white transition-colors">Términos</button></li>
              <li><button className="hover:text-white transition-colors">Privacidad</button></li>
              <li><button className="hover:text-white transition-colors">Cookies</button></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App