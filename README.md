# eslint-security
Repository to install ESLint, plugins and js-beautify.

For more information please see:

* https://github.com/parsiya/eslint-security-scanner-configs/tree/package
* https://medium.com/greenwolf-security/linting-for-bugs-vulnerabilities-49bc75a61c6

## Usage

1. `git clone https://github.com/parsiya/eslint-security`
2. `npm install`
3. Access ESLint: `node_modules/.bin/eslint`, access js-beautify: `node_modules/.bin/js-beautify`.

## Replicate the Installation

```
npm i --save eslint eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-standard eslint-config-semistandard eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized eslint-plugin-prototype-pollution-security-rules eslint-plugin-angularjs-security-rules eslint-plugin-react eslint-plugin-security eslint-plugin-no-wildcard-postmessage js-beautify
```

## Troubleshooting
ESLint might encounter parsing errors. Check the output for these errors. try
and resolve them. Parsing errors may prevent ESLint from performing analysis on
files. Searching for the error usually turns up the solution.

If you see an error not covered here please make an issue with the error and
your solution. I will add them here.

### Parsing error: 'import' and 'export' may appear only with 'sourceType: module'
Add the following to your config file. Chances are your config file already has
`parserOptions`.

```json
"parserOptions": {
  "sourceType": "module",
}
```

Credit: https://github.com/AtomLinter/linter-eslint/issues/462#issuecomment-190768439

### Parsing error: 'import' and 'export' may only appear at the top level

1. Change the ESLint parser from `esprima` (default) to `babel-eslint`.
2. Add `allowImportExportEverywhere: true` to `parserOptions`.

```json
"parser": "babel-eslint",
"parserOptions": {
  // ...
  "allowImportExportEverywhere": true
},
```

## Credit

* [Jacob Wilkin](https://twitter.com/jacob_wilkin) for his blog post and config files. See his configs at `configs/eslintrc-light|heavy.js`:
    * Blog: https://medium.com/greenwolf-security/linting-for-bugs-vulnerabilities-49bc75a61c6
    * Repository: https://github.com/Greenwolf/eslint-security-scanner-configs
* [Lewis Ardern](https://twitter.com/lewisardern) (Solid 5/7 JavaScript guy). See his config at `configs/eslintrc-lewis.js`:
    * https://github.com/LewisArdern/eslint-security-scanner-configs/blob/master/example-config.js
