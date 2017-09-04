/*
 * message.js
 * This file contains your bot code
 */

const recastai = require('recastai')
const rd = require('./regles_dialogue')
const ay = require('./appel_yseop')
const cc = require('./carac_client')
// const tr = require('./testrequete')
// const req = require('w3c-xmlhttprequest');
const randos = require('./randonneurs');
const rando = require('./randonneur');
const rq = require('sync-request');
const xtb = require('./xmlToBlob');
const xts = require('./xmlToString');
var xmldoc = require('xmldoc');





// This function is the core of the bot behaviour
const replyMessage = (message) => {
  // Instantiate Recast.AI SDK, just for request service
  const request = new recastai.request(process.env.REQUEST_TOKEN, process.env.LANGUAGE)
  // Get text from message received
  const text = message.content

  console.log('I receive: ', text)
  

  // Get senderId to catch unique conversation_token
  const senderId = message.senderId

  // Call Recast.AI SDK, through /converse route
  request.converseText(text, { conversationToken: senderId })
  .then(result => {
    /*
    * YOUR OWN CODE
    * Here, you can add your own process.
    * Ex: You can call any external API
    * Or: Update your mongo DB
    * etc...
    */
	
	// choisir profil
	if (result.action && result.action.slug == 'greetings'){
		randos.setAjustNvEvasion(0);
		randos.setAjustNvDifficulte(0);
		randos.setAjustNvActivites(0);
		randos.setAjustNvDecouvertes(0);
		const reply = {
        type: 'quickReplies',
        content: {
          title: 'Bonjour ! Choisissez un profil type ;)',
          buttons: [
            {
				value: 'A',
				title: 'Jeune célibataire',
            },
            {
				value: 'B',
				title: 'Famille',
            },
			{
				value : 'C',
				title : 'Couple retraité'
			},
			{
				value : 'D',
				title : 'Groupe de jeunes'
			}
          ],
        },
      }
	  return message ? message.reply([reply]) : res.json({ reply: 'Profil choisi' })
	};
	
	// get profil
	if (result.action && result.action.slug == 'choisir-profil-type' && result.action.done){
		randos.setProfil(result.getMemory('profil').raw);
		message.addReply(rd.comProfil(randos.getProfil()));
	};
	
	// get help
	if (result.action && result.action.slug == 'help' && result.action.done){
		message.addReply({type : 'text', content : 'node'})
	};
	
	// get prenom
	if (result.action && result.action.slug == 'donner-nom' && result.action.done){
		rando.setPrenom(result.getMemory('prenom').raw);
	};
	
	// get age
	if (result.action && result.action.slug == 'donner-age' && result.action.done){
		rando.setAge(result.getMemory('age').years);
		message.addReply(rd.comAge(rando.getAge()));
	};

	// get niveau physique
	/*
	if (result.action && result.action.slug == 'donner-niveau'){
		if(result.action.done){
			randos.setNvPhysique('NV_PHYSIQUE_' + result.getMemory('nv_physique').scalar);
			message.addReply(rd.comNvPhysique(cc.getNvPhysique()));	
		} else {
			message.addReply({type : 'text', content: 'Oups...Je n\'ai pas bien compris. Pouvez-vous choisir un niveau physique ?'});
			const reply = {
				type: 'quickReplies',
				content: {
				  title: 'Choisir niveau physique',
				  buttons: [
					{
						value: 1,
						title: 'Débutant',
					},
					{
						value: 2,
						title: 'Sportif occasionnel',
					},
					{
						value : 3,
						title : 'Sportif régulier'
					},
					{
						value : 4,
						title : 'Athlète'
					}
				  ],
				},
			}
			return message ? message.reply([reply]) : res.json({ reply: 'Profil choisi' })
		};
	};
	*/
	// get niveau physique
	if (result.action &&  result.action.slug == 'donner-niveau-physique'){
		if(result.action.done){
			if (result.getMemory('nv_physique_1') != null){
				randos.setNvPhysique(1);
			} else if (result.getMemory('nv_physique_2') != null){
				randos.setNvPhysique(2);
			} else if (result.getMemory('nv_physique_3') != null){
				randos.setNvPhysique(3);
			} else if (result.getMemory('nv_physique_4') != null){
				randos.setNvPhysique(4);
			};
			message.addReply(rd.comNvPhysique(randos.getNvPhysique()));
		} else {
			const reply = {
			type: 'quickReplies',
			content: {
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
			},
		  }
		  return message ? message.reply([reply]) : res.json({ reply: 'Niveau choisi' })			
		};
	};
	// get budget
	if (result.action && result.action.slug == 'donner-budget' && result.action.done){
		var nb;
		var euro = result.getMemory('budget').dollars*0.858;
		if (euro<=100){
			nb = 100;
		} else if (euro<=500){
			nb = 500;
		} else {
			nb = 5000;
		};
		randos.setNvBudget(nb);
		message.addReply(rd.comBudget(randos.getNvBudget()));
	};
	if (result.action && result.action.slug == 'pas-de-preference'){
		randos.setNvBudget(0);
		message.addReply(rd.comBudget(randos.getNvBudget()));
	};
	
	// get eloignement
	if (result.action && result.action.slug == 'donner-lieu' && result.action.done){
		var dist;
		if(result.getMemory('distance')!=null){
			dist = result.getMemory('distance').meters;
			dist = dist/1000;
		} else if (result.getMemory('lieu')!=null){
			var latP = 49.9;
			var lonP = 2.3;
			var lat = result.getMemory('lieu').lat;
			var lon = result.getMemory('lieu').lng;
			var deltaLat = (latP-lat);
			var deltaLon = (lonP-lon);
			dist = Math.sqrt(Math.pow(deltaLat,2) + Math.pow(deltaLon,2))*111;
		};

		randos.setNvEloignement(Math.floor(dist));
		message.addReply(rd.comEloignement(randos.getNvEloignement()));
	};
	if (result.action && result.action.slug == 'pas-de-preference-1'){
		var nb = 0;
		randos.setNvEloignement(nb);
		message.addReply(rd.comEloignement(randos.getNvEloignement()));
	};
	
	// get niveau randonneur
	/*
	if (result.action && result.action.slug == 'donner-niveau-1'  && result.action.done){
		console.log('wow');
		if (result.getMemory('nv_randonneur') != null){
			cc.setNvRandonneur('NV_RANDONNEUR_' + result.getMemory('nv_randonneur').scalar);
		} 
		message.addReply(rd.comNvRandonneur(cc.getNvRandonneur()));
	};
	*/
	
	//get niveau randonneur
	if (result.action &&  result.action.slug == 'donner-niveau-randonneur'){
		if(result.action.done){
			if (result.getMemory('nv_randonneur_1') != null){
				randos.setNvRandonneur(1);
			} else if (result.getMemory('nv_randonneur_2') != null){
				randos.setNvRandonneur(2);
			} else if (result.getMemory('nv_randonneur_3') != null){
				randos.setNvRandonneur(3);
			} else if (result.getMemory('nv_randonneur_4') != null){
				randos.setNvRandonneur(4);
			};
			message.addReply(rd.comNvRandonneur(randos.getNvRandonneur()));
		} else {
			const reply = {
			type: 'quickReplies',
			content: {
			  title: 'Oups...Je n\'ai pas compris. Comment qualifieriez-vous votre expérience en tant que randonneur ?',
			  buttons: [
				{
					value: 'Débutant',
					title: 'Première randonnée',
				},
				{
					value: 'Sportif occasionnel',
					title: 'Quelques randonnées',
				},
				{
					value : 'Sportif régulier',
					title : 'Randonnées régulières'
				},
				{
					value : 'Athlète',
					title : 'Expert'
				}
			  ],
			},
		  }
		  return message ? message.reply([reply]) : res.json({ reply: 'Niveau choisi' })			
		};
	};

	//get niveau equipement
	if (result.action && result.action.slug == 'donner-equipement'){
		if(result.action.done){
			var nv;
			if (result.getMemory('equipement_1')!=null){
				nv = 1;
				if (result.getMemory('equipement_2')!=null){
					nv = 2;
					if (result.getMemory('equipement_3')!=null){
						nv = 3;
						if (result.getMemory('equipement_4')!=null){
							nv = 4;
						};
					};
				};
			};
			randos.setNvEquipement(nv);
			message.addReply(rd.comNvEquipement());
		} else {
			const reply = {
			type: 'quickReplies',
			content: {
			  title: 'Oups...Je n\'ai pas compris. Comment êtes-vous équipé ?',
			  buttons: [
				{
					value: 'rien',
					title: 'Aucun équipement',
				},
				{
					value: 'Chaussures ',
					title: 'Pour la marche',
				},
				{
					value : 'Chaussures et tente',
					title : 'Pour le camping sauvage'
				},
				{
					value : 'Chaussure, tente et baudrier',
					title : 'Pour le camping sauvage et l\'escalade'
				}
			  ],
			},
		  }
		  return message ? message.reply([reply]) : res.json({ reply: 'Niveau choisi' })				
		};
	};
	
	/*
	if (result.action && result.action.slug == 'donner-niveau-2'  && result.action.done){

		if (result.getMemory('nv_equipement') != null){
			cc.setNvEquipement('NV_EQUIPEMENT_' + result.getMemory('nv_equipement').scalar);
		} 
		message.addReply(rd.comNvEquipement());
	};
	
	*/

	//get détails
	//TO DO  : meilleure estimation (si on en parle, c'est au moins niveau 2 voire 3)
	if (result.action && result.action.slug == 'donner-details'  && result.action.done){
		
		// Etats non spécifiés
		randos.setNvDecouvertes(0);
		randos.setNvDifficulte(0);
		randos.setNvActivites(0);
		randos.setNvEvasion(0);
		
		//Spécification niveau difficulte
		var reply = '';
		if(result.getMemory('nv_difficulte_1')!=null){
			randos.setNvDifficulte(1);
			reply+=rd.comNvDifficulte(randos.getNvDifficulte())
		} else if(result.getMemory('nv_difficulte_2')!=null){
			randos.setNvDifficulte(2);	
			reply+=rd.comNvDifficulte( randos.getNvDifficulte())
		} else if(result.getMemory('nv_difficulte_3')!=null){
			randos.setNvDifficulte(3);
			reply+=rd.comNvDifficulte( randos.getNvDifficulte())		
		} else if(result.getMemory('nv_difficulte_4')!=null){
			randos.setNvDifficulte(4);
			reply+=rd.comNvDifficulte( randos.getNvDifficulte())	
		};
		
		// Specifictation niveau evasion
		// TO DO : 4 niveaux pour l'évasion
		if (result.getMemory('nv_evasion_1')!=null){
			randos.setNvEvasion(1);
			reply+=rd.comNvEvasion(randos.getNvEvasion());
		} else if (result.getMemory('nv_evasion_2')!=null){
			randos.setNvEvasion(4);
			reply+=rd.comNvEvasion(randos.getNvEvasion());
		};
		
		// Specification niveau activites
	
		if (result.getMemory('activite_1')!=null){
			var nb = 2;
			if (result.getMemory('activite_2')!=null){
				nb = 3;
				if (result.getMemory('activite_3')!=null){
					nb = 4;
				};
			};		
			randos.setNvActivites(nb);
			reply+=rd.comNvActivites(randos.getNvActivites())
		};
		
		// Specification niveau découvertes
		if (result.getMemory('decouverte_1')!=null){
			var nb = 2;
			if (result.getMemory('decouverte_2')!=null){
				nb = 3
				if (result.getMemory('decouverte_3')!=null){
					nb = 4;
				};
			};	
			randos.setNvDecouvertes(nb);	
			reply+=rd.comNvDecouvertes(randos.getNvDecouvertes())
		};
		
		reply += '\n\n' + ay.requete();
		
		message.addReply({type : 'text', content : reply});

		/*
		var texte = ay.requete();
		message.addReply({type : 'text', content : texte});
		*/
	};
	
	// Reco validée
	if (result.action && result.action.slug == 'recommandation-validee'){
	message.addReply({type : 'text', content : rd.comRecommandationValidee()});
	};
	
	// Reco erronée
	if(result.action && result.action.slug == 'recommandation-non-validee'){
		const reply = {
        type: 'quickReplies',
        content: {
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
        },
      }
	  return message ? message.reply([reply]) : res.json({ reply: 'Rectification recommandation' })

	};
	
	// Get ajustement
	if (result.action && result.action.slug == 'demander-ajustement'){
		var ajustement = result.getMemory('ajustement').value;
		if (ajustement == 'Diminuer evasion'){
			
		} else if (ajustement == 'Augmenter evasion'){
			console.log(ajustement);
			randos.setAjustNvEvasion('0.8');
		} else if (ajustement == 'Augmenter difficulte'){
			console.log(ajustement);
			randos.setAjustNvEvasion('0.8');
		} else if (ajustement == 'Diminuer difficulte'){
			console.log(ajustement);
			randos.setAjustNvEvasion('-0.8');
		} else if (ajustement == 'Augmenter activites'){
			console.log(ajustement);
			randos.setAjustNvEvasion('0.8');
		} else if (ajustement == 'Augmenter decouvertes'){
			console.log(ajustement);
			randos.setAjustNvEvasion('0.8');
		};
		var reply = ay.requete();
		message.addReply({type : 'text', content : reply});
	};
	
	
	// appel yseop 	
	if (result.action && result.action.slug == 'meteo' && result.action.done){
		
		// Avec la librairie sync-request
		//console.log(ay.requete());
		//message.addReply(ay.requete());
		
		var body = new String();
		body = xtb.genererXml();
		
		var res = rq('POST','https://pval2.studio.yseop-hosting.com/yseop-manager/direct/Montagne/dialog.do?command=init-dialog&transformation=bot', {
			'headers':{
				'Content-Type': 'application/soap+xml; charset=UTF-8',
				'Authorization': 'Basic b3dpOmY1VFRuVmhBbUZmeHlsY2J1YlVNdDl0MlpYNURNTg==',
				'Accept': 'text/html'
			},
			'body':body
		});
		
		//var res = rq('GET','https://pval2.studio.yseop-hosting.com/yseop-studio/studio/engine/log/info/Montagne-output.xml');
		console.log(res.statusCode);
		var xml = new xmldoc.XmlDocument(res.getBody());
		var texte = xml.childNamed('recommandationIntro').toString();
		//var texte =res.getBody().toString();
		texte += '\n Est-ce que ce trek vous convient ?';
		message.addReply({type : 'text', content : texte});
		
		/*
		var xhr = new req.XMLHttpRequest();
		var texte = '';
		xhr.open('GET', 'https://www.google.fr', false);
		xhr.send(null);	
		console.log(xhr.status);
		*/
		
		/*
		while(xhr.readyState != 4) {
			console.log("Pas à 4..");
		}
		
		console.log(xhr.readyState)
		*/
		/*
		setTimeout(function(){
			texte = xhr.responseText;
			console.log(xhr);
			//console.log(texte);
			//message.addReply({type : 'text', content : 'texte : ' + texte});
			//message.addReply({type : 'text', content : 'ah en fait j\'ai rien à te dire, gros naze'});

			}, 3000);
		
		*/
		
		
		//message.addReply({type : 'text', content : 'texte : ' + texte});
		
		
		/*
		var request = function(){
			return new Promise(function(resolve, reject){
				var xhr = new req.XMLHttpRequest();
				var texte = '';
				xhr.open('GET', 'https://www.google.fr', false);
				xhr.addEventListener('readystatechange', function(){
					if(xhr.readyState === 4 && xhr.status === 200 ){
						console.log('ok')
						//console.log(xhr.responseText);
						texte = xhr.responseText;
						//return(texte)
						resolve(texte)
					} else if(xhr.readyState === req.DONE && xhr.status != 200 ){
						console.log(xhr.status)
					} 
				});
				xhr.send(null);	
			});
			
			
		};
		request().then(function success(data){
			console.log('hey')
			message.addReply({type : 'text', content : 'texte : ' + data});

		});
		
		*/
		
		// const texte = tr.testhttp();
		/*var xhr = new req.XMLHttpRequest();
		var texte;
		var k = 0;
		xhr.open('GET', 'https://www.google.fr');

		xhr.addEventListener('readystatechange', function(){


		if(xhr.readyState === 4 && xhr.status === 200 ){
			console.log('ok')
			//console.log(xhr.responseText);
			texte = xhr.responseText;
			//return(texte)
			k = 1;
			
		} else if(xhr.readyState === req.DONE && xhr.status != 200 ){
			console.log(xhr.status)
		} 

		});
		
		
		xhr.send(null)
		//message.addReply({type : 'text', content : texte});
		message.addReply({type : 'text', content : 'texte : ' + texte});
		*/
	};
	

	
	
    if (result.action) {
      console.log('The conversation action is: ', result.action.slug)
    }

    // If there is not any message return by Recast.AI for this current conversation
    if (!result.replies.length) {
		// A ENLEVER A LA FIN
      //message.addReply({ type: 'text', content: 'I don\'t have the reply to this yet :)' })
    } else {
      // Add each reply received from API to replies stack
      result.replies.forEach(replyContent => message.addReply({ type: 'text', content: replyContent }))
    }

    // Send all replies
	
    message.reply()
    .then(() => {
      // Do some code after sending messages
	  
	  
    })
    .catch(err => {
      console.error('Error while sending message to channel', err)
    })
  })
  .catch(err => {
    console.error('Error while sending message to Recast.AI', err)
  })
}

module.exports = replyMessage
