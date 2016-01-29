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
