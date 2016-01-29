# ReactWebpack

Initial setup for a React project using Webpack.

```
$ npm init
```

Packages to install:

* autoprefixer-loader
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* css-loader
* file-loader
* http-server
* img-loader
* node-sass
* postcss-loader
* react
* react-hot-loader
* sass-loader
* source-map-loader
* style-loader
* svgo
* svgo-loader
* url-loader
* webpack
* webpack-dev-server

Include Scripts to package.json:

```
"test": "echo \"Error: no test specified\" && exit 1",
"webpack-server": "webpack-dev-server --hot --progress --colors",
"web-server": "http-server -p 3000 .",
"start": "npm run webpack-server & npm run web-server"
```

Create `./index.html`

Create `./webpack.config.js`

```
$ mkdir -p src/{js,css,img}
```

Create `./src/css/master.scss`

Create `./src/js/entry.js`

Create `./src/js/HelloBox.js`

Create `./src/js/HelloText.js`

## Testing

https://www.codementor.io/reactjs/tutorial/test-reactjs-components-karma-webpack

Install packages:

* karma — the actual test runner
* karma-cli — the cli for karma
* karma-mocha — for using the mocha test framework with karma
* karma-webpack — for using webpack to actually preprocess sources for karma
* karma-sourcemap-loader — for loading up sourcemaps into karma
* karma-chrome-launcher — for launching chrome
* expect — Michael Jackson’s (not to be confused with the famous singer/dancer) amazingly nice assertion library
* mocha

Create `karma.conf.js`

Create `tests.webpack.js`
