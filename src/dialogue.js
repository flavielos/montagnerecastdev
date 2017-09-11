const ly = require('./lien_yseop');

exports.reponseActionDone = function(slug, client, choix)
{
	var type = 'text';
	var content = '';
	switch(slug)
	{
		case 'greetings':
		type = 'quickReplies';
		content = {
          title: 'Bonjour ! Choisissez un profil type ;)',
          buttons: [
            {
				value: 'A',
				title: 'Jeune célibataire',
            }
          ],
        };
		break;
		
		case 'choisir-profil-type':
		switch(client.profil)
		{
			case 'A':
			content = 'Je suis toujours ravi de rencontrer de nouveaux passionnés de montagne !';
			content += '\nJ\'aimerais faire votre connaissance, comment vous-appelez vous ?';
			
			case 'B':	
			case 'C':
			case 'D':
		};
		break;
		
		case 'nom':
		content = 'Enchanté ' + client.membres[0].prenom + ' !';
		content += '\nQuel âge avez-vous ?';
		break;
		
		
		case 'nombre-age':		
		case 'age':
		var seuil =[2, 10, 80, 70];
		var age = client.membres[0].age;
		if (age < seuil[0]){
			content = age + ' ans ! Je vous félicite de faire découvrir la montagne à un enfant aussi jeune. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 1500m.'
		} else if (age < seuil[1]){
			content = age + ' ans ! Je vous félicite de faire découvrir la montagne à un enfant aussi jeune. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 3000m.'
		} else if (age > seuil[2]){
			content = 'A ' + age + ' ans, l\'air de la montagne vous fera le plus grand bien. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 1500m.'
		} else if (age > seuil[3]){
			content = 'A ' + age + ' ans, l\'air de la montagne vous fera le plus grand bien. Pour votre santé, je ne pourrai vous conseiller que des sites d\'altitude inférieure à 3000m.'
		} else {
			content = age + ' ans est l\'âge idéal pour la marche en montagne.'
		};
		content += '\nComment qualifieriez-vous votre niveau physique ?';
		break;
		
		case 'niveau-physique':
		var nv = client.nvPhysique;
		switch(nv)
		{
			case 1:
			content = 'La marche en montagne sera pour vous une bonne reprise du sport :wink: \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
			break;
			case 2:
			content = 'En tant que sportifs occasionnels, vous allez apprécier mon sport préféré.';
			break;
			case 3:
			content = 'En tant que sportifs réguliers, vous allez apprécier mon sport préféré.';
			break;
			case 4:
			content = 'Vous êtes de vrais athlètes ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer :wink:';
			break;
		};
		content +='\n Comment qualifieriez-vous votre niveau d\'expérience en randonnée ?';
		break;
		
		case 'niveau-randonneur':
		var nv = client.nvRandonneur;
		switch(nv)
		{
			case 1:
			content = 'Je suis ravi de vous faire découvrir mon sport préféré ! \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
			break;
			case 2:
			content = 'J\'espère que ce trek confirmera votre amour pour la montagne';
			break;
			case 3:
			content = 'J\'espère que ce trek confirmera votre amour pour la montagne';
			break;
			case 4:
			content = 'Vous êtes des experts ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer :wink:';
			break;
		};
		content +='\nQuel est votre budget par personne ?';
		break;
		
		case 'nombre-budget':
		case 'pas-de-preference-budget':
		case 'budget':
		var nv = client.nvBudget;
		if (nv == 0){
			content = 'Ok, nous discuterons du prix plus tard.';
		} else if (nv <= 100){
			content = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à la France et son voisinage';
		} else if(nv <= 500){
			content = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à l\’Europe et son voisinage';
		} else if (nv == 1000000) {
			content = 'Ok, j\'aime avoir carte blanche ! :money_mouth_face:';
		} else {
			content = 'En voilà un budget intéressant !';
		};
		content += '\nCette randonnée, vous la voyez plutôt en France ? En Europe ? Plus loin ?';
		break;

		case 'pas-de-preference-eloignement' :
		case 'eloignement':
		content = 'Ok, je vais vous trouver un endroit sympa !';
		var profil = client.profil;
		if (profil == 'A' || profil == 'C'){
			content += '\n Maintenant que l\'on se connait un peu mieux, qu\'est-ce qui vous ferait plaisir pendant cette randonnée ?';
		} else {
			//TO DO
		};
		break;	
		
		case 'details':
		content = 'D\'accord ' + client.membres[0].prenom + ', je résume :';
		//niveau physique
		content += '\nVous êtes un sportif ';
		switch(client.nvPhysique){
			case 1:
			content += 'débutant'
			break;
			case 2:
			content += 'occasionnel'
			break;
			case 3:
			content += 'régulier'
			break;
			case 4:
			content += 'de haut niveau'
			break;			
		};
		// niveau randonneur
		content += ' qui ';
		switch(client.nvRandonneur){
			case 1:
			content += 'part en randonnée pour la première fois.'
			break;
			case 2:
			content += 'a déjà fait quelques randonnées.'
			break;
			case 3:
			content += 'a déjà fait plusieurs randonnées.'
			break;
			case 4:
			content += 'a déjà fait de multiples randonnées.'
			break
		};
		//niveau budget
		if (client.nvBudget != 1000000){
			content += '\nVous avez un budget d\'environ ' + client.nvBudget + ' euros.';
		};
		// niveau eloignement
		if (client.nvEloignement != 0){
			content += '\nVous aimeriez partir ';
			if (client.nvEloignement <= 500){
				content += 'en France :flag-cp:'
			} else if (client.nvEloignement <= 2000){
				content += 'en Europe :flag-eu:'
			} else {
				content += 'à la découverte du monde :airplane:'
			};
		};
		//niveau difficulte
		switch(client.rando.nvDifficulte)
		{
			case 1:
			content += '\nVous désirez un parcours très facile.'
			break;
			case 2:
			content += '\nVous désirez un parcours assez facile.'
			break;
			case 3:
			content += '\nVous désirez un parcours moyennement difficile.'
			break;
			case 4:
			content += '\nVous désirez un parcours très difficile.'
			break;
		};
		//niveau evasion
		switch(client.rando.nvEvasion)
		{
			case 1:
			content += '\nVous voulez un lieu accessible facilement'
			break;
			case 4:
			content += '\nVous voulez un lieu isolé pour vous ressourcer.'
			break;
		};
		// niveau activites
		if (client.rando.nvActivites == 2){
			content += '\nVous aimeriez pratiquer quelques activites :bow_and_arrow:'
		} else if(client.rando.nvActivites >2){
			content += '\nVous aimeriez pratiquer beaucoup d\'activites :rowboat:'
		};
		// niveau decouvertes
		if (client.rando.nvDecouvertes == 2){
			content += '\nVous souhaitez faire quelques découvertes :evergreen_tree:'
		} else if(client.rando.nvDecouvertes >2){
			content += '\nVous souhaitez faire beaucoup de découvertes :chipmunk:'
		};
		content += '\nCe résumé vous correspond-il ?'
		break;
		
		case 'ajuster-reco':
		case 'rectifier-details':
		case 'rectifier-niveau':
		case 'rectifier-lieu':		
		case 'recap-valide' :
		var site;
		[content, site] = ly.requete(client);
		content += '\nCe trek vous plairait-il ?';
		client.dernierSite = site;
		break;
		
		case 'recap-invalide':
		type = 'quickReplies';
		content = {
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
		type = 'quickReplies';
		content = {
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
		type = 'quickReplies';
		content = {
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
		content = 'Bien, si vous souhaitez réserver dès maintenant, cliquez ici.'
		content = '\nJ\'espère vous revoir bientôt !';
		break;
		
		case 'goodbye':
		content = 'Au revoir !'
		break;
		
		case 'insultes':
		content = 'Ce n\'est pas très gentil de dire ça';
		break;
		
		case 'help':
		content = 'Réponds à mes questions pour que je te recommande le trek de tes rêves !';
		break;
		
		case 'none':
		content = 'Je ne sais pas répondre à cette question, mon domaine de spécialisation est la randonnée en montagne';
		break;
	};
	
	
	return([type, content]);
};

exports.reponseActionNotDone = function(slug, client)
{
	var type = 'quickReplies';
	var content = '';
	switch(slug)
	{
		case 'age':
		content = {
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
		content = {
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
		content = {
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
		content = {
			  title: 'Je ne suis pas sûr d\'avoir bien saisi :confused: Dans quel tranche se situe votre budget par personne ? ',
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
					value : '2000€',
					title : '+ de 1000€'
				}
			  ],
			};
		break;
		
		case 'eloignement':
		content = {
			  title: 'Oups...Je n\'ai pas compris. Pourriez-vous choisir l\'éloignement qui vous conviendrait le mieux parmi ces propositions ?',
			  buttons: [
				{
					value: 'France',
					title: 'France',
				},
				{
					value: 'Europe',
					title: 'Europe',
				},
				{
					value : 'Monde',
					title : 'Monde'
				},
				{
					value : 'Peu importe',
					title : 'Peu importe'
				}
			  ],
			}
		break;

		
	};
	return([type, content]);
};