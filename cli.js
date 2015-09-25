var child_process = require('child_process');
var spawn  = child_process.spawn('grunt', ['build'])
var logger = require('semafor')();
spawn.stdout.on('data', function(data){
  logger.log(data + " ");
});
spawn.stderr.on('data', function(data){
  logger.fail(data + " ");
});
spawn.on('close', function() {
  logger.ok("Babel environment created. Now start coding you!")
});
