var xhr = require('w3c-xmlhttprequest');
var xtb = require ('./xmlToBlob');
const rq = require('sync-request');
var xmldoc = require('xmldoc');

//var message = require('./message');

exports.requete = function(){
	
		var body = new String();
		body = xtb.genererXml();
		//console.log(body);
		var res = rq('POST','https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=bot', {
			'headers':{
				'Content-Type': 'application/soap+xml; charset=UTF-8',
				'Authorization': 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==',
				'Accept': 'text/html'
			},
			'body':body
		});

		var xml = new xmldoc.XmlDocument(res.getBody());
		//var xml = new xmldoc.XmlDocument(res);
		//console.log(xml);
		
		var texte = xml.childNamed('recommandationIntro').val;
		//texte += '\n';
		texte += xml.childNamed('recommandationDifficulte').val;
		//texte += '\n';
		texte += xml.childNamed('recommandationEvasion').val;
		//texte += '\n';
		texte += xml.childNamed('recommandationDecouverte').val;
		//texte += '\n';
		texte += xml.childNamed('recommandationDivertissement').val;
		//texte += '\n';
		texte += xml.childNamed('recommandationPrix').val;
		texte += '\n Est-ce que ce trek vous convient ?';
		return(texte);
		
}; 

// exports.appel = function(){
	

	
	// Envoi de la requete
	// var req = new xhr.XMLHttpRequest();
	// var data = xtb.xmlToString();
	// console.log(data);
	// return new Promise(function(resolve, reject){
		// req.onreadystatechange = function(event){
			// if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
				// var texte = req.responseText;
			// };
		// }
		// resolve(texte);
	// });



	// req.open('POST', 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=bot', true);
	// req.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');
	// req.setRequestHeader('Authorization', 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==');
	// req.setRequestHeader('Accept', 'text/html');
	// req.send(data);
	
	
	
// };

// comYseop = function(texte){
	// var com = texte;
	// var reply = {type : 'text', content : com};
	// return(reply);
// };

// exports.f = function(){
	
	// appel()
	// .then(comYseop(texte));
	
// };

/*
exports.yseopLoad = function() {

	var request = new xhr.XMLHttpRequest();
	new Promise(function(resolve, reject) {
		
		request.open('POST', 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog', true);
		
		request.onloadend = function(event) {
			if (request.status === 200) {
				console.log('success');
				resolve(request.responseText);
			} else {
				resolve(request.responseText);		  
				reject(Error('Text didn\'t load successfully; error code:' + request.statusText));
			}
		};
		
		request.onerror = function(event) {
			reject(Error('There was a network error.'));
		};
		
		request.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');
		request.setRequestHeader('Authorization', 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==');
		request.setRequestHeader('Accept', 'text/html');
		var data = xtb.xmlToString();
		request.send(data);
		request.onloadend = xhr.onLoadEnd
	}).then(function(response) {
			//console.log(response)
			return(response)
			//message.addReply({type : 'text', content : response});
			}, function(Error) {
				console.log(Error);
	  });
  }
*/
/*
exports.yseopLoad = function() {

	var request = new xhr.XMLHttpRequest();
	
		
		request.open('POST', 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog', true);
		
		request.onload = function(event) {
			if (request.status === 200) {
				console.log(request.responseText);
				return(request.responseText);
			} else {
				return(request.responseText);
				console.log('erreur');				
				//reject(Error('Text didn\'t load successfully; error code:' + request.statusText));
			}
		};
		
		request.onerror = function(event) {
			//reject(Error('There was a network error.'));
		};
		
		request.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');
		request.setRequestHeader('Authorization', 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==');
		request.setRequestHeader('Accept', 'text/html');
		var data = xtb.xmlToString();
		request.send(data);
		//request.onloadend = xhr.onLoadEnd
	}
*/  

