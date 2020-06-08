import { Application } from './deps.ts';
import router from './routes.ts';

const port = 5000;

console.log("http://localhost:5000");

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });