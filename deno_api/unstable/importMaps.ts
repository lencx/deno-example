import { serve } from 'std/http/server.ts';

const port = 8000;

console.log(`http://localhost:${port}`);

for await (const req of serve({ port })) {
  req.respond({ body: 'Hello World\n' });
}
