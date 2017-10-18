

exports.reponse = function(action, done, client, choix, isEA){
	var treeRep = exports.tree(client, choix);

		if(done == isEA){
			return(treeRep[action][true][client.profil]);
		} else {
			return(treeRep[action][false][client.profil]);
		};

};

exports.tree = function (client, choix, action) {
	var treeRep = {
		"default" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseDefault()},
				"B" : {"type" : "text", "content" : exports.reponseDefault()},
				"C" : {"type" : "text", "content" : exports.reponseDefault()},
				"D" : {"type" : "text", "content" : exports.reponseDefault()}
			},
			"false" : {
				"A" : {"type" : "text", "content" : exports.reponseDefault()},
				"B" : {"type" : "text", "content" : exports.reponseDefault()},
				"C" : {"type" : "text", "content" : exports.reponseDefault()},
				"D" : {"type" : "text", "content" : exports.reponseDefault()}
			}
		},
		"greetings": {
			"true": {
				"A" : {"type" : "text", "content" : "Bonjour ! Je suis Oscar, l\'assistant P-Val et mon travail est de vous recommander le trek de vos rêves. </br>Pour mieux vous connaître, je vais vous poser quelques questions rapides."},
				"B" : {"type" : "text", "content" : "Michel, ravi de vous revoir !</br>Je vois que votre fille Marie a maintenant 6 ans. Vous allez pouvoir lui faire découvrir des treks jusqu\'à 3500m !"},
				"C" : {"type" : "text", "content" : "Heureux de vous revoir, Jeaninne ! </br>Je vous rappelle que, compte-tenu de votre âge, il est plus prudent de ne pas dépasser les 3500m.</br>Faisons un peu mieux connaissance pour que je puisse vous recommander le trek le mieux adapté à votre couple."},
				"D" : {"type" : "text", "content" : "Content de vous revoir, Paul ! </br>Je vais tout faire pour que vos amis et vous profitiez de cette nouvelle aventure autant que de celle au Mont Fuji l\'année dernière."}
			},
			"false": {
				"A" : {"type" : "text", "content" : "Bonjour ! Je suis Oscar, l\'assistant P-Val et mon travail est de vous recommander le trek de vos rêves. </br>Pour mieux vous connaître, je vais vous poser quelques questions rapides."},
				"B" : {"type" : "text", "content" : "Michel, ravi de vous revoir !</br>Je vois que votre fille Marie a maintenant 6 ans. Vous allez pouvoir lui faire découvrir des treks jusqu\'à 3500m !"},
				"C" : {"type" : "text", "content" : "Heureux de vous revoir, Jeaninne ! </br>Je vous rappelle que, compte-tenu de votre âge, il est plus prudent de ne pas dépasser les 3500m.</br>Faisons un peu mieux connaissance pour que je puisse vous recommander le trek le mieux adapté à votre couple."},
				"D" : {"type" : "text", "content" : "Content de vous revoir, Paul ! </br>Je vais tout faire pour que vos amis et vous profitiez de cette nouvelle aventure autant que de celle au Mont Fuji l\'année dernière."}
			}
		},
		"nom" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Enchanté " + client.membres[0].prenom + " !"},
				"B" : {"type" : "text", "content" : "Enchanté " + client.membres[0].prenom + " !"},
				"C" : {"type" : "text", "content" : "Enchanté " + client.membres[0].prenom + " !"},
				"D" : {"type" : "text", "content" : "Enchanté " + client.membres[0].prenom + " !"}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Drôle de nom ! Je ne voudrais pas l'écorcher..."},
				"B" : {"type" : "text", "content" : "Drôle de nom ! Je ne voudrais pas l'écorcher..."},
				"C" : {"type" : "text", "content" : "Drôle de nom ! Je ne voudrais pas l'écorcher..."},
				"D" : {"type" : "text", "content" : "Drôle de nom ! Je ne voudrais pas l'écorcher..."}
			}
		},
		"age" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseAge(client)},
				"B" : {"type" : "text", "content" : exports.reponseAge(client)},
				"C" : {"type" : "text", "content" : exports.reponseAge(client)},
				"D" : {"type" : "text", "content" : exports.reponseAge(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"B" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"C" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"D" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"}
			}
		},
		"nombre-age" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseAge(client)},
				"B" : {"type" : "text", "content" : exports.reponseAge(client)},
				"C" : {"type" : "text", "content" : exports.reponseAge(client)},
				"D" : {"type" : "text", "content" : exports.reponseAge(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"B" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"C" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"D" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"}
			}
		},
		"niveau-randonneur" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseNvRando(client)},
				"B" : {"type" : "text", "content" : exports.reponseNvRando(client)},
				"C" : {"type" : "text", "content" : exports.reponseNvRando(client)},
				"D" : {"type" : "text", "content" : exports.reponseNvRando(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "En connaissant bien votre niveau, je peux vous recommander une randonnée adaptée."},
				"B" : {"type" : "text", "content" : "En connaissant bien votre niveau, je peux vous recommander une randonnée adaptée."},
				"C" : {"type" : "text", "content" : "En connaissant bien votre niveau, je peux vous recommander une randonnée adaptée."},
				"D" : {"type" : "text", "content" : "En connaissant bien votre niveau, je peux vous recommander une randonnée adaptée."}
			}
		},
		"niveau-physique" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseNvPhysique(client)},
				"B" : {"type" : "text", "content" : exports.reponseNvPhysique(client)},
				"C" : {"type" : "text", "content" : exports.reponseNvPhysique(client)},
				"D" : {"type" : "text", "content" : exports.reponseNvPhysique(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Certaines randonnées demandent une vraie préparation physique."},
				"B" : {"type" : "text", "content" : "Certaines randonnées demandent une vraie préparation physique."},
				"C" : {"type" : "text", "content" : "Certaines randonnées demandent une vraie préparation physique."},
				"D" : {"type" : "text", "content" : "Certaines randonnées demandent une vraie préparation physique."}
			}
		},
		"budget" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"B" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"C" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"D" : {"type" : "text", "content" : exports.reponseBudget(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"B" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"C" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"D" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"}
			}
		},
		"nombre-budget" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"B" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"C" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"D" : {"type" : "text", "content" : exports.reponseBudget(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"B" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"C" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"},
				"D" : {"type" : "text", "content" : "Soyons un peu plus précis ;)"}
			}
		},
		"pas-de-preference-budget" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"B" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"C" : {"type" : "text", "content" : exports.reponseBudget(client)},
				"D" : {"type" : "text", "content" : exports.reponseBudget(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je n\'ai pas bien compris votre budget."},
				"B" : {"type" : "text", "content" : "Je n\'ai pas bien compris votre budget."},
				"C" : {"type" : "text", "content" : "Je n\'ai pas bien compris votre budget."},
				"D" : {"type" : "text", "content" : "Je n\'ai pas bien compris votre budget."}
			}
		},
		"eloignement" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Ok, je vais vous trouver un endroit sympa !"},
				"B" : {"type" : "text", "content" : exports.reponseDetails(client)},
				"C" : {"type" : "text", "content" : "Ok, je vais vous trouver un endroit sympa !"},
				"D" : {"type" : "text", "content" : exports.reponseDetails(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je ne suis pas sûr de connaître cet endroit..."},
				"B" : {"type" : "text", "content" : "Je ne suis pas sûr de connaître cet endroit..."},
				"C" : {"type" : "text", "content" : "Je ne suis pas sûr de connaître cet endroit..."},
				"D" : {"type" : "text", "content" : "Je ne suis pas sûr de connaître cet endroit..."}
			}
		},
		"pas-de-preference-eloignement" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Ok, je vais vous trouver un endroit sympa !"},
				"B" : {"type" : "text", "content" : exports.reponseDetails(client)},
				"C" : {"type" : "text", "content" : "Ok, je vais vous trouver un endroit sympa !"},
				"D" : {"type" : "text", "content" : exports.reponseDetails(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je ne suis pas sûr d\'avoir saisi où vous vouliez partir."},
				"B" : {"type" : "text", "content" : "Je ne suis pas sûr d\'avoir saisi où vous vouliez partir."},
				"C" : {"type" : "text", "content" : "Je ne suis pas sûr d\'avoir saisi où vous vouliez partir."},
				"D" : {"type" : "text", "content" : "Je ne suis pas sûr d\'avoir saisi où vous vouliez partir."}
			}
		},
		"details" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseDetails(client)},
				"B" : {"type" : "text", "content" : exports.reponseDetails(client)},
				"C" : {"type" : "text", "content" : exports.reponseDetails(client)},
				"D" : {"type" : "text", "content" : exports.reponseDetails(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Voilà une demande qui sort de l'ordinaire !"},
				"B" : {"type" : "text", "content" : "Voilà une demande qui sort de l'ordinaire !"},
				"C" : {"type" : "text", "content" : "Voilà une demande qui sort de l'ordinaire !"},
				"D" : {"type" : "text", "content" : "Voilà une demande qui sort de l'ordinaire !"}
			}
		},
		"recap-valide" : {
			"true" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			},
			"false" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			}
		},
		"ajuster-reco" : {
			"true" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			},
			"false" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			}
		},
		"rectifier-details" : {
			"true" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			},
			"false" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			}
		},
		"rectifier-niveau" : {
			"true" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			},
			"false" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			}
		},
		"rectifier-lieu" : {
			"true" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			},
			"false" : {
				"A" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"B" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"C" : {"type" : "card", "content" : exports.reponseIntro(client)},
				"D" : {"type" : "card", "content" : exports.reponseIntro(client)}
			}
		},
		"recap-invalide" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Oh, j\'ai du mal comprendre quelque chose."},
				"B" : {"type" : "text", "content" : "Il est vrai qu'une année s'est écoulée depuis votre dernière visite."},
				"C" : {"type" : "text", "content" : "Oh, j\'ai du mal comprendre quelque chose."},
				"D" : {"type" : "text", "content" : "Il est vrai qu'une année s'est écoulée depuis votre dernière visite."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Oh, j\'ai du mal comprendre quelque chose."},
				"B" : {"type" : "text", "content" : "Il est vrai qu'une année s'est écoulée depuis votre dernière visite."},
				"C" : {"type" : "text", "content" : "Oh, j\'ai du mal comprendre quelque chose."},
				"D" : {"type" : "text", "content" : "Il est vrai qu'une année s'est écoulée depuis votre dernière visite."}
			}
		},
		"selectionner-ajustement-donnees" : {
			"true" : {
				"A" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)},
				"B" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)},
				"C" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)},
				"D" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)}
			},
			"false" : {
				"A" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)},
				"B" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)},
				"C" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)},
				"D" : {"type" : "quickReplies", "content" : exports.reponseAjustDonnees(client, choix)}
			}
		},
		"intro-valide" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"B" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"C" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"D" : {"type" : "text", "content" : exports.reponseReserve(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"B" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"C" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"D" : {"type" : "text", "content" : exports.reponseReserve(client)}
			}
		},
		"en-savoir-plus" : {
			"true" : {
				"A" : {"type" : "text", "content" : ''},
				"B" : {"type" : "text", "content" : ''},
				"C" : {"type" : "text", "content" : ''},
				"D" : {"type" : "text", "content" : ''}
			},
			"false" : {
				"A" : {"type" : "text", "content" : ''},
				"B" : {"type" : "text", "content" : ''},
				"C" : {"type" : "text", "content" : ''},
				"D" : {"type" : "text", "content" : ''}
			}
		},
		"info" : {
			"true" : {
				"A" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"B" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"C" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"D" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)}
			},
			"false" : {
				"A" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"B" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"C" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"D" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)}
			}
		},
		"reco-invalide" : {
			"true" : {
				"A" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"B" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"C" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"D" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }}
			},
			"false" : {
				"A" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"B" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"C" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"D" : {"type" : "quickReplies", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }}
			}
		},
		"intro-invalide" : {
			"true" : {
				"A" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"B" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"C" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"D" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }}
			},
			"false" : {
				"A" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"B" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"C" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }},
				"D" : {"type" : "text", "content" : {
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
				title : 'Pas assez de divertissements'
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
        }}
			}
		},
		"reco-valide" : {
			"true" : {
				"A" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"B" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"C" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"D" : {"type" : "text", "content" : exports.reponseReserve(client)}
			},
			"false" : {
				"A" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"B" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"C" : {"type" : "text", "content" : exports.reponseReserve(client)},
				"D" : {"type" : "text", "content" : exports.reponseReserve(client)}
			}
		},
		"en-savoir-encore-plus" : {
			"true" : {
				"A" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"B" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"C" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"D" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)}
			},
			"false" : {
				"A" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"B" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"C" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)},
				"D" : {"type" : "quickReplies", "content" : exports.reponseInfo(client, choix, action)}
			}
		},
		"goodbye" : {
			"true" : {
				"A" : {"type" : "text", "content" : "A bientôt !"},
				"B" : {"type" : "text", "content" : "A bientôt !"},
				"C" : {"type" : "text", "content" : "A bientôt !"},
				"D" : {"type" : "text", "content" : "A bientôt !"}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "A bientôt !"},
				"B" : {"type" : "text", "content" : "A bientôt !"},
				"C" : {"type" : "text", "content" : "A bientôt !"},
				"D" : {"type" : "text", "content" : "A bientôt !"}
			}
		},
		"insultes" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."},
				"B" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."},
				"C" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."},
				"D" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."},
				"B" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."},
				"C" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."},
				"D" : {"type" : "text", "content" : "Je suis désolé si je vous ai offensé, essayons de repartir sur de bonnes bases."}
			}
		},
		"meteo" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."},
				"B" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."},
				"C" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."},
				"D" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."},
				"B" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."},
				"C" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."},
				"D" : {"type" : "text", "content" : "Je ne connais pas la météo, mais je vous souhaite qu\'il fasse beau tout au long de votre trek."}
			}
		},
		"help" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."},
				"B" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."},
				"C" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."},
				"D" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."},
				"B" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."},
				"C" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."},
				"D" : {"type" : "text", "content" : "Je peux vous aider à choisir un trek en montagne."}
			}
		},
		"asking_name" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Je m'appelle Oscar."},
				"B" : {"type" : "text", "content" : "Je m'appelle Oscar."},
				"C" : {"type" : "text", "content" : "Je m'appelle Oscar."},
				"D" : {"type" : "text", "content" : "Je m'appelle Oscar."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je m'appelle Oscar."},
				"B" : {"type" : "text", "content" : "Je m'appelle Oscar."},
				"C" : {"type" : "text", "content" : "Je m'appelle Oscar."},
				"D" : {"type" : "text", "content" : "Je m'appelle Oscar."}
			}
		},
		"none" : {
			"true" : {
				"A" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."},
				"B" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."},
				"C" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."},
				"D" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."},
				"B" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."},
				"C" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."},
				"D" : {"type" : "text", "content" : "Je ne sais pas répondre à cette question."}
			}
		},
		"thanks" : {
			"true" : {
				"A" : {"type" : "text", "content" : "C'était un plaisir !"},
				"B" : {"type" : "text", "content" : "C'était un plaisir !"},
				"C" : {"type" : "text", "content" : "C'était un plaisir !"},
				"D" : {"type" : "text", "content" : "C'était un plaisir !"}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "C'était un plaisir !"},
				"B" : {"type" : "text", "content" : "C'était un plaisir !"},
				"C" : {"type" : "text", "content" : "C'était un plaisir !"},
				"D" : {"type" : "text", "content" : "C'était un plaisir !"}
			}
		},
		"goodbye" : {
			"true" : {
				"A" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."},
				"B" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."},
				"C" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."},
				"D" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."}
			},
			"false" : {
				"A" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."},
				"B" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."},
				"C" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."},
				"D" : {"type" : "text", "content" : "A bientôt !<br/>La conversation est maintenant terminée. Je peux vous faire une nouvelle recommandation. Pour cela, dites-moi \'Bonjour\'."}
			}
		}
		};
	
	return(treeRep);
};

exports.reponseAge = function(client){
	var seuil =[2, 10, 80, 70];
	var age = client.membres[0].age;
	var content;
	if (age < seuil[0]){
		content = 'Vos enfants vont adorer la montagne ! Nos guides pourront leur montrer les animaux qui se cachent dans la nature. <br/>Comme les jeunes enfants sont très sensibles à l\'altitude, je vais sélectionner des sites de randonnées en basse montagne, jusqu\'à 1500m.'
	} else if (age < seuil[1]){
		content ='Vos enfants vont adorer la montagne ! Nos guides pourront leur montrer les animaux qui se cachent dans la nature. <br/>Comme les enfants sont sensibles à l\'altitude, je vais sélectionner des sites de randonnées en moyenne montagne, jusqu\'à 3000m.'
	} else if (age > seuil[2]){
		content = 'L\'air de la montagne vous fera le plus grand bien. Je vais choisir pour vous des sites en basse montagne, à moins de 1500m. Vous pourrez ainsi vous ressourcer sans être gêné par l\'altitude.'
	} else if (age > seuil[3]){
		content = 'L\'air de la montagne vous fera le plus grand bien. Je vais choisir pour vous des sites en moyenne montagne, à moins de 3000m. Vous pourrez ainsi vous ressourcer sans être gêné par l\'altitude.'
	} else {
		content = "Vous avez l\'âge idéal pour la marche en montagne ! Nous allons pouvoir explorer des sites à toute altitude."
	};
	return(content)
};

exports.reponseNvRando = function(client){
	var nv = client.nvRandonneur;
	var content;
	switch(nv)
	{
		case 1:
		content = 'Je suis ravi de vous faire découvrir mon sport préféré ! Les treks sont l\'occasion de faire du sport tout en se ressourçant en pleine nature.';
		break;
		case 2:
		content = 'Vous verrez, plus on fait de treks, plus on y prend goût !';
		break;
		case 3:
		content = 'J\'adore rencontrer de nouveaux passionnés de randonnée ! Je vais vous faire découvrir un parcours que vous n\'avez jamais fait.';
		break;
		case 4:
		if(client.profil == 'A'){
			content = 'Vous êtes un expert ! Je vais vous faire découvrir un parcours que vous n\'avez jamais fait.';
		} else {
			content = 'Vous êtes des experts ! Je vais vous faire découvrir un parcours que vous n\'avez jamais fait.';
		}
		break;
	};
	return(content)
};

exports.reponseNvPhysique = function(client){
	var nv = client.nvPhysique;
	var content;
	switch(nv)
	{
		case 1:
		content = 'Rassurez-vous, la marche en montagne est un sport adapté à tous les niveaux. </br> Je vais vous proposer une randonnée accessible à tous.';
		break;
		case 2:
		content = 'Vous faites du sport de temps en temps et cela va déjà vous permettre de vous faire plaisir sur des randonnées de niveau moyen.';				
		break;
		case 3:
		content = 'Super ! Grâce à votre pratique régulière du sport, vous allez pouvoir faire des randonnées de tous niveaux.'
		break;
		break;
		case 4:
		if(client.profil == 'A'){
			content = 'Vous êtes un vrai athlète ! Je vais vous proposer un trek de bonne difficulté pour que vous ne vous ennuyiez pas.';				
		} else {
			content = 'Vous êtes de vrais athlètes ! Je vais vous proposer un trek de bonne difficulté pour que vous ne vous ennuyiez pas.';
		};
		break;
	};
	return(content);
};

exports.reponseBudget = function(client){
	var nv = client.nvBudget;
	var content;
	if (nv == 0){
		content = 'Ok, nous discuterons du prix plus tard.';
	} else if (nv <= 200){
		content = 'Profitez de cette occasion pour (re)découvrir le coin près de chez vous. Nos montagnes offrent des paysages magnifiques accessibles aux petits budgets !';
	} else if(nv < 1000){
		content = 'Super ! Vous allez pouvoir randonner aux quatre coins de l\'Europe pendant ces quelques jours.';
	} else if (nv == 1000000) {
		content = 'Ok, j\'aime avoir carte blanche !';

	} else {
		content = 'Top ! Vous allez pouvoir partir au bout du monde pour ce trek.';
	};
	return(content);
};

exports.reponseDetails = function(client){
	var content;
	if(client.nvPhysique != null && client.nvRandonneur != null && client.nvBudget != null && client.lieu != null){
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
			adjNvR = 'peu ou pas de';
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
			adjNvDi = 'assez difficile'
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
		var a = Math.floor(Math.random());
		var b = Math.floor(Math.random());
		var ab = a + b;
		switch(ab) 
		{
			case 0:
			content = 'Ok '+ client.membres[0].prenom +', pour résumer :'
			break;
			case 1:
			content = 'D\'accord '+ client.membres[0].prenom +', je résume :'
			break;
			case 2:
			content = 'C\'est noté '+ client.membres[0].prenom +', en résumé :'
			break;
		};
		
		switch(client.profil){
			case 'A':
			case 'C':
			if (client.profil == 'A'){
				content += '</br>Vous êtes un sportif ' + adjNvP +' qui a fait '+ adjNvR +' randonnées par le passé.';
			}; 
			if (client.profil == 'C'){
				content += '</br>Vous êtes des sportifs ' + adjNvP +'s qui avez fait '+ adjNvR +' randonnées par le passé.';
			};
			content += '</br>Vous souhaitez un trek '
			if (adjNvDi != null){
				content += adjNvDi;
			};
			if (adjNvEv != null){
				content += ' dans un lieu ' + adjNvEv ;
			};
			if (adjNvAc != null || adjNvDe != null){
				content += ' où vous pourrez '
				if (adjNvAc != null && adjNvDe == null){
					content += 'pratiquer ' + adjNvAc +' activités.';
				};
				if (adjNvDe != null && adjNvAc == null){
					content += 'faire ' + adjNvDe +' découvertes.';
				};
				if (adjNvDe != null && adjNvAc != null){
					content += 'faire ' + adjNvDe +' découvertes et pratiquer ' + adjNvAc +' activités.';
				};
			};
			if (client.nvBudget != 1000000){
				content += '</br>Votre budget maximum est de ' + client.nvBudget + ' euros.';
			};
			break;
			
			case 'B':
			switch(ab) 
			{
				case 0:
				content += '</br>Avec les enfants, vous préférez généralement des randonnées familiales assez faciles';
				content += '</br>Lors de vos derniers treks, vous aviez apprécié des promenades pleines de découvertes dans la nature.';
				break;
				case 1:
				content += '</br>D\'après mes souvenirs, votre famille aime les sorties tranquilles, sans trop de difficultés.';
				content += '</br>Les vacances sont, pour vous, l\'occasion de vous évader et de faire découvrir la nature à vos enfants.';
				break;
				case 2:
				content += '</br>Je me souviens que Patricia et vous aimez vous détendre loin de la ville en pleine nature.';
				content += '</br>Il est important pour vous la promenade soit sans risque afin que vos enfants, Pierre et Marie, puissent découvrir la faune et la flore librement.';
				break;
			};
			
			if (client.nvBudget != 1000000){
				content += '</br>Votre budget maximum est, cette fois-ci, de ' + client.nvBudget + ' euros.';
			};
			break;
			
			case 'D':
			switch(ab) 
			{
				case 0:
				content += '</br>D\'après mes souvenirs, les treks sont, pour vos amis et vous, des défis pendant lesquels vous aimez vous challenger.';
				content += '</br>Vous adorez pratiquer des activités sportives variées et faire des rencontres sur votre chemin.';
				break;
				case 1:
				content += '</br>Je me souviens que vous et vos amis êtes des randonneurs intrépides à qui les obstacles ne font pas peur.';
				content += '</br>Vous préférez généralement rester proche d\'une ville afin de pouvoir pratiquer de multiples activités.';
				break;
				case 2:
				content += '</br>Lors de votre dernier trek difficile, vous aviez aimé la variété d\activités sportives.';
				content += '</br>Vous aviez fait beaucoup de nouvelles rencontres enrichissantes dans les gîtes disponibles sur votre parcours.';
				break;
			};
			if (client.nvBudget != 1000000){
				content += '</br>Votre budget maximum est, cette fois-ci, de ' + client.nvBudget + ' euros.';
			};
			break;
		};
		

		// niveau eloignement
		if (client.lieu != 'none'){
			content += '</br>Vous aimeriez partir en ';
			var lieuxFr = ['France', 'Europe', 'Asie', 'Amérique', 'Afrique', 'Océanie'];
			var lieuxEn = ['France', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];
			content += lieuxFr[lieuxEn.indexOf(client.lieu)] + '.';
		};
	} else {
		content = 'Discutons encore un peu, j\'ai besoin de quelques informations supplémentaires.'
	};
	return(content);
};

exports.reponseIntro = function(client){
	var content = {
		title : client.rando.siteTitre,
		subtitle : client.rando.recoIntro,
		imageUrl : client.rando.imageUrl,
		buttons : [
		{
			title : 'Ca me plait',
			value : 'Oui'
		},
		{
			title : 'En savoir plus',
			value : 'en savoir plus'
		},
		{
			title : 'Ca ne me plait pas',
			value : 'Non'
		}
		]
	};
	return(content)
};

exports.reponseAjustDonnees = function(client, choix){
	var content;
	if (choix == 'niveau physique'){
		console.log('test ok');
		var question = 'Quel sportif êtes-vous ?';
		var value1 = 'Débutant';
		var title1 = 'Peu sportif';
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
		var value1 = 'Je veux une randonnée très facile';
		var title1 = 'Très facile';
		var value2 = 'Je veux une randonnée cool';
		var title2 = 'Assez facile';
		var value3 = 'Je veux une randonnée assez difficile';
		var title3 = 'Assez difficile';
		var value4 = 'Je veux une randonnée de fou';
		var title4 = 'Très difficile';
	} else if (choix == 'niveau eloignement'){
		var question = 'Dans quels environs souhaitez-vous faire votre trek ?';
		var value1 = 'en France';
		var title1 = 'France';
		var value2 = 'en Europe';
		var title2 = 'Europe';
		var value3 = 'en Afrique';
		var title3 = 'Afrique';
		var value4 = 'en Asie';
		var title4 = 'Asie';
	} else if (choix == 'niveau evasion'){
		var question = 'Quel type de site aimeriez-vous en terme d\'évasion ?';
		var value1 = 'une randonnée facilement accessible';
		var title1 = 'Facilement accessible';
		var value2 = 'une randonnée facilement accessible';
		var title2 = 'Accessible';
		var value3 = 'loin de la ville';
		var title3 = 'Isolé';
		var value4 = 'loin de la ville';
		var title4 = 'Très isolé';
	};

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
	return(content);
};

exports.reponseReserve = function(client){
	var content = client.rando.recoConclusion;
	content += '</br><form action="confirmation_reservation.html" method="get">                    <input type="hidden" name="nom_trek" value="' + client.rando.siteTitre + '">                    <input type="hidden" name="url_trek" value="'+ client.rando.imageUrl + '">                    <button class="action-button boutonAselect_2" type="submit" target="_blank">Je veux faire ce trek !</button>            </form>'
	content += '</br></br>J\'espère vous revoir bientôt !';
	return(content);
};

exports.reponseInfo = function(client, choix, action){
	var titre;
	
	switch(choix)
	{
		case 'niveau difficulte':
		titre = client.rando.recoDifficulte;
		break;
		case 'niveau evasion':
		titre = client.rando.recoEvasion;
		break;
		case 'niveau activites':
		titre = client.rando.recoActivites;
		break;
		case 'niveau decouvertes':
		titre = client.rando.recoDecouvertes;
		break;
	};
	var listeButtons = [];
	listeButtons[0] = {
		title : 'Ca me plait',
		value : 'oui'
	};
	
	listeButtons[1] = {
		title : 'Ca ne me plait pas',
		value : 'non'
	};
	if(choix != 'niveau difficulte' && action == 'info')
	{
		listeButtons.push({
			title : 'En savoir plus sur la difficulté',
			value : 'niveau difficulte'
		});
	};
	if(choix != 'niveau evasion' && action == 'info')
	{
		listeButtons.push({
			title : 'En savoir plus sur le dépaysement',
			value : 'niveau evasion'
		});
	};
	if(choix != 'niveau activites' && action == 'info')
	{
		listeButtons.push({
			title : 'En savoir plus sur les divertissements',
			value : 'niveau activites'
		});
	};
	if(choix != 'niveau decouvertes' && action == 'info')
	{
		listeButtons.push({
			title : 'En savoir plus sur la nature',
			value : 'niveau decouvertes'
		});
	};
	
	var content = {
		title : titre,
		buttons : listeButtons
	};
	return(content);
};

exports.reponseDefault = function(){
	var rep = ['Je ne suis pas sûr d\'avoir bien saisi...', 'Flûte, je n\'ai pas bien compris.', 'Zut, je ne suis pas sûr d\'avoir bien compris ce que vous venez de dire.']
	var i = Math.floor(Math.random()  * (rep.length - 0) + 0);
	return(rep[i]);
};
