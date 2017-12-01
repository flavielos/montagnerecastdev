exports.tree = function (client) {
	var treeQu = {
		"nom" : {
			"true" : {"type" : "text", "content" : "Pour commencer, comment vous appelez-vous ?"},
			"false" : {"type" : "text", "content" : "Pourriez-vous reformuler pour m\'aider à mieux comprendre votre nom ?"}
		},
		"age" : {
			"true" : {"type" : "text", "content" : "Quel âge avez-vous ?"},
			"false" : {"type" : "quickReplies", "content" : {
				  title: 'Est-ce que vous pourriez choisir la tranche d\'âge qui vous correspond ?',
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
				  ]
				}
			}
		},
		"niveau-randonneur" : {
			"true" : {"type" : "text", "content" : "Comment qualifieriez-vous votre niveau d\'expérience en randonnée ?"},
			"false" : {
				"type" : "quickReplies",
				"content" : {
					title: 'Pourriez-vous choisir ce qui correspond le mieux à votre niveau de randonneur ?',
					buttons: [
					{
						value: 'Débutant',
						title: 'Débutant',
					},
					{
						value: 'Je fais du sport de temps en temps',
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
				}
			}
		},
		"niveau-physique" : {
			"true" : {"type" : "text", "content" : "Comment qualifieriez-vous votre niveau physique général ?"},
			"false" : {
				"type" : "quickReplies",
				"content" :{
					title: 'Pourriez-vous choisir ce qui correspond le mieux à votre niveau sportif ?',
					buttons: [
					{
						value: 'Débutant',
						title: 'Peu sportif',
					},
					{
						value: 'Je fais du sport de temps en temps',
						title: 'Sportif occasionnel',
					},
					{
						value : 'Sportif régulier',
						title : 'Sportif régulier'
					},
					{
						value : 'Athlète',
						title : 'Sportif de haut niveau'
					}
					],
				}
			}
		},
		"budget" : {
			"true" : {"type" : "text", "content" : "Maintenant que l\'on se connait un peu mieux, quel est votre budget par personne pour ce trek de quelques jours ?"},
			"false" : {
				"type" : "quickReplies",
				"content" : {
				  title: 'Dans quel tranche se situe votre budget par personne pour ce trek de quelques jours ? ',
				  buttons: [
					{
						value: '100 euros',
						title: '- de 100€',
					},
					{
						value: '500 euros',
						title: '101 - 500€',
					},
					{
						value : '1000 euros',
						title : '501 - 1000€'
					},
					{
						value : '5000 euros',
						title : '+ de 1000€'
					}
				  ],
				}
			}
		},
		"eloignement" : {
			"true" : {'type' : 'text', 'content' : exports.questionEloignement(client)},
			"false" : {
				"type" : "quickReplies",
				"content" : {
				
				  title: 'Pourriez-vous choisir la région du monde qui vous attire le plus parmi ces propositions ?',
				  buttons: [
					{
						value: 'en France',
						title: 'en France',
					},
					{
						value: 'en Europe',
						title: 'en Europe',
					},
					{
						value : 'en Asie',
						title : 'en Asie'
					},
					{
						value : 'en Afrique',
						title : 'en Afrique'
					},
					{
						value : 'en Amérique',
						title : 'en Amérique'
					},
					{
						value : 'en Océanie',
						title : 'en Australie'
					},
					{
						value : 'en France',
						title : 'Peu importe'
					}
				  ],
				}
			}
		},
		"details" : {
			"true" : {"type" : "text", "content" : "Dernière question, pourriez-vous m\'en dire plus sur le trek de vos rêves ? <br/>Souhaitez-vous vous évader ? vous challenger ? vous cultiver ?"},
			"false" : {
				"type" : "quickReplies",
				"content" : {
				  title: 'Quel type de trek vous plairait le plus ?',
				  buttons: [
					{
						value: 'un trek facile et loin de la ville',
						title: 'Facile et dépaysant',
					},
					{
						value: 'Un trek cool, voir des animaux comme des marmottes et des lacs',
						title: 'Assez facile et plein de découvertes',
					},
					{
						value : 'Un trek plutôt difficile pour faire du kayak, du rafting, du ski',
						title : 'Plutôt difficile avec des activités'
					},
					{
						value : 'une rando de fou dans un lieu isolé',
						title : 'De niveau élevé, loin de la civilisation'
					}
				  ],
				}
			}
		},
		"recap-valide" : {
			"true" : {
				"type" : "quickReplies",
				"content" : {
				  title: 'Ce résumé vous convient-il ?',
				  buttons: [
					{
						value: 'Oui',
						title: 'Oui'
					},
					{
						value: 'Non',
						title: 'Non'
					}
				  ],
				}
			},
			"false" : {
				"type" : "quickReplies",
				"content" : {
				  title: 'Ce résumé vous convient-il ?',
				  buttons: [
					{
						value: 'Oui',
						title: 'Oui'
					},
					{
						value: 'Non',
						title: 'Non'
					}
				  ],
				}
			}
		},
		"intro-valide" : {
			"true" : {'type' : 'text', 'content' : ''},
			"false" : {'type' : 'text', 'content' : ''}
		},
		"selectionner-ajustement-donnees" : {
			"true" : {'type' : 'quickReplies', 'content' : {
					title : 'Que souhaitez-vous modifier ?',
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
							title : 'Evasion',
							value : 'niveau evasion'
						}
					]
				}
			},
			"false" : {'type' : 'text', 'content' : {
					title : 'Que souhaitez-vous modifier ?',
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
				}
			}
		},
		"rectifier-lieu" : {
			"true" : {'type' : 'text', 'content' : ''},
			"false" : {'type' : 'text', 'content' : ''}
		},
		"ajuster-reco" : {
			"true" : {'type' : 'text', 'content' : ''},
			"false" : {'type' : 'text', 'content' : ''}
		},
		"info" : {
			"true" : {
				'type' : 'quickReplies',
				'content' : {
					  title: 'Que voulez-vous détailler ?',
					  buttons: [
						{
							value: 'niveau difficulte',
							title: 'Difficulté',
						},
						{
							value: 'niveau evasion',
							title: 'Evasion',
						},
						{
							value : 'niveau activites',
							title : 'Activités'
						},
						{
							value : 'niveau decouvertes',
							title : 'Découvertes'
						}
					  ]
				}
			},
			"false" : {
				'type' : 'quickReplies', 
				'content' : {
					  title: 'Que voulez-vous détailler ?',
					  buttons: [
						{
							value: 'niveau difficulte',
							title: 'Difficulté',
						},
						{
							value: 'niveau evasion',
							title: 'Evasion',
						},
						{
							value : 'niveau activites',
							title : 'Activités'
						},
						{
							value : 'niveau decouvertes',
							title : 'Découvertes'
						}
					  ]
				}
			}
		},
		"reco-valide" : {
			"true" : {'type' : 'text', 'content' : ''},
			"false" : {'type' : 'text', 'content' : ''}
		},
		"fin" : {
			"true" : {'type' : 'text', 'content' : ''},
			"false" : {'type' : 'text', 'content' : ''}
		},
		"greetings" : {
			"true" : {'type' : 'text', 'content' : ''},
			"false" : {'type' : 'text', 'content' : ''}
		}
	};
	return(treeQu);
};

exports.question = function (expAction, done, isEA, client) {
	var treeQu = exports.tree(client);
	if(done == true && isEA == true){
		return(treeQu[expAction][true]);
	} else {
		return(treeQu[expAction][false]);
	};
};

exports.questionEloignement = function (client){
	if(client.nvBudget != null){
		if(client.nvBudget > 1000){
			return("Cette randonnée, vous la voyez plutôt en France ? En Europe ? Quel continent voulez-vous découvrir ?")
		} else {
			return("Cette randonnée, vous la voyez plutôt en France ? En Europe ?")			
		}
	}
}