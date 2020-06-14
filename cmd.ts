/**
 * @author: lencx
 * @create_at: Jun 14, 2020
 * @cmd: deno run --allow-read cmd.ts [--update]
 */

import getFiles, { exists } from 'https://deno.land/x/getfiles/mod.ts';
import clc from 'https://deno.land/x/color/index.ts';

const decoder = new TextDecoder();
const encoder = new TextEncoder();
const args = Deno.args;
const FILE_NAME = './cmd.output';

try {
  // read cache file
  if (args[0] !== '--update') {
    const cmdFile = await Deno.open(FILE_NAME);
    await Deno.copy(cmdFile, Deno.stdout)
    Deno.exit();
  } else {
    // update: delete cmd file
    await exists(FILE_NAME) && Deno.remove(FILE_NAME);
  }
} catch (e) {}

const files = getFiles({
  dir: '.',
  include: ['api', 'server'],
});

for (const [index, file] of files.entries()) {
  const bytes = await Deno.readFile(file.path);
  const content = decoder.decode(bytes);
  content.split('\n').filter((line) => {
    const matchStr = ` \* @cmd: `;
    if (new RegExp(matchStr).test(line)) {
      const cmd = line.replace(matchStr, '');
      const fmtTxt = encoder.encode(`${clc.yellow.text(`[${`00${index+1}`.slice(1)}] ${file.path}`)}: ${clc.green.text(cmd)}\n`);
      Deno.stdout.write(fmtTxt);
      Deno.writeFile(FILE_NAME, fmtTxt, { append: true });
    }
  })
}
