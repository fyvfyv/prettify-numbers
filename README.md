# prettify-numbers
Add thousands and decimal separator to numbers

## Installation

```sh
npm install prettify-numbers --save
```

## Usage

### Javascript

```js
var prettifyNum = require('prettify-numbers');
var prettyNum = prettifyNum.default()(100000.1, ' ', ',');
```

```sh
Output should be '100 000,1'
```

### TypeScript
```typescript
import prettyNum from 'prettify-numbers';
console.log(prettyNum(100000.1, ' ', ','))
```

```sh
Output should be '100 000,1'
```

## License

[MIT](LICENSE)