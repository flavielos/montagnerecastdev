var req = require('w3c-xmlhttprequest');

exports.testhttp = function(){
	var xhr = new req.XMLHttpRequest();

	xhr.open('GET', 'https://www.google.fr');

	xhr.addEventListener('readystatechange', function(){
		
		if(xhr.readyState === 4 && xhr.status === 200 ){
			console.log('ok')
			//console.log(xhr.responseText);
			var texte = xhr.responseXML;
			return(texte)
		} else if(xhr.readyState === req.DONE && xhr.status != 200 ){
			console.log(xhr.status)
		} 
	});

		
	xhr.send(null)
	
};