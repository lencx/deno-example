/**
 * @author: lencx
 * @create_at: Jun 24, 2020
 * @cmd: deno run --allow-net server/gql_api/main.ts
 */

import { Application, applyGraphQL } from './deps.ts';
import { gqlTypes } from './gql_types.ts';
import { gqlResolvers } from './gql_resolvers.ts';

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

const GraphQLService = await applyGraphQL({
  path: '/gql',
  typeDefs: gqlTypes,
  resolvers: gqlResolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https' : 'http';
  const url = `${protocol}://${hostname ?? 'localhost'}:${port}`;
  console.log(`🚀 ${url}`);
});

await app.listen({ port: 8080 });
