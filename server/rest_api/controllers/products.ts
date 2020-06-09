/**
 * @author: lencx
 * @create_at: Jun 09, 2020
 */

import { v4 } from '../deps.ts';
import { Product } from '../types.ts';
import { findProduct } from '../utils.ts';

const findProduct = (data: Product[], id: string): Product | undefined => data.find(p => p.id === id);

let products: Array<Product> = new Array(10).fill(0).map((_, i) => ({
  id: `${++i}`,
  name: `Product ${++i}`,
  description: `This is product ${++i}`,
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
const getProduct = ({ params, response }: { params: { id: string }, response: any }) => {
  // TODO:
  // response.body = 'product';
  const product = findProduct(products, params.id);

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    }
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: 'Product not found',
    }
  }
};

// @desc      Add product
// @route     POST /api/v1/products
const addProduct = async ({ request, response }: { request: any, response: any }) => {
  // TODO: Field legality
  // response.body = 'add';
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: 'No data',
    };
  } else {
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    }
  }
};

// @desc      Update product
// @route     PUT /api/v1/products/:id
const updateProduct = async ({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
  // TODO: Field legality
  // response.body = 'update';
  const product = findProduct(products, params.id);

  if (product) {
    const body = await request.body();
    const updateData: { name?: string; description?: string; price?: number } = body.value;
    products = products.map(p => p.id === params.id ? { ...p, ...updateData } : p);
    response.status = 200;
    response.body = {
      success: true,
      data: products,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: 'Product not found',
    }
  }
};

// @desc      Delete product
// @route     DELETE /api/v1/products/:id
const deleteProduct = ({ params, response }: { params: { id: string }, response: any }) => {
  // TODO:
  // response.body = 'delete';
  let hasProduct = false;
  products = products.filter(p => {
    if (p.id === params.id) hasProduct = true;
    return p.id !== params.id;
  });
  if (hasProduct) {
    response.status = 200;
    response.body = {
      success: true,
      msg: 'Product deleted',
    }
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: 'Product not found',
    }
  }
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };