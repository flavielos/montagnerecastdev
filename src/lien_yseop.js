var rq = require('sync-request');
var xmldoc = require('xmldoc');
var xw = require('./XMLWriter');

exports.requete = function(client){
	
		var body = new String();
		body = xw.genererXML(client);
		
		var res = rq('POST','https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=bot', {
			'headers':{
				'Content-Type': 'application/soap+xml; charset=UTF-8',
				'Authorization': 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==',
				'Accept': 'text/html'
			},
			'body':body
		});

		var xml = new xmldoc.XmlDocument(res.getBody());
		
		var site = xml.childNamed('site').val;
		
		var texte = '\n';
		texte = xml.childNamed('recommandationIntro').val;
		texte += '\n';
		texte += xml.childNamed('recommandationDifficulte').val;
		texte += '\n';
		texte += xml.childNamed('recommandationEvasion').val;
		texte += '\n';
		texte += xml.childNamed('recommandationDecouverte').val;
		texte += '\n';
		texte += xml.childNamed('recommandationDivertissement').val;
		texte += '\n';
		texte += xml.childNamed('recommandationPrix').val;
		return([texte, site]);
		
		//return('texte');
}; 