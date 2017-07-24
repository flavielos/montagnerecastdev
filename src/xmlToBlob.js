var xhr = require('w3c-xmlhttprequest');


exports.xmlToBlob = function(xml){
	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
			console.log('onreadystatechange ok');
		}else{
			console.log('req.readyState : ' + req.readyState.toString() + ' & req.statusText : ' + req.statusText.toString());
		};
	};
	req.open('GET', './donnees_client.xml', true);
	req.send(null);
	//var xmlString = (new XMLSerializer()).serializeToString(xml);
};