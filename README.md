# cssprefix

Automatically adds vendor-specific prefixes (-moz, -webkit, -ms, and -o) to CSS3 properties

Support by https://github.com/imsky/cssFx

## Properties Supported
* Border radius
* box shadow
* flex box
* RGBA
* linear gradients
* multiple columns
* border image
* transforms
* transitions
* opacity
* inline-block
* ellipsis
* and more.

### Origin CSS Rules
```css
#example {
    box-shadow:0px 0px 15px #407fab;
    border-radius:10px;
    display:box;
    box-pack:center;
    box-align:center
}
```

### Prefixed CSS Rules
```css
#example {
    -moz-box-shadow:0px 0px 15px #407fab;
    -webkit-box-shadow:0px 0px 15px #407fab;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
    display:-moz-box;
    display:-webkit-box;
    display:-ms-box;
    -moz-box-pack:center;
    -webkit-box-pack:center;
    -ms-box-pack:center;
    -moz-box-align:center;
    -webkit-box-align:center;
    -ms-box-align: middle
}
```

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

