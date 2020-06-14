/**
 * @author: lencx
 * @create_at: Jun 07, 2020
 * @cmd: deno run --allow-write api/fs/write.ts
 */

const encooder = new TextEncoder();

const greetText = encooder.encode(`update_time: ${new Date()}\n\nHello World\nMy name is Len`);

await Deno.writeFile('./gen/greet.txt', greetText);