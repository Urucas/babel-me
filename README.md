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

Create a simple environment for start coding in es6 with babel. 
``` dir
.
|___ lib/index.js     <-- base es6 file
|___ dist/            <-- distribution folder
|___ tests/test.js    <-- base es6 test based on mocha
|___ .babelrc         <-- babel configuration file
```
Aumatically add scripts to use and build your babel lib
```json
...
"scripts":{
  "build" : "./node_modules/babel-cli/bin/babel.js lib -d dist",
  "test" : "./node_modules/mocha/bin/mocha tests/* --compilers js:babel-core/register -t 15s",
  "prepublish" : "npm run build"
},
```
Install the minimumm required dependencies

* babel-cli
* babel-core
* babel-preset-es2015
* mocha

Thats all! Simple and with minimum dependencies.

**Related**

A babel boilerplate for Yeoman [https://github.com/babel/generator-babel-boilerplate](https://github.com/babel/generator-babel-boilerplate)
