# Deno Example

```js
"node".split("").sort().join("");
```

## File

* write: `deno run --allow-write file/writeFile.ts`
* read: `deno run --allow-read file/readFile.ts`
* cat: `deno run --allow-read file/cat.ts ./file/cat.ts ./LICENSE`

## Server

* simple server: `deno run --allow-net server/simpleServer.ts`
* REST API: `deno run --allow-net server/rest_api/main.ts`

## ERROR

```bash
# oak download error
error: error sending request for url (https://raw.githubusercontent.com/pillarjs/path-to-regexp/v6.1.0/src/index.ts): error trying to connect: tcp connect error: Connection refused (os error 61)

# DNS Settings:
# `114.114.114.114` or `8.8.8.8`
```
