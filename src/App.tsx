import './App.css'
import { Card } from './components/Card'

import Header, { type Category } from './components/Header'
import { useState } from 'react'
import { shirts } from './utils/models'


function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos')


  const filteredShirts = selectedCategory === 'todos' 
    ? shirts 
    : shirts.filter(item => item.category === selectedCategory)

  return (
    <div className='bg-[#f5f5f5]'>
      <Header 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-6'>
        {filteredShirts.map((item, index) => (
          <Card 
            key={index}
            models={item.model} 
            products={item.products} 
            title={item.title} 
          />
        ))}
      </div>
    </div>
  )
}

export default App