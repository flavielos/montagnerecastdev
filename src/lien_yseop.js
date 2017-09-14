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
		
		var site = xml.childNamed('site').val;
		
		
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
		
		var imageURL = 'http://www.france-montagnes.com/sites/default/files/pages/7132679751_7675d430bf_k.jpg';
		return([texte, site, imageURL]);
		
		//return('texte');
}; 