var tree = {
	"nom" : {
		"true" : {"type" : "text", "content" : "Comment vous appelez-vous ?"},
		"false" : {"type" : "text", "content" : "Pourriez-vous reformuler pour m\'aider à mieux comprendre votre nom ?"}
	},
	"age" : {
		"true" : {"type" : "text", "content" : "Quel est votre âge ?"},
		"false" : {"type" : "quickReplies", "content" : {
			  title: 'Est-ce que vous pourriez choisir une tranche d\'âge ?',
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
				title: 'Pourriez-vous choisir ce qui correspond le mieux à votre niveau ?',
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
			}
		}
	},
	"niveau-physique" : {
		"true" : {"type" : "text", "content" : "Comment qualifieriez-vous votre niveau physique général ?"},
		"false" : {
			"type" : "quickReplies",
			"content" :{
				title: 'Pourriez-vous choisir ce qui correspond le mieux à votre niveau ?',
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
			}
		}
	},
	"budget" : {
		"true" : {"type" : "text", "content" : "Quel est votre budget par personne ?"},
		"false" : {
			  title: 'Je ne suis pas sûr d\'avoir bien saisi... Dans quel tranche se situe votre budget par personne ? ',
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
	},
	"eloignement" : {
		"true" : {'type' : 'text', 'content' : 'Cette randonnée, vous la voyez plutôt en France ? En Europe ? Ou bien sur quel autre continent ?'},
		"false" : {
			  title: 'Pourriez-vous choisir l\'éloignement qui vous conviendrait le mieux parmi ces propositions ?',
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
	},
	"details" : {
		"true" : {"type" : "text", "content" : "Maintenant que l\'on se connait un peu mieux, qu\'est-ce qui vous ferait plaisir pendant cette randonnée ?"},
		"false" : {
			  title: 'Quel type de trek vous plairait le plus ?',
			  buttons: [
				{
					value: 'un trek facile, loin de la ville',
					title: 'Facile et dépaysant',
				},
				{
					value: 'Un trek facile, voir des animaux comme des marmottes et des lacs',
					title: 'Assez facile et plein de découvertes',
				},
				{
					value : 'Un trek plutôt difficile pour faire du kayak, du rafting',
					title : 'Plutôt difficile avec des activités'
				},
				{
					value : 'un trek  difficile, loin de la ville',
					title : 'De niveau moyen, loin de la civilisation'
				}
			  ],
		}
	},
	"recap-valide" : {
		"true" : {'type' : 'text', 'content' : 'Ce résumé vous convient-il ?'},
		"false" : {'type' : 'text', 'content' : 'Ce résumé vous convient-il ?'}
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
	}
};

exports.question = function (expAction, done) {
	return(tree[expAction][done]);
};