var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var shutdown = require('./lib/shutdown.js');
var reboot = require('./lib/reboot.js');
var restart = require('./lib/restart.js');
var restartBluetooth = require('./lib/restartBluetooth.js');
var restartVoice = require('./lib/restartVoice.js');
var commands = require('./lib/commands.command.js');

module.exports = function(sails) {

	return {
		install: install,
		uninstall: uninstall,
		shutdown: shutdown,
		reboot: reboot,
		restart: restart,
		restartBluetooth: restartBluetooth,
		restartVoice: restartVoice,
		commands: commands
	};
};
