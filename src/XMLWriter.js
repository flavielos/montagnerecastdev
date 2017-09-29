var xmldom = require('simple-xml-dom');
var randos = require('./randonneurs');

var debutXML = '<?xml version="1.0" encoding="UTF-8"?>'+
'<y:input xmlns:y="http://www.yseop.com/engine/3" xmlns:i18n="http://apache.org/cocoon/i18n/2.1" xmlns:fi="http://apache.org/cocoon/forms/1.0#instance" xmlns:ft="http://apache.org/cocoon/forms/1.0#template" xmlns:fd="http://apache.org/cocoon/forms/1.0#definition" xmlns:fb="http://apache.org/cocoon/forms/1.0#binding">'+
'<y:action command="init-dialog" sub-command=""/>'+
'<y:data>'+
'<y:instance  yid="theGeneralData">';

var finXML = '</y:instance>'+
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
'</y:input>';

exports.membreXML = function(i, client)
{
	var xml = '<membres yclass="Membre">'
	xml += '<nomMembre>' + client.membres[i].prenom + '</nomMembre>';
	xml += '<ageMembre>' + client.membres[i].age + '</ageMembre>';
	xml += '</membres>';
	return(xml);
};

exports.clientXML = function(client)
{
	var xml = '<client yid="CLIENT">';
	xml += '<ageClient>'+client.membres[0].age+'</ageClient>';
	xml += '<budget>'+client.nvBudget+'</budget>';
	xml += '<besoinEloignement>'+client.lieu+'</besoinEloignement>';
	xml += '<nomEntite>'+client.membres[0].prenom+'</nomEntite>';
	xml += '<typeClient>';
	switch(client.profil)
	{
		case 'A':
		xml += 'solo';
		break;
		case 'B' : 
		xml += 'famille';
		break;
		case 'C' :
		xml += 'couple';
		break;
		case 'D':
		xml += 'groupe';
		break;
	};
	xml += '</typeClient>';
	for (var element in client.membres){ 
		xml += exports.membreXML(element, client);
	};
	xml += '<dernierSite yid="'
	if(client.dernierSite != null){ xml += client.dernierSite};
	xml += '"/>';
	xml += '<indicateurNouveauSite>' + client.indicateurNouveauSite + '</indicateurNouveauSite>';
	xml += '</client>';
	return(xml);
};

exports.saisieDeDonneesXML = function(client)
{
	var xml = '<saisieDeDonnees yid="SAISIE_1">';
	xml += '<niveauPhysique yid="NV_PHYSIQUE_'+client.nvPhysique+'"></niveauPhysique>';
	xml += '<niveauRandonneur yid="NV_RANDONNEUR_'+client.nvRandonneur+'"></niveauRandonneur>';
	xml += '<niveauDifficulte yid="NV_DIFFICULTE_'+client.rando.nvDifficulte+'">';
	xml += '<correctionNiveau>'+client.rando.ajustNvDifficulte+'</correctionNiveau>';
	xml += '</niveauDifficulte>';
	xml += '<niveauEvasion yid="NV_EVASION_'+client.rando.nvEvasion+'">';
	xml += '<correctionNiveau>'+client.rando.ajustNvEvasion+'</correctionNiveau>';
	xml += '</niveauEvasion>'
	xml += '<niveauDecouverte yid="NV_DECOUVERTE_'+client.rando.nvDecouvertes+'">'
	xml += '<correctionNiveau>'+client.rando.ajustNvDecouvertes+'</correctionNiveau>'
	xml += '</niveauDecouverte>'
	xml += '<niveauDivertissement yid="NV_DIVERTISSEMENT_'+client.rando.nvActivites+'">'
	xml += '<correctionNiveau>'+client.rando.ajustNvActivites+'</correctionNiveau>'
	xml += '</niveauDivertissement>'
	xml += '</saisieDeDonnees>';
	return(xml);
};

exports.genererXML = function(client)
{
	var xml = debutXML;
	xml += exports.clientXML(client);
	xml += exports.saisieDeDonneesXML(client);
	if(client.sitesDejaRecommandes != null){xml += '<sitesDejaRecommandes>'+client.sitesDejaRecommandes+'</sitesDejaRecommandes>'};
	xml += '<recoAutomatique>false</recoAutomatique>';
	xml += finXML;
	return(xmldom.serialize(xmldom.parse(xml)).toString());
};