# gulp-backbone-browserify
Gulp workflow for Backbone.js using Browserify (CommonJS)

#### Dependencies
* [Npm (ships with Node.js)](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager)
* [Gulp](http://gulpjs.com/) (`npm install -g gulp`)

NOTE: make sure to set npm prefix to [avoid using sudo with npm](http://stackoverflow.com/questions/19352976/npm-modules-wont-install-globally-without-sudo/21712034#21712034).

#### CSS Compiler
* sass (`npm install gulp-sass@latest --save-dev`)
or
* less (`npm install gulp-less@latest --save-dev`)
* set 'cssCompiler' and 'cssSrcExtension' to "less" in gulp/config.json

#### Install
`npm install`

#### Run
`gulp`

#### Build for production
`gulp build`
