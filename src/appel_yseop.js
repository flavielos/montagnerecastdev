var xhr = require('w3c-xmlhttprequest');
var xtb = require ('./xmlToBlob');
var message = require('./message');



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


exports.yseopLoad = function() {
	// Create new promise with the Promise() constructor;
	// This has as its argument a function
	// with two parameters, resolve and reject
	var request = new xhr.XMLHttpRequest();
	new Promise(function(resolve, reject) {
		
		request.open('POST', 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog', true);
		
		// When the request loads, check whether it was successful
		request.onloadend = function(event) {
			if (request.status === 200) {
			// If successful, resolve the promise by passing back the request response
				console.log("youhou");
				resolve(request.responseText);
			} else {
				console.log('presque youhou !');
				resolve(request.responseText);
				// If it fails, reject the promise with a error message
		  
				reject(Error('Text didn\'t load successfully; error code:' + request.statusText));
			}
		};
		
		request.onerror = function(event) {
			// Also deal with the case when the entire request fails to begin with
			// This is probably a network error, so reject the promise with an appropriate message
			reject(Error('There was a network error.'));
		};
		
		// Send the request
		request.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');
		request.setRequestHeader('Authorization', 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==');
		request.setRequestHeader('Accept', 'text/html');
		var data = xtb.xmlToString();
		request.send(data);
		request.onloadend = xhr.onLoadEnd
	});
  }



