/**
 * @author: lencx
 * @create_at: Jun 09, 2020
 * @cmd: deno run --allow-net server/rest_api/main.ts
 */

import { Application } from './deps.ts';
import router from './routes.ts';

const port = 5000;

console.log(`http://localhost:${port}`);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port });