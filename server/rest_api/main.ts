/**
 * @author: lencx
 * @create_at: Jun 09, 2020
 * @cmd: deno run --allow-net server/rest_api/main.ts
 */

import { Application } from './deps.ts';
import router from './routes.ts';

const port = 5000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https' : 'http';
  const url = `${protocol}://${hostname ?? 'localhost'}:${port}`;
  console.log(`🚀 ${url}`);
})

await app.listen({ port });