const ly = require('./lien_yseop');

exports.reponseActionDone = function(slug, client, choix)
{
	var type = ['text'];
	var content = [];
	switch(slug)
	{
		case 'greetings':
		type = ['quickReplies'];
		content = [{
		  title: 'Bonjour ! Choisissez un profil type.',
		  buttons: [
			{
				value: 'A',
				title: 'Célibataire',
			},
			{
				value : 'B',
				title : 'Famille'
			},
			{
				value : 'C',
				title: 'Couple retraité'
			},
			{
				value : 'D',
				title : 'Groupe de potes'
			}
		  ],
		}];
		break;
	
		case 'choisir-profil-type':
		switch(client.profil)
		{
			case 'A':
			content = ['Je suis toujours ravi de rencontrer de nouveaux passionnés de montagne !'];
			content[0] += '</br>J\'aimerais faire votre connaissance, comment vous-appelez vous ?';
			break;
			
			case 'C':	
			content = ['Heureux de vous revoir ' + client.membres[0].prenom + ' !'];
			content[0] += '</br>Je vous rappelle que, compte-tenu de votre âge, il est plus prudent de ne pas dépasser les 3500m.'
			content[0] += '</br>Faisons un peu mieux connaissance pour que je puisse vous recommander le trek le mieux adapté à votre couple.';
			content[0] += '</br>Comment qualifieriez-vous votre niveau physique ?'
			break;
			
			case 'B':
			content = ['Bonjour ' + client.membres[0].prenom + ' ! Ravi de vous revoir !'];
			content[0] += '</br>Je vois que la petite Marie a maintenant '+ client.membres[3].age +' ans. Vous allez pouvoir lui faire découvrir des treks jusqu\'à 3500m !';
			content[0] += '</br>Dites-moi, quel est votre budget par personne pour cette nouvelle aventure en famille ?';
			break;
			
			case 'D':
			content = ['Salut ' + client.membres[0].prenom + ' !'];
			content[0] += '</br>Je vais tout faire pour que vos amis et vous profitiez de cette nouvelle aventure autant que de celle au Mont Fuji l\'année dernière.';
			content[0] += '</br>Dites-moi, quel est votre budget par personne pour cette nouvelle aventure entre amis ?';
			break;
		};
		break;
		
		case 'nom':
		content[0] = 'Enchanté ' + client.membres[0].prenom + ' !';
		content[0] += '</br>Quel âge avez-vous ?';
		break;
		
		
		case 'nombre-age':		
		case 'age':
		var seuil =[2, 10, 80, 70];
		var age = client.membres[0].age;
		if (age < seuil[0]){
			content = ['Je vous félicite de faire découvrir la montagne à un enfant aussi jeune. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 1500m.']
		} else if (age < seuil[1]){
			content =['Je vous félicite de faire découvrir la montagne à un enfant aussi jeune. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 3000m.']
		} else if (age > seuil[2]){
			content =['L\'air de la montagne vous fera le plus grand bien. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 1500m.']
		} else if (age > seuil[3]){
			content =['L\'air de la montagne vous fera le plus grand bien. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 3000m.']
		} else {
			content = ['Vous avez l\'âge idéal pour la marche en montagne.']
		};
		content[0] += '</br>Comment qualifieriez-vous votre niveau physique général?';
		break;
		
		case 'niveau-physique':
		var nv = client.nvPhysique;
		switch(nv)
		{
			case 1:
			content = ['La marche en montagne sera pour vous une bonne reprise du sport. </br> Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile'];
			break;
			case 2:
			content = ['En tant que sportifs occasionnels, vous allez apprécier mon sport préféré.'];
			break;
			case 3:
			content = ['En tant que sportifs réguliers, vous allez apprécier mon sport préféré.'];
			break;
			case 4:
			content = ['Vous êtes de vrais athlètes ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer :wink:'];
			break;
		};
		content[0] +='</br> Comment qualifieriez-vous votre niveau d\'expérience en randonnée ?';
		break;
		
		case 'niveau-randonneur':
		var nv = client.nvRandonneur;
		switch(nv)
		{
			case 1:
			content = ['Je suis ravi de vous faire découvrir mon sport préféré ! </br> Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile'];
			break;
			case 2:
			content = ['J\'espère que ce trek confirmera votre amour pour la montagne'];
			break;
			case 3:
			content = ['J\'espère que ce trek confirmera votre amour pour la montagne'];
			break;
			case 4:
			content = ['Vous êtes des experts ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer :wink:'];
			break;
		};
		content[0] +='</br>Quel est votre budget par personne ?';
		break;
		
		case 'nombre-budget':
		case 'pas-de-preference-budget':
		case 'budget':
		var nv = client.nvBudget;
		if (nv == 0){
			content[0] = 'Ok, nous discuterons du prix plus tard.';
			content[0] += '</br>Cette randonnée, vous la voyez plutôt en France ? En Europe ? Plus loin ?';
		} else if (nv <= 100){
			content[0] = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à la France et son voisinage';
			content[0] += '</br>Cette randonnée, vous la voyez plutôt en France ? En Europe ?';	
		} else if(nv <= 500){
			content[0] = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à l\’Europe et son voisinage';
			content[0] += '</br>Cette randonnée, vous la voyez plutôt en France ? En Europe ?';
		} else if (nv == 1000000) {
			content[0] = 'Ok, j\'aime avoir carte blanche !';
			content[0] += '</br>Cette randonnée, vous la voyez plutôt en France ? En Europe ? Plus loin ?';
		} else {
			content[0] = 'En voilà un budget intéressant !';
			content[0] += '</br>Cette randonnée, vous la voyez plutôt en France ? En Europe ? Plus loin ?';
		};
		break;

		case 'pas-de-preference-eloignement' :
		case 'eloignement':
		content[0] = 'Ok, je vais vous trouver un endroit sympa !';
		var profil = client.profil;
		if (profil == 'A' || profil == 'C'){
			content[0] += '</br> Maintenant que l\'on se connait un peu mieux, qu\'est-ce qui vous ferait plaisir pendant cette randonnée ?';
			break;
		};
		
		case 'details':
		var adjNvP;
		switch(client.nvPhysique){
			case 1:
			adjNvP = 'débutant';
			break;
			case 2:
			adjNvP = 'occasionnel';
			break;
			case 3:
			adjNvP = 'régulier';
			break;
			case 4:
			adjNvP = 'performant';
			break;			
		};
		var adjNvR;
		switch(client.nvRandonneur){
			case 1:
			adjNvR = 'une ou deux';
			break;
			case 2:
			adjNvR = 'quelques';
			break;
			case 3:
			adjNvR = 'plusieurs';
			break;
			case 4:
			adjNvR = 'de multiples';
			break
		};
		//Niveau difficulte
		var adjNvDi;
		switch(client.rando.nvDifficulte)
		{
			case 1:
			adjNvDi = 'très facile'
			break;
			case 2:
			adjNvDi = 'assez facile'
			break;
			case 3:
			adjNvDi = 'moyennement difficile'
			break;
			case 4:
			adjNvDi = 'très difficile'
			break;
		};
		//Niveau evasion
		var adjNvEv;
		switch(client.rando.nvEvasion)
		{
			case 1:
			adjNvEv = 'accessible facilement'
			break;
			case 4:
			adjNvEv = 'isolé'
			break;
		};
		// niveau activites
		var adjNvAc;
		if (client.rando.nvActivites == 2){
			adjNvAc = 'quelques';
		} else if(client.rando.nvActivites >2){
			adjNvAc = 'plusieurs';
		};
		// niveau decouvertes
		var adjNvDe;
		if (client.rando.nvDecouvertes == 2){
			adjNvDe = 'quelques';
		} else if(client.rando.nvDecouvertes >2){
			adjNvDe = 'plusieurs';
		};
		
		// recap
		content[0] = 'D\'accord '+ client.membres[0].prenom +', je résume:'
		switch(client.profil){
			case 'A':
			case 'C':
			if (client.profil == 'A'){
				content[0] += '</br>Vous êtes un sportif ' + adjNvP +' qui a fait '+ adjNvR +' randonnées par le passé.';
			}; 
			if (client.profil == 'C'){
				content[0] += '</br>Vous êtes des sportifs ' + adjNvP +'s qui avez fait '+ adjNvR +' randonnées par le passé.';
			};
			if (adjNvDi != null){
				content[0] += '</br>Vous souhaitez un trek ' + adjNvDi + '.';
			};
			if (adjNvEv != null){
				content[0] += '</br>Vous aimeriez un lieu ' + adjNvEv +'.';
			};
			if (adjNvAc != null){
				content[0] += '</br>Vous désirez pratiquer ' + adjNvAc +' activités.';
			};
			if (adjNvDe != null){
				content[0] += '</br>Vous voulez faire ' + adjNvDe +' découvertes.';
			};
			if (client.nvBudget != 1000000){
				content[0] += '</br>Vous avez un budget de maximum ' + client.nvBudget + ' euros.';
			};
			break;
			
			case 'B':
			case 'D':
			content[0] += '</br>Je me souviens que vous êtes des sportifs ' + adjNvP +'s qui avez fait '+ adjNvR +' randonnées par le passé.';
			content[0] += '</br>Votre dernier trek était ' + adjNvDi +' et dans un lieu ' + adjNvEv + '.';
			content[0] += '</br>Vous aviez fait ' + adjNvDe + ' découvertes et pratiqué '+ adjNvDe +' activités.';
			if (client.nvBudget != 1000000){
				content[0] += '</br>Vous avez, cette fois-ci, un budget d\'environ ' + client.nvBudget + ' euros.';
			};
			break;
		};
		

		// niveau eloignement
		if (client.nvEloignement != 0){
			content[0] += '</br>Vous aimeriez partir ';
			if (client.nvEloignement <= 500){
				content[0] += 'en France.'
			} else if (client.nvEloignement <= 2000){
				content[0] += 'en Europe.'
			} else {
				content[0] += 'à la découverte du monde.'
			};
		};

		content[0] += '</br>Ce résumé vous correspond-il ?'
		break;
		
		case 'ajuster-reco':
		case 'rectifier-details':
		case 'rectifier-niveau':
		case 'rectifier-lieu':		
		case 'recap-valide' :
		var site;
		var imageURL;
		var reco;
		[reco, site, imageURL] = ly.requete(client);
		content[1] = reco + '</br>Ce trek vous plairait-il ?';
		content[0]= imageURL;
		type[0]='picture';
		type[1]='text';
		client.dernierSite = site;
		break;
		
		case 'recap-invalide':
		type = ['quickReplies'];
		content[0] = {
				title : 'Zut...qu\'est-ce que j\'ai mal compris ?',
				buttons :[
					{
						title : 'Niveau physique',
						value : 'niveau physique'
					},
					{
						title : 'Expérience en trek',
						value : 'niveau randonneur'
					},
					{
						title : 'Eloignement',
						value : 'niveau eloignement'
					},
					{
						title : 'Difficulté',
						value : 'niveau difficulte'
					},
					{
						title : 'Désir d\'évasion',
						value : 'niveau evasion'
					}
				]
			};
		break;
		
		case 'selectionner-ajustement-donnees':
		if (choix == 'niveau physique'){
			var question = 'Quel sportif êtes-vous ?';
			var value1 = 'Débutant';
			var title1 = 'Débutant';
			var value2 = 'Sportif occasionnel';
			var title2 = 'Occasionnel';
			var value3 = 'Sportif régulier';
			var title3 = 'Régulier';
			var value4 = 'Athlète';
			var title4 = 'Athlète';
		} else if (choix == 'niveau randonneur'){
			var question = 'Par le passé, combien de randonnées avez-vous faites ?';
			var value1 = 'Débutant';
			var title1 = 'Aucune';
			var value2 = 'Sportif occasionnel';
			var title2 = 'Quelques unes';
			var value3 = 'Sportif régulier';
			var title3 = 'Plusieurs';
			var value4 = 'Athlète';
			var title4 = 'Beaucoup';
		} else if (choix == 'niveau difficulte'){
			var question = 'Quelle difficulté souhaitez-vous rencontrer pendant votre trek ?';
			var value1 = 'randonnée très facile';
			var title1 = 'Très facile';
			var value2 = 'randonnée cool';
			var title2 = 'Assez facile';
			var value3 = 'randonnée assez difficile';
			var title3 = 'Assez difficile';
			var value4 = 'randonnée de malade';
			var title4 = 'Très difficile';
		} else if (choix == 'niveau eloignement'){
			var question = 'Dans quels environs souhaitez-vous faire votre trek ?';
			var value1 = '0 km';
			var title1 = 'France';
			var value2 = '100 km';
			var title2 = 'Europe';
			var value3 = '1000 km';
			var title3 = 'Monde';
			var value4 = '0 km';
			var title4 = 'Peu importe';
		} else if (choix == 'niveau evasion'){
			var question = 'Quel type de site aimeriez-vous en terme d\isolement ?';
			var value1 = 'une randonnée facilement accessible';
			var title1 = 'Facilement accessible';
			var value2 = 'une randonnée facilement accessible';
			var title2 = 'Accessible';
			var value3 = 'loin de la ville';
			var title3 = 'Isolé';
			var value4 = 'loin de la ville';
			var title4 = 'Très isolé';
		};
		type = ['quickReplies'];
		content[0] = {
				  title: question,
				  buttons: [
					{
						value: value1,
						title: title1,
					},
					{
						value: value2,
						title: title2,
					},
					{
						value : value3,
						title : title3
					},
					{
						value : value4,
						title : title4
					}
				  ]
				};
		break;
		
		case 'reco-invalide':
		type = ['quickReplies'];
		content[0] = {
          title: 'Zut...Qu\'est-ce qui ne vous convient pas ?',
          buttons: [
            {
				value: 'Diminuer difficulte',
				title: 'Trop difficile',
            },
            {
				value: 'Augmenter difficulte',
				title: 'Trop facile',
            },
			{
				value : 'Augmenter decouvertes',
				title : 'Pas assez de découvertes'
			},
			{
				value : 'Augmenter activites',
				title : 'Pas assez d\'activités'
			},
			{
				value : 'Augmenter evasion',
				title : 'Trop fréquenté'
			},
			{
				value : 'Diminuer evasion',
				title : 'Trop isolé'
			}
          ],
        };
		break;
		
		case 'reco-valide':
		content[0] = 'Bien, si vous souhaitez réserver dès maintenant, cliquez ici.'
		content[0] += '</br>J\'espère vous revoir bientôt !';
		break;
		
		case 'goodbye':
		content[0] = 'Au revoir !';
		break;
		
		case 'insultes':
		content[0] = 'Ce n\'est pas très gentil de dire ça';
		break;
		
		case 'help':
		content[0] = 'Réponds à mes questions pour que je te recommande le trek de tes rêves !';
		break;
		
		case 'none':
		content[0] = 'Je ne sais pas répondre à cette question, mon domaine de spécialisation est la randonnée en montagne';
		break;
	};
	
	
	return([type, content]);
};

exports.reponseActionNotDone = function(slug, client)
{
	var type = ['quickReplies'];
	var content = [];
	switch(slug)
	{
		case 'age':
		content[0] = {
			  title: 'Je ne suis qu\'un jeune bot, est-ce que vous pourriez choisir une tranche d\'âge ?',
			  buttons: [
				{
					title: '- de 2 ans',
					value: '2 ans',
				},
				{
					title: '3 - 10 ans',
					value: '5 ans',
				},
				{
					title : '11 - 70 ans',
					value : '50 ans'
				},
				{
					title : '71 - 80 ans',
					value : '75 ans'
				},
				{
					title : '+ de 80 ans',
					value : '90 ans'
				}
			  ],
			};
		break;
		
		case 'niveau-physique':
		content[0] = {
			title: 'Oups...Je n\'ai pas compris. Pourriez-vous choisir ce qui correspond le mieux à votre niveau ?',
			buttons: [
			{
				value: 'Débutant',
				title: 'Débutant',
			},
			{
				value: 'Sportif occasionnel',
				title: 'Sportif occasionnel',
			},
			{
				value : 'Sportif régulier',
				title : 'Sportif régulier'
			},
			{
				value : 'Athlète',
				title : 'Athlète'
			}
			],
		};
		break;
		
		case 'niveau-randonneur':
		content[0] = {
			title: 'Oups...Je n\'ai pas compris. Pourriez-vous choisir ce qui correspond le mieux à votre niveau ?',
			buttons: [
			{
				value: 'Débutant',
				title: 'Débutant',
			},
			{
				value: 'Sportif occasionnel',
				title: 'Peu expérimenté',
			},
			{
				value : 'Sportif régulier',
				title : 'Confirmé'
			},
			{
				value : 'Athlète',
				title : 'Expert'
			}
			],
		};
		break;
		
		case 'budget':
		content[0] = {
			  title: 'Je ne suis pas sûr d\'avoir bien saisi... Dans quel tranche se situe votre budget par personne ? ',
			  buttons: [
				{
					value: '100€',
					title: '- de 100€',
				},
				{
					value: '500€',
					title: '101 - 500€',
				},
				{
					value : '1000€',
					title : '501 - 1000€'
				},
				{
					value : '5000€',
					title : '+ de 1000€'
				}
			  ],
			};
		break;
		
		case 'eloignement':
		content[0] = {
			  title: 'Oups...Je n\'ai pas compris. Pourriez-vous choisir l\'éloignement qui vous conviendrait le mieux parmi ces propositions ?',
			  buttons: [
				{
					value: 'en France',
					title: 'France',
				},
				{
					value: 'en Europe',
					title: 'Europe',
				},
				{
					value : 'en Asie',
					title : 'Monde'
				},
				{
					value : 'en France',
					title : 'Peu importe'
				}
			  ],
			}
		break;

		
	};
	return([type, content]);
};