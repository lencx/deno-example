/**
 * @author: lencx
 * @create_at: Jun 14, 2020
 * @cmd: deno run --unstable --allow-net --importmap=config/import_map.json api/unstable/importMaps.ts
 */

import { serve } from 'std/http/server.ts';

const port = 8000;

console.log(`http://localhost:${port}`);

for await (const req of serve({ port })) {
  req.respond({ body: 'Hello World\n' });
}
