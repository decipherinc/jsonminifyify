# jsonminifyify

Browserify transform to minify JSON files

## Use Case

When you `require('./package.json')`, your minifying transform (such as [minifyify](https://www.npmjs.com/package/minifyify)) may not want to minify `package.json`.

## Usage

Just like [any other transform](https://github.com/substack/node-browserify#btransformtr-opts).

### Options

- **`files`**: `{Array|String}` Glob(s) of JSON files to match.  Examples: `package.json`; `**/*.json`
- **`cwd`**: `{String}`  Defaults to the result of `process.cwd()`.  The transform will prepend this directory path when matching globs against files processed by Browserify.

## Notes

I'm thinking if a glob matches something that is *not* a JSON file, time & space may collapse.

## Installation

```shell
$ npm install --save-dev jsonminifyify
```

## Author

[Christopher Hiller](https://github.com/boneskull)

## License

MIT

