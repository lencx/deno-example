/**
 * @author: lencx
 * @create_at: Jun 15, 2020
 * @cmd: deno run api/denoAPI.ts
 */

Deno.stdout.write(new TextEncoder().encode(`${Object.getOwnPropertyNames(globalThis).join('\n')}\n`));