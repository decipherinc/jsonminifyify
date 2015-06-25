# jsonminifyify

Browserify transform to minify JSON files

## Usage

### Installation

```shell
$ npm install --save-dev jsonminifyify
```

### Options

- **`files`**: *Array* or *String*.  Globs of JSON files to match.  Examples: `package.json`; `**/*.json`
- **`cwd`**: *String*.  Defaults to the result of `process.cwd()`.  The transform will prepend this directory path when matching globs against files processed by Browserify.
 
## Author

[Christopher Hiller](https://github.com/boneskull)

## License

MIT

