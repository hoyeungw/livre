import { deco }             from '@spare/deco'
import { decoString, says } from '@spare/logger'
import { Eta }              from '@valjoux/eta'
import fs                   from 'fs'
import { WordCount }        from '../../../src/wordCount'

const SRC = 'static/samples-gutenberg/resources'
const eta = Eta.buildPretty()
const WORD_COUNT = 'wordCount'

const test = () => {
  const files = fs.readdirSync(SRC)
  eta.ini('found files') |> says[WORD_COUNT]
  files |> deco |> says[WORD_COUNT]
  console.time('single core')
  for (let file of files) {
    const buffer = fs.readFileSync(SRC + '/' + file)
    const result = buffer.toString() |> WordCount({ top: 25 })
    eta.lap(`done reading ${ decoString(file) }, ${ deco(result[0]) },${ deco(result[1]) }`) |> says[WORD_COUNT]
  }
  console.timeEnd('single core')
}

test()
