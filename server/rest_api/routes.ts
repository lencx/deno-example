/**
 * @author: lencx
 * @create_at: Jun 09, 2020
 */

import { Router } from './deps.ts';
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from './controllers/products.ts';

const router = new Router();

// http://localhost:5000/api/v1/user
router
  .get('/api/v1/user', ({ response }) => {
    response.body = 'hello, lencx';
  })
  .get('/api/v1/products', getProducts)
  .get('/api/v1/products/:id', getProduct)
  .post('/api/v1/products', addProduct)
  .put('/api/v1/products/:id', updateProduct)
  .delete('/api/v1/products/:id', deleteProduct)

export default router;