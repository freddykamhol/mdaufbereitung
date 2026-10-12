import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const dist = resolve(root, 'dist')
const plesk = resolve(root, 'httpdocs')

if (!existsSync(dist)) throw new Error('dist fehlt – zuerst npm run build ausführen.')
mkdirSync(plesk, { recursive: true })
cpSync(dist, plesk, { recursive: true, force: true })
console.log(`Plesk-Ausgabe für httpdocs aktualisiert: ${plesk}`)
