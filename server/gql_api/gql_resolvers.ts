/**
 * @author: lencx
 * @create_at: Jun 24, 2020
 */

import { v4 } from './deps.ts';

interface ProductInfo {
  id: string;
  name: string;
  price: number;
  description?: string;
}

const products: Array<ProductInfo> = [
  { id: v4.generate(), name: 'product 1', price: 10, description: 'description 1' },
];

const existsProduct = (name: string): boolean => products.find((p: ProductInfo) => p.name === name) ? true : false;

export const gqlResolvers = {
  Query: {
    getProducts: () => {
      return products;
    },
  },
  Mutation: {
    addProducts: (_: any, { name, price, description }: any) => {
      const exists = existsProduct(name);
      if (!exists) {
        products.push({ id: v4.generate(), name, description, price });
        return { success: true };
      }
      return { success: false };
    }
  },
};
