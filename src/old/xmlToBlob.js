// var xhr = require('w3c-xmlhttprequest');


var xmldom = require('simple-xml-dom');
var xmldoc = require('xmldoc');
var randos = require('./randonneurs');
var rando = require('./randonneur');


exports.genererXml = function(){
	var xml;
	//var profil = randos.getProfil()
	var profil = 'A';
	if(profil=='A'){
		xml = '<?xml version="1.0" encoding="UTF-8"?>'+
'<y:input xmlns:y="http://www.yseop.com/engine/3" xmlns:i18n="http://apache.org/cocoon/i18n/2.1" xmlns:fi="http://apache.org/cocoon/forms/1.0#instance" xmlns:ft="http://apache.org/cocoon/forms/1.0#template" xmlns:fd="http://apache.org/cocoon/forms/1.0#definition" xmlns:fb="http://apache.org/cocoon/forms/1.0#binding">'+
'<y:action command="init-dialog" sub-command=""/>'+
'<y:data>'+
/*'<y:instance yid="theGeneralData">'+
'<client yid="CLIENT">'+
'<nomEntite>Michel</nomEntite>'+
'<ageClient>50</ageClient>'+
'<budget>5000</budget>'+
'<besoinEloignement>15</besoinEloignement>'+
'<typeClient></typeClient>'+
'<dernierSite yid="SITE_1"/>'+
'</client>'+
'<saisieDeDonnees yid="SAISIE_1">'+
'<niveauPhysique yid="NV_PHYSIQUE_2"></niveauPhysique>'+
'<niveauRandonneur yid="NV_RANDONNEUR_2"></niveauRandonneur>'+
'<niveauEquipement yid="NV_EQUIPEMENT_3"></niveauEquipement>'+
'<recoAutomatique yid="NON"/>'+
'<niveauDifficulte yid="NV_DIFFICULTE_3">'+
'<correctionNiveau>0.3</correctionNiveau>'+
'</niveauDifficulte>'+
'<niveauEvasion yid="NV_EVASION_3">'+
'<correctionNiveau>0.5</correctionNiveau>'+
'</niveauEvasion>'+
'<niveauDecouverte yid="NV_DECOUVERTE_0">'+
'<correctionNiveau>-0.3</correctionNiveau>'+
'</niveauDecouverte>'+
'<niveauDivertissement yid="NV_DIVERTISSEMENT_0">'+
'<correctionNiveau>0</correctionNiveau>'+
'</niveauDivertissement>'+
'</saisieDeDonnees>'+
'<dialogId>96190</dialogId>'+
'<language yid="LANG_en"/>'+
'</y:instance>'+*/
'	<y:instance  yid="theGeneralData">'+
'				<client yid="CLIENT">'+
'					<nomEntite>'+ rando.getPrenom() +'</nomEntite>'+
'					<ageClient>' + rando.getAge() +'</ageClient>'+
'					<budget>'+ randos.getNvBudget() +'</budget>'+
'					<besoinEloignement>'+ randos.getNvEloignement() +'</besoinEloignement>'+
'					<typeClient></typeClient>'+
'				</client>'+
'				<saisieDeDonnees yid="SAISIE_1">'+
'					<niveauPhysique yid="NV_PHYSIQUE_'+randos.getNvPhysique()+'"></niveauPhysique>'+
'					<niveauRandonneur yid="NV_RANDONNEUR_' + randos.getNvRandonneur() +'"></niveauRandonneur>'+
'					<niveauDifficulte yid="NV_DIFFICULTE_'+randos.getNvDifficulte()+'">'+
'					     <correctionNiveau>'+ randos.getAjustNvDifficulte() +'</correctionNiveau>'+
'					</niveauDifficulte>'+
'					<niveauEvasion yid="NV_EVASION_'+ randos.getNvEvasion() +'">'+
'					     <correctionNiveau>'+ randos.getAjustNvEvasion() +'</correctionNiveau>'+
'					</niveauEvasion>'+
'					<niveauDecouverte yid="NV_DECOUVERTE_'+ randos.getNvDecouvertes() +'">'+
'					     <correctionNiveau>'+ randos.getAjustNvDecouvertes() +'</correctionNiveau>'+
'					</niveauDecouverte>'+
'					<niveauDivertissement yid="NV_DIVERTISSEMENT_'+randos.getNvActivites() +'">'+
'					     <correctionNiveau>'+ randos.getAjustNvActivites() +'</correctionNiveau>'+
'					</niveauDivertissement>'+
'				</saisieDeDonnees>'+
'				<sitesDejaRecommandes>' + randos.getSitesDejaReco() +'</sitesDejaRecommandes>'+
'				<recoAutomatique>false</recoAutomatique>'+
'</y:instance>'+
'</y:data>'+
'<y:dialog-session>'+
'<y:dialog-id>R20170830131143-1</y:dialog-id>'+
'<y:user>'+
'<y:login/>'+
'<y:full-name/>'+
'<y:additional-info/>'+
'</y:user>'+
'</y:dialog-session>'+
'<y:misc-in>'+
'<y:version dialog="2.19.0.S" manager="2.9.0"/>'+
'<y:language id="fr_FR"/>'+
'<y:language id="fr"/>'+
'<y:language id="en_US"/>'+
'<y:language id="en"/>'+
'</y:misc-in>'+
'</y:input>'
	};
	//return(xml.toString());
	return(xmldom.serialize(xmldom.parse(xml)).toString());
	
	
};






exports.xmlToString = function () { 
	var source = '<?xml version="1.0" encoding="UTF-8"?>'+
'	<y:input xmlns:y="http://www.yseop.com/engine/3" xmlns:i18n="http://apache.org/cocoon/i18n/2.1" xmlns:ft="http://apache.org/cocoon/forms/1.0#template" xmlns:fi="http://apache.org/cocoon/forms/1.0#instance" xmlns:fd="http://apache.org/cocoon/forms/1.0#definition" xmlns:fb="http://apache.org/cocoon/forms/1.0#binding">'+
'	<y:action command="next-request" sub-command="operNext"/>'+
'	<y:data>'+
'	<y:instance  yid="theGeneralData">'+
'				<client yid="CLIENT">'+
'					<nomEntite>'+ rando.getPrenom() +'</nomEntite>'+
'					<ageClient>' + rando.getAge() +'</ageClient>'+
'					<budget>'+ randos.getBudget() +'</budget>'+
'					<besoinEloignement>'+ randos.getEloignement() +'</besoinEloignement>'+
'					<typeClient></typeClient>'+
'				</client>'+
'				<saisieDeDonnees yid="SAISIE_1">'+
'					<niveauPhysique></niveauPhysique>'+
'					<niveauRandonneur></niveauRandonneur>'+
'					<niveauEquipement></niveauEquipement>'+
'					<recoAutomatique></recoAutomatique>'+
'					<niveauDifficulte>'+
'					     <correctionNiveau>0</correctionNiveau>'+
'					</niveauDifficulte>'+
'					<niveauEvasion>'+
'					     <correctionNiveau>0</correctionNiveau>'+
'					</niveauEvasion>'+
'					<niveauDecouverte>'+
'					     <correctionNiveau>0</correctionNiveau>'+
'					</niveauDecouverte>'+
'					<niveauDivertissemen>'+
'					     <correctionNiveau>0</correctionNiveau>'+
'					</niveauDivertissement>'+
'				</saisieDeDonnees>'+
'</y:instance>'+
'	</y:data>'+
'	<y:gathering-store>'+
'	<y:item att="Client::budget" ob="CLIENT"/>'+
'	<y:item att="Client::besoinEloignement" ob="CLIENT"/>'+
'	<y:item att="SaisieDeDonnees::recoAutomatique" ob="SAISIE_1"/>'+
'	<y:item att="SaisieDeDonnees::niveauDifficulte" ob="SAISIE_1"/>'+
'	<y:item att="SaisieDeDonnees::niveauEvasion" ob="SAISIE_1"/>'+
'	<y:item att="SaisieDeDonnees::niveauDivertissement" ob="SAISIE_1"/>'+
'	<y:item att="SaisieDeDonnees::niveauDecouverte" new="true" ob="SAISIE_1"/>'+
'	</y:gathering-store>'+
'	<y:dialog-session>'+
'	<y:step>QUESTIONS</y:step>'+
'	<y:request-count>1</y:request-count>'+
'	<y:dialog-id>18D0E-15E32B3F7A5</y:dialog-id>'+
'	<y:start-timestamp>2017-08-30T12:33:16:054</y:start-timestamp>'+
'	<y:user>'+
'	<y:login/>'+
'	<y:full-name/>'+
'	<y:additional-info></y:additional-info>'+
'	</y:user>'+
'	</y:dialog-session>'+
'	<y:misc-in>'+
'	<y:version dialog="2.19.0.S" manager="2.9.0"/>'+
'	<y:language id="fr_FR"/>'+
'	<y:language id="fr"/>'+
'	<y:language id="en_US"/>'+
'	<y:language id="en"/>'+
'	</y:misc-in>'+
'	</y:input>'

	
	
	
	var xmldoc = xmldom.serialize(xmldom.parse(source));
	
	return(xmldom.serialize(xmldom.parse(source)).toString());
    
}   
