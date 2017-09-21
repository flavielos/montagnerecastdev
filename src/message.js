/*
 * message.js
 * This file contains your bot code
 */

 const recastai = require('recastai')
 const dial = require('./dialogue');
 const md = require('./majData');
 const rando = require('./randonneurs');
 
 var client;

 // This function is the core of the bot behaviour
const replyMessage = (message) => {
  // Instantiate Recast.AI SDK, just for request service
  const request = new recastai.request(process.env.REQUEST_TOKEN, process.env.LANGUAGE)
  // Get text from message received
  const text = message.content

  console.log('I receive: ', text)
  

  // Get senderId to catch unique conversation_token
  const senderId = message.senderId
  const origin = message.origin

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
	
	if (result.action) {
      console.log('The conversation action is: ', result.action.slug + ' and it is ' + result.action.done)
	  var type;
	  var content;
	  if(result.action.done)
	  {
		  var entity = '';
		  var choix = '';
		  var slug = result.action.slug;
		  switch(slug)
		  {
			
			case 'greetings':
			result.setMemory(
			{
			  profil: {
				value: senderId,
				raw : senderId
			  },
			  prenom : null
			}
			);
			entity = senderId;
			client = new rando.randonneurs(entity, message.senderId, message.origin);
			break;
			
			case 'choisir-profil-type':
			entity = result.getMemory('profil').raw;
			client = new rando.randonneurs(entity, message.senderId, message.origin);
			break;
			
			case 'nom':
			if(result.getMemory('prenom') != null)
			{
				entity = result.getMemory('prenom').raw;
			} else {
				entity = result.getMemory('personne').fullname;
			};
			break;
			
			case 'age':
			entity = result.getMemory('age').years;
			break;
			
			case 'nombre-age':
			entity = result.getMemory('age_nombre').scalar;
			break;
			
			case 'niveau-physique':
			if(client.nvPhysique != null)
			{
				slug = 'niveau-randonneur';
			};
			
			if (result.getMemory('nv_physique_1') != null && client.nvPhysique != 1){
				entity = 1;
			} else if (result.getMemory('nv_physique_2') != null && client.nvPhysique != 2){
				entity = 2;
			} else if (result.getMemory('nv_physique_3') != null && client.nvPhysique != 3){
				entity = 3;
			} else if (result.getMemory('nv_physique_4') != null && client.nvPhysique != 4){
				entity = 4;
			} else {
				entity = client.nvPhysique;
			}
			
			break;
			
			case 'niveau-randonneur':
			if (result.getMemory('nv_randonneur_1') != null){
				entity = 1;
			} else if (result.getMemory('nv_randonneur_2') != null){
				entity = 2;
			} else if (result.getMemory('nv_randonneur_3') != null){
				entity = 3;
			} else if (result.getMemory('nv_randonneur_4') != null){
				entity = 4;
			};
			break;
			
			case 'budget':
			entity = Math.floor(result.getMemory('budget').amount);
			break;
			
			case 'nombre-budget':
			entity = Math.floor(result.getMemory('budget_nombre').scalar);
			break;
			
			case 'pas-de-preference-budget':
			entity = 1000000;
			break;
			
			
			case 'eloignement':
			if (result.getMemory('distance') != null){
				entity = ['dist',result.getMemory('distance').meters];
			} else if (result.getMemory('lieu') != null){
				entity = ['lieu', result.getMemory('lieu').lat, result.getMemory('lieu').lng]
			} else if (result.getMemory('duree') != null){
				entity = ['duree', result.getMemory('duree').hours];
			};
			break;
			
			case 'pas-de-preference-eloignement':
			entity = 0;
			break;
			
			case 'details':
			// Etats non spécifiés
			entity = [0, 0, 0, 0];
			//Spécification niveau difficulte
			if(result.getMemory('nv_difficulte_1')!=null){
				entity[0] = 1;
			} else if(result.getMemory('nv_difficulte_2')!=null){
				entity[0] = 2;
			} else if(result.getMemory('nv_difficulte_3')!=null){
				entity[0] = 3;
			} else if(result.getMemory('nv_difficulte_4')!=null){
				entity[0] = 4;
			};
			// Specifictation niveau evasion
			// TO DO : 4 niveaux pour l'évasion
			if (result.getMemory('nv_evasion_1')!=null){
				entity[1] = 1;
			} else if (result.getMemory('nv_evasion_2')!=null){
				entity[1] = 4;
			};
			// Specification niveau activites
			if (result.getMemory('activite_1')!=null){
				entity[2] = 2;
				if (result.getMemory('activite_2')!=null){
					entity[2] = 3;
					if (result.getMemory('activite_3')!=null){
						entity[2] = 4;
					};
				};		
			};
			// Specification niveau découvertes
			if (result.getMemory('decouverte_1')!=null){
				entity[3] = 2;
				if (result.getMemory('decouverte_2')!=null){
					entity[3] = 3
					if (result.getMemory('decouverte_3')!=null){
						entity[3] = 4;
					};
				};	
			};
			break;

			
			case 'selectionner-ajustement-donnees':
			choix = result.getMemory('choix').value;
			break;
			
			case 'rectifier-niveau':
			choix = result.getMemory('choix').value;
			if (result.getMemory('nv_1_rectif') != null){
				entity = 1;
			} else if (result.getMemory('nv_2_rectif') != null){
				entity = 2;
			} else if (result.getMemory('nv_3_rectif') != null){
				entity = 3;
			} else if (result.getMemory('nv_4_rectif') != null){
				entity = 4;
			};
			break;
			
			case 'rectifier-lieu':
			entity = ['dist', result.getMemory('distance_rectif')];
			break;
			
			case 'rectifier-details':
			choix = result.getMemory('choix').value;
			entity = [0,0,0,0];
			if(result.getMemory('nv_difficulte_1_rectif')!=null){
				entity[0] = 1;
			} else if(result.getMemory('nv_difficulte_2_rectif')!=null){
				entity[0] = 2;	
			} else if(result.getMemory('nv_difficulte_3_rectif')!=null){
				entity[0] = 3;
			} else if(result.getMemory('nv_difficulte_4_rectif')!=null){
				entity[0] = 4;
			};
			if (result.getMemory('nv_evasion_1_rectif')!=null){
				entity[1] = 1;
			} else if (result.getMemory('nv_evasion_2_rectif')!=null){
				entity[1] = 4;
			};	
			break;
			
			case 'en-savoir-plus':
			choix = result.getMemory('sujet').value;
			break;
			
			case 'en-savoir-encore-plus':
			choix = result.getMemory('info').value;
			break;

			
			case 'ajuster-reco':
			entity = result.getMemory('ajustement').value;
			break;

		  };
		  md.save(slug, entity, client, choix);
		  [type, content] = dial.reponseActionDone(slug, client, choix);
	  } else {
		  
		  [type, content] = dial.reponseActionNotDone(result.action.slug, client);
	  };
		console.log('type : ' + type);
		console.log('content : ' + content);
		if(content !=[]){	
		  for(var i=0; i<type.length; i++)
		  {
			message.addReply({type : type[i], content : content[i]});
		  };
		}
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
