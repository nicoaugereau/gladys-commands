const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function uninstall(){

	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceShutdownEn.sentences[0].uuid, sentences.sentenceRebootEn.sentences[0].uuid, sentences.sentenceRestartEn.sentences[0].uuid, sentences.sentenceRestartBluetoothEn.sentences[0].uuid, sentences.sentenceRestartBluetoothModuleEn.sentences[0].uuid, sentences.sentenceRestartVoiceEn.sentences[0].uuid, sentences.sentenceRestartVoiceModuleEn.sentences[0].uuid]);
		else gladys.utils.sql('DELETE FROM sentence WHERE uuid in (?,?)', [sentences.sentenceShutdownFr.sentences[0].uuid, sentences.sentenceRebootFr.sentences[0].uuid, sentences.sentenceRestartFr.sentences[0].uuid, sentences.sentenceRestartBluetoothFr.sentences[0].uuid, sentences.sentenceRestartBluetoothModuleFr.sentences[0].uuid, sentences.sentenceRestartVoiceFr.sentences[0].uuid, sentences.sentenceRestartVoiceModuleFr.sentences[0].uuid]);
	});
	sails.log.info('Commands : Module uninstalled');
};
