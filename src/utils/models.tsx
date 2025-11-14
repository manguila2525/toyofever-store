
 import camisa1 from '../assets/machito/Machito-LC/Machito-LC-salmon/4500Salmon.png'
 import camisa2 from '../assets/machito/Machito-LC/Machito-LC-salmon/4500camisa.jpeg'
 import camisa3 from '../assets/machito/Machito-LC/Machito-LC-azul/machitoazul.jpeg'
 import camisa4 from '../assets/machito/Machito-LC/Machito-LC-azul/machitoazul1.jpeg'
 import camisa5 from '../assets/fj/Fj-CC/Marron/fjMarron.jpeg'
 import camisa6 from '../assets/fj/Fj-CC/Marron/fjMarron02.jpeg'
 import camisa7 from '../assets/Prado/Prado-CC/azul/pradoAzul.jpeg'
 import camisa8 from '../assets/Prado/Prado-CC/azul/pradoAzul01.jpeg'
 import camisa9 from '../assets/Autana/Autana-CC/Azul/AutanaAzul.jpeg'
 import shirtFj40 from '../assets/Fj40/Fj40-CC/Crudo/fj40.png'
 import shirtFj40Front from '../assets/Fj40/Fj40-CC/Crudo/IMG_6385.png'
 import shirtFj40FrontBlack from '../assets/Fj40/Fj40-CC/Negro/IMG_6386.png'
 import shirtFjFrontSilver from '../assets/FJCruiser/FJCruiser-LC/Gris/IMG_6381.PNG'
 import shirtFjBackSilver from '../assets/FJCruiser/FJCruiser-LC/Gris/IMG_6382.PNG'



import type { Category } from '../components/Header'
 export const shirts = [
    {
      model: 'Machito-01',
      title: 'Camisa Machito',
      category: 'machito' as Category, 
      products: [{
        id: '1',
        color: 'azul',
        pictures: [camisa3, camisa4],
        sizes: ['S', 'L'],
      },
      {
        id: '2',
        color: 'rosa',
        pictures: [camisa1, camisa2],
        sizes: ['S', 'M', 'L'],
      }]
    },
    {
      model: 'Fj-01',
      title: 'Camisa Fj',
      category: 'fj' as Category, 
      products: [{
        id: '3',
        color: 'marron',
        pictures: [camisa5, camisa6],
        sizes: ['S', 'L'],
      }]
    },
    {
      model: 'Prado-01',
      title: 'Camisa Prado',
      category: 'prado' as Category, 
      products: [{
        id: '4',
        color: 'azul',
        pictures: [camisa7, camisa8],
        sizes: ['S', 'M', 'L', 'XL'],
      }]
    },
    {
      model: 'Autana-01',
      title: 'Camisa Autana',
      category: 'autana' as Category, 
      products: [{
        id: '5',
        color: 'azul',
        pictures: [camisa9],
        sizes: ['S', 'M', 'L'],
      }]
    },
    {
      model: 'FJ40-01',
      title: 'Camisa FJ40',
      category: 'fj40' as Category, 
      products: [{
        id: '6',
        color: 'beige',
        pictures: [shirtFj40, shirtFj40Front],
        sizes: ['S', 'M', 'L'],
      },
    {
        id: '6',
        color: 'negro',
        pictures: [shirtFj40FrontBlack],
        sizes: ['S', 'M', 'L'],
      }]
    },
       {
      model: 'FJ-02',
      title: 'Camisa FJ',
      category: 'fj' as Category, 
      products: [{
        id: '7',
        color: 'gris',
        pictures: [shirtFjFrontSilver, shirtFjBackSilver],
        sizes: ['S', 'M', 'L'],
      }]
    }
  ]