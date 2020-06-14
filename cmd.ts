/**
 * @author: lencx
 * @create_at: Jun 14, 2020
 * @cmd: deno run --allow-read cmd.ts
 */

import getFiles from 'https://raw.githubusercontent.com/lencx/deno-getfiles/master/mod.ts';
import clc from 'https://deno.land/x/color/index.ts';

const decoder = new TextDecoder();
const encoder = new TextEncoder();

const files = getFiles({
  dir: '.',
  include: ['api', 'server'],
});

for (const file of files) {
  const bytes = await Deno.readFile(file.path);
  const content = decoder.decode(bytes);
  content.split('\n').filter((line) => {
    const matchStr = ` \* @cmd: `;
    if (new RegExp(matchStr).test(line)) {
      const cmd = line.replace(matchStr, '');
      Deno.stdout.write(encoder.encode(`${clc.blue.text(file.path)}: ${clc.green.text(cmd)}\n`));
    }
  })
}

// TODO: cache cmd