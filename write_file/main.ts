const encooder = new TextEncoder();

const greetText = encooder.encode(`Hello World\nMy name is Len`);

await Deno.writeFile('./write_file/greet.txt', greetText);

// run
// deno run --allow-write write_file/main.ts