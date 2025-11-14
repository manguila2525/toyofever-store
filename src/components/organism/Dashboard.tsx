import { useState } from "react"
import { shirts } from "../../utils/models"
import { Card } from "../Card"
import type { Category } from "../Header"
import videoClip from '../../../public/assets/toyofeverRevelacion.mp4'
import logo from '../../../public/assets/Logo/toyofever.png'
export const Dashboard = () => {
  const [selectedCategory] = useState<Category>('todos')
  const [searchTerm] = useState('')
      const displayData = shirts

      const filteredShirts = displayData.filter(item => {
        const matchesCategory = selectedCategory === 'todos' || item.category === selectedCategory
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.model.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
      })
    
  return (
    <>
    
      {/* Hero Section */}
<section className="relative  overflow-hidden">

  {/* Overlay para mejor contraste */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  
  {/* Contenido */}
  <div className="relative z-10 h-full flex flex-col justify-center text-white py-16 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 mt-40">
        Descubre tu nuevo estilo
      </h1>
      <div className='w-full flex justify-center mb-5'>
           <img
              alt=""
              src={logo}
              className="h-40 w-auto bg-[#ffffffb8] rounded px-4"
            />
      </div>
      <p className="text-xl md:text-2xl opacity-90 mb-8">
        Colección Revelacion
      </p>
     <div className="flex justify-center mt-8">
  <div className="animate-bounce">
    <svg 
      className="w-8 h-8 text-white cursor-pointer" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
      />
    </svg>
  </div>
</div>
    </div>
  </div>
  <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={videoClip} type="video/mp4" />

  <source src={videoClip.replace('.mp4', '.webm')} type="video/webm" />
  Tu navegador no soporta videos HTML5.
</video>
</section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header de productos */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'todos' ? 'Todos los productos' : selectedCategory}
              </h2>
              <p className="text-gray-600 mt-2">
                Mostrando {filteredShirts.length} de {displayData.length} productos
              </p>
            </div>
          </div>

          {filteredShirts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
              <p className="text-gray-600">Intenta con otros filtros o términos de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-6">
              {filteredShirts.map((item, index) => (
                <Card 
                  key={index}
                  models={item.model} 
                  products={item.products} 
                  title={item.title}
                  price={item.price}
                  id={item.id ?? 0}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
    

  )
}
