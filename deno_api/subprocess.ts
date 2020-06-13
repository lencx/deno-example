/**
 * @author: lencx
 * @create_at: Jun 13, 2020
 */

const args = Deno.args;

const p = Deno.run({
  cmd: args,
  stdout: 'piped',
  stderr: 'piped',
})

const { code } = await p.status();

if (code === 0) {
  const output = await p.output();
  await Deno.stdout.write(output);
} else {
  const err = await p.stderrOutput();
  const errMsg = new TextDecoder().decode(err);
  console.error(errMsg);
}

Deno.exit(code);

// Test:
// deno run --allow-run ./deno_api/subprocess.ts ls
// deno run --allow-run ./deno_api/subprocess.ts deno -h
// deno run --allow-run ./deno_api/subprocess.ts deno xx