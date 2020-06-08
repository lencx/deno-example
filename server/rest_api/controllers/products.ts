import { Product } from '../types.ts';

let products: Array<Product> = new Array(10).fill(0).map((_, i) => ({
  id: i,
  name: `Product ${+i}`,
  description: `This is product ${+i}`,
  price: 10 + i * 0.5,
}));

// @desc      Get all products
// @route     GET /api/v1/products
const getProducts = ({ response }: any) => {
  response.body = {
    success: true,
    data: products,
  }
};

export { getProducts };