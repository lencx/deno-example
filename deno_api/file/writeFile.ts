/**
 * @author: lencx
 * @create_at: Jun 07, 2020
 */

const encooder = new TextEncoder();

const greetText = encooder.encode(`update_time: ${new Date()}\n\nHello World\nMy name is Len`);

await Deno.writeFile('./gen/greet.txt', greetText);