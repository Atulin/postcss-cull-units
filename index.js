let postcss = require('postcss')

module.exports = postcss.plugin('postcss-cull-units', () => {
  return root => {
    root.walkDecls(dec => {
      dec.value = dec.value.replace(
        /\D?(0)(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/g,
        '0'
      )
    })
  }
})

module.exports.t = function () {
  let p = '10px 100rem 0em 20%'
  let r = /\D(0)(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/g
  console.log(p.match(r))
}
