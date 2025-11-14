// types/products.ts

export interface ProductSize {
  code: string;
  name: string;
  stock: number;
}

export interface ProductColor {
  id: string;
  color: string;
  colorName: string;
  colorHex?: string;
  sizes: string[]; 
  pictures: string[];
  price?: number;
  discount?: number;
}

export interface ProductModel {
  id: string;
  title: string;
  model: string;
  category: string;
  description?: string;
  features?: string[];
  basePrice?: number;
  products: ProductColor[];
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProductCatalog = ProductModel[];