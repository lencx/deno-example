# Running example

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
