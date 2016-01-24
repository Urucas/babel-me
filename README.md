# babel-me
Are you planning to use [babel](https://babeljs.io/) in your next project ? Build a Babel environment in one single line

#Install
```bash
npm install -g babel-me
```

#Usage
```bash
babel-me
```

Create a simple environment for you to start coding in es6, it will add
a lib/index.js file, a dist folder, and an example tests/test.js in es6 to use
with mocha, and the .babelrc configuration file
``` dir
.
|___ lib/index.js
|___ dist/
|___ tests/test.js
|___ .babelrc
```
then add the required dependencies and scripts to use and build your babel lib
```json
...
"scripts":{
  "build" : "./node_modules/babel-cli/bin/babel.js lib -d dist",
  "test" : "./node_modules/mocha/bin/mocha tests/* --compilers js:babel-core/register -t 15s"
},
```
Dependencies added to your package.json

* babel-cli
* babel-core
* babel-preset-es2015
* mocha

Thats all! Simple and with minimum dependencies.

**Related**

A babel boilerplate for Yeoman [https://github.com/babel/generator-babel-boilerplate](https://github.com/babel/generator-babel-boilerplate)
