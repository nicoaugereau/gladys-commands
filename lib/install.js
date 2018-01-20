const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

	try {
		gladys.param.setValue({name: 'SHUTDOWN_CMD', value: 'sudo shutdown -h now'});
		gladys.param.setValue({name: 'REBOOT_CMD', value: 'sudo reboot'});
		gladys.param.setValue({name: 'RESTART_CMD', value: 'sudo pm2 restart gladys'});
		gladys.param.setValue({name: 'RESTART_VOICE_CMD', value: 'sudo pm2 restart gladys-voice'});
		gladys.param.setValue({name: 'RESTART_BT_CMD', value: 'sudo pm2 restart gladys-bluetooth'});

		return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
			if(lang[0].language!='fr-FR')
				return gladys.sentence.insertBatch([sentences.sentenceShutdownEn, sentences.sentenceRebootEn, sentences.sentenceRestartEn, sentences.sentenceRestartBluetoothEn, sentences.sentenceRestartBluetoothModuleEn, sentences.sentenceRestartVoiceEn, sentences.sentenceRestartVoiceModuleEn]);
			else return gladys.sentence.insertBatch([sentences.sentenceShutdownFr, sentences.sentenceRebootFr, sentences.sentenceRestartFr, sentences.sentenceRestartBluetoothFr, sentences.sentenceRestartBluetoothModuleFr, sentences.sentenceRestartVoiceFr, sentences.sentenceRestartVoiceModuleFr]);
		});
	}
	catch (err){
        reject(sails.log.error(err));
    }

	sails.log.info('Commands : Module installed');
	return Promise.resolve();
};
