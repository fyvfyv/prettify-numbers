# prettify-numbers
Add thousands separator to numbers

## Installation

```sh
npm install prettify-numbers --save
```

## Usage

### Javascript

```js
var prettifyNum = require('prettify-numbers');
var prettyNum = prettifyNum(100000.0, ' ');
```

```sh
Output should be '100 000,0'
```

### TypeScript
```typescript
import prettyNum from 'prettify-numbers';
console.log(prettyNum(100000.0, ' '))
```

```sh
Output should be '100 000,0'
```

## License

[MIT](LICENSE)