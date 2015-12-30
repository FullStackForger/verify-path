# Verify Path

Usage example

```
require('verify-path')({
  path: './tmp', 
  mode: parseInt('0755', 8))
})
.then(console.log)
.catch(console.log)
```

Default mode is `0755`
