# Verify Path

## Path verification method

`verifyPath(settings)` method verifies directory path.
If directory doesn't exist it will be created.
It returns [ES6 promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) object
and resolves it upon directory confirmation or it's successful creation.

You can pass `settings` object which will be decorated with 'fullPath' property and passed as a parameter into returned promise `resolve()` method.

## Usage

### Installation
```
npm install verify-path --save
```

### Require
```
var verifyPath = require('verifyPath');
```

### Usage examples

#### Verify current path

If no parameters are passed, current directory will be verified.

```
verifyPath().then((obj) => {
    console.log('success: ', obj)
}, (err) => {
    console.log('err: ', err)
})
```

#### Create directory with custom privileges

Custom `./temp` sub-directory will be created with `0700` mode.

```
verifyPath({
    path: './tmp',
    mode: parseInt('0700', 8)
}).then((obj) => {
    console.log('success: ', obj)
}, (err) => {
    console.log('err: ', err)
})
```

Default mode is `0755`
