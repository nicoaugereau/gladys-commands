const Promise = require('bluebird');
var exec = require('child_process').exec;

module.exports = function commands(){
		
		return gladys.param.getValue('RESTART_CMD')
        .then((cmd) => {
			sails.log.debug('exec parameter :' + cmd);
			if((typeof cmd != 'undefined') && cmd != null)
				exec(cmd);
			}).catch(function(err){sails.log.debug('Error RESTART_CMD : ' + RESTART_CMD + ' parameter')});
	}