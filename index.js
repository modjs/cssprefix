var fs = require('fs');
var path = require('path');

exports.summary = 'Auto vendor prefix for CSS3 properties';

exports.usage = '<src> [options]';

exports.options = {
    "dest":{
        alias:'d',
        describe:'destination file'
    },
    "browsers": {
        describe: "specify the browsers you want to target in your project"
    },
    "suffix" : {
        alias : 's'
        ,default : '.prefixed'
        ,describe : 'destination file suffix append'
    },
    'output': {
        alias: 'o'
        ,default : 'file'
        ,describe : 'specify output type: file pipe'
    },
    
    "charset":{
        alias:'c',
        default:'utf-8',
        describe:'file encoding type'
    }
};

exports.run = function (options) {

    var dest = options.dest;
    var charset = options.charset;
    var suffix = options.suffix;
    var output = options.output;
    var browsers = options.browsers;
    
    var file = exports.file;
    var prefixed;
    
    exports.files.forEach(function (inputFile) {
        var outputFile;
        if( output !== 'file' ){
            outputFile = null;
        }else if( !dest ) {
            outputFile = inputFile; 
        }else if( file.isDirFormat(dest) ){
            var filename = path.basename(inputFile);
            outputFile = path.join(dest, filename);
        }else{
            outputFile = dest;
        }

        if(suffix && outputFile){
            outputFile = file.suffix(outputFile, suffix);
        }
        
        var fileContent = file.read(inputFile, charset);
        prefixed = exports.autoprefixer(browsers, fileContent);
        
        if( outputFile ){
            exports.log(inputFile, ">", outputFile);
            file.write(outputFile, prefixed, charset);
        }
    });
    
    return prefixed;

};


exports.autoprefixer = function(browsers, css){
    var autoprefixer = require('autoprefixer')(browsers);
    return autoprefixer.compile(css)
}