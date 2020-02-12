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
