var xhr = require('w3c-xmlhttprequest');
var xtb = require ('./xmlToBlob');


exports.appel = function(){
	
	// Envoi de la requete
	var req = new xhr.XMLHttpRequest();
	var data = xtb.xmlToString();
	req.onreadystatechange = function(event){
		if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
			return(req.response);
		};
	};


	req.open('POST', 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=bot', true);
	req.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');
	req.setRequestHeader('Authorization', 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==');
	req.setRequestHeader('Accept', 'text/html');
	req.send(data);
	

	
	

	
};

