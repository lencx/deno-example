const encooder = new TextEncoder();

const greetText = encooder.encode(`Hello World\nMy name is Len`);

await Deno.writeFile('./file/greet.txt', greetText);