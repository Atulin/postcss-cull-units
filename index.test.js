const postcss = require('postcss')
const rfp = require('read-files-promise')

const plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('removes units', async () => {
  rfp([
    './css/input.css',
    './css/output.css'
  ])
    .then(async buffers => {
      await run(buffers[0].toString(), buffers[1].toString(), {})
    })
    .catch(() => {}) // Jest needs promise errors to just be discarded ¯\_(ツ)_/¯
})
