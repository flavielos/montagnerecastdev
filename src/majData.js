 const rando = require('./randonneurs');
 const ly = require('./lien_yseop');
 const recastai = require('recastai')


exports.save = function(result, profil)
{
	// Instanciation client
	var client = new rando.randonneurs(profil, 'microsoft')
	
	//A : prenom
	if(result.getMemory('prenom') != null)
	{
		client.membres[0].prenom = result.getMemory('prenom').raw;
	} else if (result.getMemory('personne') != null){
		client.membres[0].prenom = result.getMemory('personne').fullname;
	};
	
	// A : age
	if(result.getMemory('age')!=null)
	{
		client.membres[0].age =result.getMemory('age').years;
	}
	if(result.getMemory('age_nombre')!=null)
	{
		client.membres[0].age =result.getMemory('age_nombre').scalar;
	}
	
	// A & C : niveau physique
	if(result.getMemory('choix') == 'niveau physique'){
		if (result.getMemory('nv_1_rectif') != null){
			client.nvPhysique = 1;
		} else if (result.getMemory('nv_2_rectif') != null){
			client.nvPhysique = 2;
		} else if (result.getMemory('nv_3_rectif') != null){
			client.nvPhysique = 3;
		} else if (result.getMemory('nv_4_rectif') != null){
			client.nvPhysique = 4;
		} 
	} else {
		if (result.getMemory('nv_physique_1') != null){
			client.nvPhysique = 1;
		} else if (result.getMemory('nv_physique_2') != null){
			client.nvPhysique = 2;
		} else if (result.getMemory('nv_physique_3') != null){
			client.nvPhysique = 3;
		} else if (result.getMemory('nv_physique_4') != null){
			client.nvPhysique = 4;
		} 
	};
	
	// A & C : niveau randonneur
	if(result.getMemory('choix') == 'niveau randonneur'){
		if (result.getMemory('nv_1_rectif') != null){
			client.nvRandonneur = 1;
		} else if (result.getMemory('nv_2_rectif') != null){
			client.nvRandonneur = 2;
		} else if (result.getMemory('nv_3_rectif') != null){
			client.nvRandonneur = 3;
		} else if (result.getMemory('nv_4_rectif') != null){
			client.nvRandonneur = 4;
		} 
	} else {
		if (result.getMemory('nv_randonneur_1') != null){
			client.nvRandonneur = 1;
		} else if (result.getMemory('nv_randonneur_2') != null){
			client.nvRandonneur = 2;
		} else if (result.getMemory('nv_randonneur_3') != null){
			client.nvRandonneur = 3;
		} else if (result.getMemory('nv_randonneur_4') != null){
			client.nvRandonneur = 4;
		};
	};
	
	// budget
	if (result.getMemory('budget') != null){
		client.nvBudget = result.getMemory('budget').amount;
	} else if (result.getMemory('budget_nombre') != null) {
		client.nvBudget = result.getMemory('budget_nombre').scalar;
	} else {
		client.nvBudget = 1000000;
	};
	
	// eloignement
	if(result.getMemory('distance_rectif') != null){
		client.nvEloignement = Math.floor(result.getMemory('distance_rectif').meters/1000);
	} else if (result.getMemory('distance') != null){
		client.nvEloignement = Math.floor(result.getMemory('distance').meters/1000);
	} else if (result.getMemory('lieu') != null){
		var latP = 49.9;
		var lonP = 2.3;
		var lat = result.getMemory('lieu').lat;
		var lon = result.getMemory('lieu').lng;
		var deltaLat = (latP-lat);
		var deltaLon = (lonP-lon);
		client.nvEloignement = Math.floor(Math.sqrt(Math.pow(deltaLat,2) + Math.pow(deltaLon,2))*111);
	} else if (result.getMemory('duree') != null){
		client.nvEloignement = Math.floor(result.getMemory('duree').hours*900);
	} else {
		client.nvEloignement = 0;
	};
	
	// details
	//Spécification niveau difficulte
	if(client.profil == 'A' || client.profil == 'C')
	{
		client.rando.nvDifficulte = 0;
	} 
	if(result.getMemory('nv_difficulte_1')!=null || result.getMemory('nv_difficulte_1_rectif') != null){
		client.rando.nvDifficulte = 1;
	} else if(result.getMemory('nv_difficulte_2')!=null || result.getMemory('nv_difficulte_2_rectif') != null){
		client.rando.nvDifficulte = 2;
	} else if(result.getMemory('nv_difficulte_3')!=null || result.getMemory('nv_difficulte_3_rectif') != null){
		client.rando.nvDifficulte = 3;
	} else if(result.getMemory('nv_difficulte_4')!=null || result.getMemory('nv_difficulte_4_rectif') != null){
		client.rando.nvDifficulte = 4;
	};
	
	// Specifictation niveau evasion
	if(client.profil == 'A' || client.profil == 'C'){
		client.rando.nvEvasion = 0;
	};
	// TO DO : 4 niveaux pour l'évasion
	if (result.getMemory('nv_evasion_1')!=null || result.getMemory('nv_evasion_1_rectif') != null){
		client.rando.nvEvasion = 1;
	} else if (result.getMemory('nv_evasion_2')!=null || result.getMemory('nv_evasion_2_rectif') != null){
		client.rando.nvEvasion = 4;
	};
	
	// Specification niveau activites
	if(client.profil == 'A' || client.profil == 'C'){
		client.rando.nvActivites = 1;
	};
	if (result.getMemory('activite_1')!=null){
		client.rando.nvActivites = 2;
		if (result.getMemory('activite_2')!=null){
			client.rando.nvActivites = 3;
			if (result.getMemory('activite_3')!=null){
				client.rando.nvActivites = 4;
			};
		};		
	};
	
	// Specification niveau découvertes
	if(client.profil == 'A' || client.profil == 'C'){
		client.rando.nvDecouvertes = 1;
	};
	if (result.getMemory('decouverte_1')!=null){
		client.rando.nvDecouvertes = 2;
		if (result.getMemory('decouverte_2')!=null){
			client.rando.nvDecouvertes = 3
			if (result.getMemory('decouverte_3')!=null){
				client.rando.nvDecouvertes = 4;
			};
		};	
	};
	
	
	
	// ajustement reco
	if (result.getMemory('ajustement') != null){
		if(client.nvPhysique != null && client.nvRandonneur != null){
			[client.rando.siteNum, client.rando.siteTitre, client.rando.imageUrl, client.rando.recoIntro, client.rando.recoDifficulte, client.rando.recoEvasion, client.rando.recoActivites, client.rando.recoDecouvertes, client.rando.recoConclusion] = ly.requete(client);
			client.dernierSite = client.rando.siteNum;
		};
		client.indicateurNouveauSite = true;
		client.rando.ajustNvActivites = 0;
		client.rando.ajustNvDecouvertes = 0;
		client.rando.ajustNvDifficulte = 0;
		client.rando.ajustNvEvasion = 0;
		switch(result.getMemory('ajustement').value)
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
	};
	
	if(client.nvPhysique != null && client.nvRandonneur != null){
		[client.rando.siteNum, client.rando.siteTitre, client.rando.imageUrl, client.rando.recoIntro, client.rando.recoDifficulte, client.rando.recoEvasion, client.rando.recoActivites, client.rando.recoDecouvertes, client.rando.recoConclusion] = ly.requete(client);
		client.dernierSite = client.rando.siteNum;
	};
	
	return(client);
	
};
	