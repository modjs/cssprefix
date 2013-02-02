# cssprefix - auto vendor prefix for CSS3 properties


## Install

```sh
# modjs installed first: npm install -g modjs
npm install -g mod-cssprefix
```

## Examples

### By Command-line
```sh
$ mod cssprefix ./css/mian.css
```

### By AutoTask
```js
// Modfile
module.exports = {
    tasks: {
        "cssprefix" : {
            "source": "./css/*.css"
        }
    },

    targets: {
        dist: "cssprefix"
    }
};
```

```sh
$ mod dist
```



