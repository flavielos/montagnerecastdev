 const rando = require('./randonneurs');
 const ly = require('./lien_yseop');


exports.save = function(slug, data, client, choix)
{
	switch(slug)
	{
		case 'choisir-profil-type':
		client.profil = data;
		break;
		
		case 'nom':
		client.membres[0].prenom = data;
		break;
		
		case 'nombre-age':
		case 'age':
		client.membres[0].age = data;
		break;
		
		
		case 'niveau-physique':
		client.nvPhysique = data;
		break;
		
		case 'niveau-randonneur':
		client.nvRandonneur = data;
		break;
		
		case 'pas-de-preference-budget':
		case 'nombre-budget':
		case 'budget':
		client.nvBudget = data;
		break;

		case 'rectifier-lieu':
		case 'eloignement':
		switch(data[0])
		{
			case 'dist':
			client.nvEloignement = Math.floor(data[1]/1000);
			break;
			
			case 'duree':
			client.nvELoignement = Math.floor(data*900);
			break;
			
			case 'lieu':
			var latP = 49.9;
			var lonP = 2.3;
			var lat = data[1];
			var lon = data[2];
			var deltaLat = (latP-lat);
			var deltaLon = (lonP-lon);
			client.nvEloignement = Math.floor(Math.sqrt(Math.pow(deltaLat,2) + Math.pow(deltaLon,2))*111);
			break;
		};
		break;
		
		case 'pas-de-preference-eloignement':
		client.nvEloignement = data;
		break;
		
		case 'rectifier-details':
		case 'details':
		client.rando.nvDifficulte = data[0];
		client.rando.nvEvasion = data[1];
		client.rando.nvActivites = data[2];
		client.rando.nvDecouvertes = data[3];
		break;
		
		case 'rectifier-niveau':
		if (choix == 'niveau-physique'){
			client.nvPhysique = data;
		} else {
			client.nvRandonneur = data;
		};
		break;
		
		case 'ajuster-reco':
		switch(data)
		{
			case 'Augmenter evasion':
			client.rando.ajustNvEvasion = 0.8;
			break;
			case 'Diminuer evasion':
			client.rando.ajustNvEvasion = '-0.8';
			break;
			case 'Augmenter difficulte':
			client.rando.ajustNvDifficulte = 0.8;
			break;
			case 'Diminuer difficulte':
			client.rando.ajustNvDifficulte = '-0.8';
			break;
			case 'Augmenter activites':
			client.rando.ajustNvActivites = 0.8;
			break;
			case  'Augmenter decouvertes':
			client.rando.ajustNvDecouvertes = 0.8;
			break;
		};
		
		case 'recap-valide':
		[client.rando.siteNum, client.rando.siteTitre, client.rando.imageURL, client.rando.recoIntro, client.rando.recoDifficulte, client.rando.recoEvasion, client.rando.recoActivites, client.rando.recoDecouvertes, client.rando.recoConclusion] = ly.requete(client);
		break;
		
	}
};