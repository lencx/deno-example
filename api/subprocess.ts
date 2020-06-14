/**
 * @author: lencx
 * @create_at: Jun 13, 2020
 * @cmd: deno run --allow-run api/subprocess.ts [command]
 */

const args = Deno.args;
const encode = (str: string) => new TextEncoder().encode(str);
const print = (output: Uint8Array) => Deno.stdout.write(output);

let p;

try {
  p = Deno.run({
    cmd: args,
    stdout: 'piped',
    stderr: 'piped',
  })
} catch (e) {
  const errMsg = encode(`command not found: ${args[0]}\n`);
  await print(errMsg);
  Deno.exit();
}

const { code } = await p.status();

if (code === 0) {
  const output = await p.output();
  await print(output);
} else {
  const err = await p.stderrOutput();
  await print(err);
}

Deno.exit(code);

// Test:
// deno run --allow-run ./deno_api/subprocess.ts ls
// deno run --allow-run ./deno_api/subprocess.ts deno -h
// deno run --allow-run ./deno_api/subprocess.ts deno xx