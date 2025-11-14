import { useParams } from 'react-router'
import { shirts } from '../../utils/models'
import { useState } from 'react'

export const Detail = () => {
    const { id } = useParams()
    const shirt = shirts.find(item => item.id === parseInt(id || ''))
    const [selectedColor, setSelectedColor] = useState(shirt?.products[0]?.color || '')
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedImage, setSelectedImage] = useState(0)

    if (!shirt) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Producto no encontrado</h2>
                    <p className="text-gray-600 mt-2">El producto que buscas no existe.</p>
                </div>
            </div>
        )
    }

    const currentProduct = shirt.products.find(product => product.color === selectedColor)
    const images = currentProduct?.pictures || []

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Breadcrumb */}
            <nav className="flex mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                    <li>Inicio</li>
                    <li className="before:content-['/'] before:mx-2">Productos</li>
                    <li className="before:content-['/'] before:mx-2 font-medium text-gray-900">{shirt.title}</li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Galería de imágenes */}
                <div className="space-y-4">
                    {/* Imagen principal */}
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <img
                            src={images[selectedImage]}
                            alt={`${shirt.title} - ${selectedColor}`}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    
                    {/* Miniaturas */}
                    {images.length > 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                                        selectedImage === index ? 'ring-2 ring-blue-500' : ''
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${shirt.title} - ${selectedColor} - ${index + 1}`}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Información del producto */}
                <div className="space-y-6">
                    {/* Título y precio */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{shirt.title}</h1>
                        <p className="text-2xl font-bold text-blue-600 mt-2">${shirt.price}</p>
                        <p className="text-sm text-gray-500 mt-1">Modelo: {shirt.model}</p>
                    </div>

                    {/* Selector de color */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">Color</h3>
                        <div className="flex space-x-2 mt-2">
                            {shirt.products.map((product) => (
                                <button
                                    key={product.id}
                                    onClick={() => {
                                        setSelectedColor(product.color)
                                        setSelectedImage(0)
                                        setSelectedSize('')
                                    }}
                                    className={`w-10 h-10 rounded-full border-2 ${
                                        selectedColor === product.color
                                            ? 'border-blue-500'
                                            : 'border-gray-300'
                                    }`}
                                    style={{ backgroundColor: getColorHex(product.color) }}
                                    title={product.color}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Color seleccionado: {selectedColor}</p>
                    </div>

                    {/* Selector de talla */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-900">Talla</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {currentProduct?.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                                        selectedSize === size
                                            ? 'bg-blue-600 text-white border-blue-600'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex space-x-4">
                        <button
                            disabled={!selectedSize}
                            className="flex-1 bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            Agregar al carrito
                        </button>
                        <button className="px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50">
                            ❤️
                        </button>
                    </div>

                    {/* Información adicional */}
                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-medium text-gray-900">Descripción</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Camisa {shirt.model} de la categoría {shirt.category}. 
                            Disponible en {shirt.products.length} colores diferentes.
                        </p>
                    </div>

                    {/* Especificaciones */}
                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-medium text-gray-900">Especificaciones</h3>
                        <dl className="mt-2 grid grid-cols-1 gap-2 text-sm">
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Categoría</dt>
                                <dd className="text-gray-900 capitalize">{shirt.category}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Modelo</dt>
                                <dd className="text-gray-900">{shirt.model}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-gray-500">Colores disponibles</dt>
                                <dd className="text-gray-900">{shirt.products.length}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Función auxiliar para obtener el color hexadecimal (puedes expandir esto)
function getColorHex(colorName: string): string {
    const colorMap: { [key: string]: string } = {
        'azul': '#3b82f6',
        'rosa': '#ec4899',
        'rojo': '#ef4444',
        'verde': '#10b981',
        'amarillo': '#f59e0b',
        'negro': '#000000',
        'blanco': '#ffffff',
        'gris': '#6b7280',
    }
    
    return colorMap[colorName.toLowerCase()] || '#6b7280'
}