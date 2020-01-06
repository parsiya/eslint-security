# eslint-security
Repository to install ESLint, plugins and js-beautify.

For more information please see:

* https://github.com/parsiya/eslint-security-scanner-configs/tree/package
* https://github.com/Greenwolf/eslint-security-scanner-configs
* https://medium.com/greenwolf-security/linting-for-bugs-vulnerabilities-49bc75a61c6

## Usage

1. `git clone https://github.com/parsiya/eslint-security`
2. `npm install`
3. Access ESLint: `node_modules/.bin/eslint`, access js-beautify: `node_modules/.bin/js-beautify`.

## Replicate the Installation

```
npm i --save eslint eslint-plugin-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-config-standard eslint-config-semistandard eslint-plugin-scanjs-rules eslint-plugin-no-unsanitized eslint-plugin-prototype-pollution-security-rules eslint-plugin-angularjs-security-rules eslint-plugin-react eslint-plugin-security eslint-plugin-no-wildcard-postmessage js-beautify
```
