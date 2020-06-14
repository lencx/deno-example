/**
 * @author: lencx
 * @create_at: Jun 14, 2020
 */

const start = performance.now();

// Do some JS stuff...
const num = 999999999;
let total = 0;
for (let i = 0; i < num; i++) {
  total += i;
}
console.log(`[1-${num}] sum:`, total);

console.log(`duration: ${performance.now() - start}ms`);