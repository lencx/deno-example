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

// @desc      Get single product
// @route     GET /api/v1/products/:id
const getProduct = ({ response }: any) => {
  // TODO:
  response.body = 'product';
};

// @desc      Add product
// @route     POST /api/v1/products
const addProduct = ({ response }: any) => {
  // TODO:
  response.body = 'add';
};

// @desc      Update product
// @route     PUT /api/v1/products/:id
const updateProduct = ({ response }: any) => {
  // TODO:
  response.body = 'update';
};

// @desc      Delete product
// @route     DELETE /api/v1/products/:id
const deleteProduct = ({ response }: any) => {
  // TODO:
  response.body = 'delete';
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };