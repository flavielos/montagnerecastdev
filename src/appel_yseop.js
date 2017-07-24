var xhr = require('w3c-xmlhttprequest');

exports.appel = function(){
	
	var req = new xhr.XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState == 4 && (req.status == 200 || req.status == 0)){
			console.log('onreadystatechange ok');
		}else{
			console.log('req.readyState : ' + req.readyState.toString() + ' & req.statusText : ' + req.statusText.toString());
		};
	};
	req.open('POST', 'https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog', true);
	//req.open('GET', 'https://stackoverflow.com/questions/4789613/ajax-500-internal-server-error', true);
	req.setRequestHeader('Content-Type', 'application/soap+xml; charset=UTF-8');
	req.setRequestHeader('Authorization', 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==');
	req.setRequestHeader('Accept', 'text/html');
	req.send('./donnees_client.xml');
	//req.send();

	
};

