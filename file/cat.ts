/**
 * @author: lencx
 * @create_at: Jun 10, 2020
 */

// `Deno.args` are the arguments
for (let i = 0; i < Deno.args.length; i++) {
  const filename = Deno.args[i];

  // open the file
  const file = await Deno.open(filename);

  // copies the file from the source to the destination i.e. the standard output
  await Deno.copy(file, Deno.stdout);
  file.close();
}
