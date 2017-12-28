var shutdown = require('./shutdown.js');
var reboot = require('./reboot.js');
var restart = require('./restart.js');
var restartBluetooth = require('./restartBluetooth.js');
var restartVoice = require('./restartVoice.js');

module.exports = function commands(scope) {
	
	switch(scope.label) {
        case 'shutdown':
		shutdown();
        break;

	case 'reboot':
		reboot();
        break;
        
        case 'restart':
            restart();
        break;

        case 'restartBluetooth', 'restartBluetoothModule':
            restartBluetooth();
        break;
        
        case 'restartVoice', 'restartVoiceModule':
            restartVoice();
        break;

        default:

        break;
    }
};
