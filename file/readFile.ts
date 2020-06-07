const file = await Deno.open('./file/greet.txt');

await Deno.copy(file, Deno.stdout);

file.close();