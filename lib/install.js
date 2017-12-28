const Promise = require('bluebird');
var sentences = require('./sentences.js');

module.exports = function install(){

//on prends la langue du 1er admin
	return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		if(lang[0].language!='fr-FR')
			return gladys.sentence.insertBatch([sentences.sentenceShutdownEn, sentences.sentenceRebootEn, sentences.sentenceRestartEn, sentences.sentenceRestartBluetoothEn, sentences.sentenceRestartBluetoothModuleEn, sentences.sentenceRestartVoiceEn, sentences.sentenceRestartVoiceModuleEn]);
		else return gladys.sentence.insertBatch([sentences.sentenceShutdownFr, sentences.sentenceRebootFr, sentences.sentenceRestartFr, sentences.sentenceRestartBluetoothFr, sentences.sentenceRestartBluetoothModuleFr, sentences.sentenceRestartVoiceFr, sentences.sentenceRestartVoiceModuleFr]);
	})
	.then((result) => console.log(result))
	.catch((err) => console.log(err));
};
