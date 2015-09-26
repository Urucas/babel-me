# babel-me
Are you planning to use [babel](https://babeljs.io/) in your next project ? Build a Babel enviroment in one single line

#Install
```bash
npm install -g babel-me
```

#Usage
```bash
babel-me
```
babel-me will copy to your local repository the **lib**, **dist** folders and the **Gruntfile.js**
``` dir
.
|─── lib/index.js
|─── dist/
|─── tests/test.js
|─── Gruntfile.js
```
and add to your **package.json** the required dependencies and scripts
```json
...
"scripts":{
  "build" : "./node_modules/grunt-cli/bin/grunt build",
  "test" : "./node_modules/mocha/bin/mocha tests/* --compilers js:babel/register -t 15s"
},
...
"devDependencies" : {
  "babel": "^5.8.23",
  "grunt": "^0.4.5",
  "grunt-babel": "^5.0.3",
  "load-grunt-tasks": "^3.3.0",
  "mocha": "^2.3.3"
}
```
And thats all! Simple and with minimal dependencies.
