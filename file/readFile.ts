/**
 * @author: lencx
 * @create_at: Jun 07, 2020
 */

const file = await Deno.open('./file/greet.txt');

await Deno.copy(file, Deno.stdout);

file.close();