# cssprefix

Automatically adds vendor-specific prefixes (-moz, -webkit, -ms, and -o) to CSS3 properties

Support by https://github.com/ai/autoprefixer

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


## Usage


```js
// Modfile
module.exports = {
    plugins: {
        cssprefix: "mod-cssprefix"
    },
    tasks: {
        cssprefix : {
            src: "./css/*.css",
            dest : "./cssprefixed/"
        }
    }
};
```

### Browsers

You can specify the browsers you want to target in your project:

```json
cssprefix : {
    src: "./css/*.css",
    dest : "./cssprefixed/",
    browsers: ["last 1 version", "> 1%", "ie 8", "ie 7"]
}
```

* `last n versions` is last versions for each browser. Like ¡°last 2 versions¡±
  [strategy](http://support.google.com/a/bin/answer.py?answer=33864) in
  Google.
* `> n%` is browser versions, selected by global usage statistics.
* `ff > 20` and `ff >= 20` is Firefox versions newer, that 20.
* `none` don¡¯t set any browsers to clean CSS from any vendor prefixes.
* You can also set browsers directly.

Blackberry and stock Android browsers will not be used in `last n versions`.
You can add them by name:

```json
cssprefix : {
    src: "./css/*.css",
    dest : "./cssprefixed/",
    browsers: ["last 1 version", "bb 10", "android 4"]
}
```

You can find the browsers codenames in [data file](data/browsers.coffee):
* `android` for old Android stock browser.
* `bb` for Blackberry browser.
* `chrome` for Google Chrome.
* `ff` for Mozilla Firefox.
* `ie` for Internet Explorer.
* `ios` for iOS Safari.
* `opera` for Opera.
* `safari` for desktop Safari.

By default, Autoprefixer uses `> 1%, last 2 versions, ff 17, opera 12.1`:
* Firefox 17 is a latest [ESR].
* Opera 12.1 will be in list until Opera supports non-Blink 12.x branch.

[ESR]: http://www.mozilla.org/en/firefox/organizations/faq/
