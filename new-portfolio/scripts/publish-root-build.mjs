import { cp, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..', '..')
const buildDir = resolve(projectRoot, '.react-build')

const copy = (from, to) => cp(resolve(buildDir, from), resolve(projectRoot, to), {
  recursive: true,
  force: true,
})

await rm(resolve(projectRoot, 'assets'), { recursive: true, force: true })

await copy('index.html', 'index.html')
await copy('assets', 'assets')
await copy('images', 'images')
await copy('favicon.svg', 'favicon.svg')
await copy('icons.svg', 'icons.svg')

await rm(buildDir, { recursive: true, force: true })
