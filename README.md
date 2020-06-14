# Deno Example

```js
"node".split("").sort().join("");
```

## Server

* simple server: `deno run --allow-net server/simpleServer.ts`
* REST API: `deno run --allow-net server/rest_api/main.ts`

## Deno API
<!-- deno_api -->
* [file/write]: `deno run --allow-write deno_api/file/writeFile.ts`
* [file/read]: `deno run --allow-read deno_api/file/readFile.ts`
* [file/cat]: `deno run --allow-read deno_api/file/cat.ts ./LICENSE`
* [unstable/import_maps]: `deno run --unstable --allow-net --importmap=deno_api/unstable/import_map.json deno_api/unstable/importMaps.ts`
* [performance]: `deno run deno_api/performance.ts`
* [subprocess]

  ```bash
  # 1. list directory contents
  deno run --allow-run ./deno_api/subprocess.ts ls
  # 2. 🟢 success
  deno run --allow-run ./deno_api/subprocess.ts deno -h
  # 3. 🔴 fail
  # error: Found argument 'xx' which wasn't expected, or isn't valid in this context
  deno run --allow-run ./deno_api/subprocess.ts deno xx
  ```

## ERROR

```bash
# oak download error
error: error sending request for url (https://raw.githubusercontent.com/pillarjs/path-to-regexp/v6.1.0/src/index.ts): error trying to connect: tcp connect error: Connection refused (os error 61)

# DNS Settings:
# `114.114.114.114` or `8.8.8.8`
```

## Reference

* [1](https://dev.to/lampewebdev/writing-webassembly-in-rust-and-runing-it-in-deno-144j)
