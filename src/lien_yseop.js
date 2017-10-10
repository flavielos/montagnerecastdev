var rq = require('sync-request');
var xmldoc = require('xmldoc');
var xw = require('./XMLWriter');

exports.requete = function(client){
	
		var body = new String();
		body = xw.genererXML(client);
		var url;
		switch(client.origin){
			case 'slack':
			url = 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=botSlack'
			break;
			case 'microsoft':
			url = 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=botWeb'
			break;
		};
		var res = rq('POST',url, {
			'headers':{
				'Content-Type': 'application/soap+xml; charset=UTF-8',
				'Authorization': 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==',
				'Accept': 'text/html'
			},
			'body':body
		});

		var xml = new xmldoc.XmlDocument(res.getBody());
		
		var siteNum = xml.childNamed('siteId').val;
		var siteTitre = xml.childNamed('siteTitre').val;
		var imageUrl = xml.childNamed('imageUrl').val;

		
		var recoIntro = xml.childWithAttribute('class', 'recommandationIntro').toString();
		var recoDifficulte = xml.childWithAttribute('class', 'recommandationDifficulte').toString();
		var recoEvasion = xml.childWithAttribute('class', 'recommandationEvasion').toString();
		var recoActivites = xml.childWithAttribute('class', 'recommandationActivites').toString();
		var recoDecouvertes = xml.childWithAttribute('class', 'recommandationDecouvertes').toString();
		var recoConclusion = xml.childWithAttribute('class', 'recommandationConclusion').toString();

		return([siteNum, siteTitre, imageUrl, recoIntro, recoDifficulte, recoEvasion, recoActivites, recoDecouvertes, recoConclusion]);

}; 