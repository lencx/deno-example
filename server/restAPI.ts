import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 5000;

console.log("http://localhost:5000");

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

// http://localhost:5000/api/v1/user
router
  .get('/api/v1/user', ({ response }) => {
    response.body = 'hello, lencx';
  })


await app.listen({ port });