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
		var imageURL = xml.childNamed('imageURL').val;
		//var imageURL = 'http://www.france-montagnes.com/sites/default/files/pages/7132679751_7675d430bf_k.jpg';
		
		var recoIntro = xml.childWithAttribute('class', 'recommandationIntro').toString();
		var recoDifficulte = xml.childWithAttribute('class', 'recommandationDifficulte').toString();
		var recoEvasion = xml.childWithAttribute('class', 'recommandationEvasion').toString();
		var recoActivites = xml.childWithAttribute('class', 'recommandationActivites').toString();
		var recoDecouvertes = xml.childWithAttribute('class', 'recommandationDecouvertes').toString();
		var recoConclusion = xml.childWithAttribute('class', 'recommandationConclusion').toString();
		
		/*
		var recoIntro = xml.childWithAttribute('div', 'recommandationIntro').val;
		var recoDifficulte = xml.childNamed('recommandationDifficulte').val;
		var recoEvasion = xml.childNamed('recommandationEvasion').val;
		var recoActivites = xml.childNamed('recommandationDivertissement').val;
		var recoDecouvertes = xml.childNamed('recommandationDecouverte').val;
		var recoConclusion = xml.childNamed('recommandationPrix').val;
		*/
		return([siteNum, siteTitre, imageURL, recoIntro, recoDifficulte, recoEvasion, recoActivites, recoDecouvertes, recoConclusion]);
		/*
		switch(client.origin)
		{
			case 'slack':
			var texte = xml.childNamed('recommandationIntro').val;
			texte += '</br>';
			texte += xml.childNamed('recommandationDifficulte').val;
			texte += '</br>';
			texte += xml.childNamed('recommandationEvasion').val;
			texte += '</br>';
			texte += xml.childNamed('recommandationDecouverte').val;
			texte += '</br>';
			texte += xml.childNamed('recommandationDivertissement').val;
			texte += '</br>';
			texte += xml.childNamed('recommandationPrix').val;
			break;
			
			case 'microsoft':
			var textes = xml.childrenNamed('div');
			var i;
			texte = '<div style="display:initial;">';
			texte += textes[0];
			for (i=2;i<5;i++)
			{
				texte += '</br>' + textes[i];
			};
			texte += '</div>';
			break;
		};
		
		return([texte, site, imageURL]);
		*/
		//return('texte');
}; 