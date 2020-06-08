import { Router } from './deps.ts';
import { getProducts } from './controllers/products.ts';

const router = new Router();

// http://localhost:5000/api/v1/user
router
  .get('/api/v1/user', ({ response }) => {
    response.body = 'hello, lencx';
  })
  .get('/api/v1/products', getProducts);

export default router;