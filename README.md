# PostCSS Cull Units

[PostCSS] plugin that removes redundant units.

[PostCSS]: https://github.com/postcss/postcss

```css
.foo {
    border: 1px solid #0F0103;
    margin: 0rem 5rem;
    padding: 0cm;
    width: 50vw
}
```

```css
.foo {
    border: 1px solid #0F0103;
    margin: 0 5rem;
    padding: 0;
    width: 50vw
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-cull-units'),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
