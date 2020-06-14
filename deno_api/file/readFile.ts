/**
 * @author: lencx
 * @create_at: Jun 07, 2020
 */

const decoder = new TextDecoder("utf-8");

const file = await Deno.readFile('./gen/greet.txt');

const content = decoder.decode(file);

console.log(content);
