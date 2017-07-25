/*
 * message.js
 * This file contains your bot code
 */

const recastai = require('recastai')
const rd = require('./regles_dialogue')
const ay = require('./appel_yseop')
const cc = require('./carac_client')



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
	

	// get age_min
	if (result.action && result.action.slug == 'donner-age' && result.action.done){
		cc.setAgeMin(result.getMemory('age_min').years);
		message.addReply(rd.comAgeMin(cc.getAgeMin()));
	};
	//get age_max
	if (result.action && result.action.slug == 'donner-age-1' && result.action.done){
		cc.setAgeMax(result.getMemory('age_max').years);
		message.addReply(rd.comAgeMax(cc.getAgeMax()));
	};
	// get niveau physique
	if (result.action && result.action.slug == 'donner-niveau'  && result.action.done){
		console.log(result.getMemory('nv_physique') == null);

		if (result.getMemory('nv_physique') != null){
			cc.setNvPhysique('NV_PHYSIQUE_' + result.getMemory('nv_physique').scalar);
		} 
		message.addReply(rd.comNvPhysique(cc.getNvPhysique()));
	};
	
	if (result.action &&  result.action.slug == 'donner-niveau-physique' && result.action.done){
		console.log(result.getMemory('nv_physique_1'));
		if (result.getMemory('nv_physique_1') != null){
			cc.setNvPhysique('NV_PHYSIQUE_1');
		} else if (result.getMemory('nv_physique_2') != null){
			cc.setNvPhysique('NV_PHYSIQUE_2');
		} else if (result.getMemory('nv_physique_3') != null){
			cc.setNvPhysique('NV_PHYSIQUE_3');
		} else if (result.getMemory('nv_physique_4') != null){
			cc.setNvPhysique('NV_PHYSIQUE_4');
		};
		message.addReply(rd.comNvPhysique(cc.getNvPhysique()));
	};
	// get budget
	if (result.action && result.action.slug == 'donner-budget' && result.action.done){
		var nb;
		var euro = result.getMemory('budget').dollars*0.858;
		if (euro<=100){
			nb = 1;
		} else if (euro<=500){
			nb = 2;
		} else {
			nb = 3;
		};
		cc.setBudget('NV_BUDGET_' + nb);
		message.addReply(rd.comBudget(cc.getBudget()));
	};
	if (result.action && result.action.slug == 'pas-de-preference'){
		cc.setBudget('NV_BUDGET_' + 0);
		message.addReply(rd.comBudget(cc.getBudget()));
	};
	
	// get eloignement
	if (result.action && result.action.slug == 'donner-lieu' && result.action.done){
		var dist;
		if(result.getMemory('distance')!=null){
			dist = result.getMemory('distance').meters;
		} else if (result.getMemory('lieu')!=null){
			var latP = 49.9;
			var lonP = 2.3;
			var lat = result.getMemory('lieu').lat;
			var lon = result.getMemory('lieu').lng;
			var deltaLat = (latP-lat);
			var deltaLon = (lonP-lon);
			dist = Math.sqrt(Math.pow(deltaLat,2) + Math.pow(deltaLon,2))*111;
		};
		console.log('dist : ' + dist);
		var nb;
		if(dist <= 1000){
			nb = 1;
		} else if (dist <= 3000){
			nb = 2;
		} else {
			nb = 3;
		};
		cc.setEloignement('NV_ELOIGNEMENT_' + nb.toString());
		message.addReply(rd.comEloignement(cc.getEloignement()));
	};
	if (result.action && result.action.slug == 'pas-de-preference-1'){
		var nb =0;
		cc.setBudget('NV_ELOIGNEMENT_' + nb.toString());
		console.log('eloignement : ' + cc.getEloignement());
		message.addReply(rd.comEloignement(cc.getEloignement()));
	};
	
	// get niveau randonneur
	if (result.action && result.action.slug == 'donner-niveau-1'  && result.action.done){

		if (result.getMemory('nv_randonneur') != null){
			cc.setNvRandonneur('NV_RANDONNEUR_' + result.getMemory('nv_randonneur').scalar);
		} 
		message.addReply(rd.comNvRandonneur(cc.getNvRandonneur()));
	};
	
	if (result.action &&  result.action.slug == 'donner-niveau-physique-1' && result.action.done){
		if (result.getMemory('nv_randonneur_1') != null){
			cc.setNvRandonneur('NV_RANDONNEUR_1');
		} else if (result.getMemory('nv_randonneur_2') != null){
			cc.setNvRandonneur('NV_RANDONNEUR_2');
		} else if (result.getMemory('nv_randonneur_3') != null){
			cc.setNvRandonneur('NV_RANDONNEUR_3');
		} else if (result.getMemory('nv_randonneur_4') != null){
			cc.setNvRandonneur('NV_RANDONNEUR_4');
		};
		message.addReply(rd.comNvRandonneur(cc.getNvRandonneur()));
	};

	//get niveau equipement
	if (result.action && result.action.slug == 'donner-equipement'  && result.action.done){
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
		cc.setNvEquipement('NV_EQUIPEMENT_' + nv);
		message.addReply(rd.comNvEquipement());
	};
	if (result.action && result.action.slug == 'donner-niveau-2'  && result.action.done){

		if (result.getMemory('nv_equipement') != null){
			cc.setNvEquipement('NV_EQUIPEMENT_' + result.getMemory('nv_equipement').scalar);
		} 
		message.addReply(rd.comNvEquipement());
	};

	//get détails
/*	if (result.action && result.action.slug == 'donner-details'  && result.action.done){
		if(result.getMemory('nv_difficulte_1')!=null){
			cc.setNvDifficulte('NV_DIFFICULTE_1');
			console.log(result.getMemory('nv_difficulte_1'));
			//message.reply(rd.comNvDifficulte(cc.getNvPhysique(), cc.getNvDifficulte()));
		} else if(result.getMemory('nv_difficulte_2')!=null){
			cc.setNvDifficulte('NV_DIFFICULTE_2');
			console.log(result.getMemory('nv_difficulte_2'));
			//message.reply(rd.comNvDifficulte(cc.getNvPhysique(), cc.getNvDifficulte()));			
		} else if(result.getMemory('nv_difficulte_3')!=null){
			cc.setNvDifficulte('NV_DIFFICULTE_3');
			console.log(result.getMemory('nv_difficulte_3'));
			//message.reply(rd.comNvDifficulte(cc.getNvPhysique(), cc.getNvDifficulte()));			
		} else if(result.getMemory('nv_difficulte_4')!=null){
			cc.setNvDifficulte('NV_DIFFICULTE_4');
			console.log(result.getMemory('nv_difficulte_4'));
			//message.reply(rd.comNvDifficulte(cc.getNvPhysique(), cc.getNvDifficulte()));			
		};
		if (result.getMemory('nv_evasion_1')!=null){
			cc.setNvEvasion('NV_EVASION_1');
			console.log(result.getMemory('nv_evasion_1'));
			//message.reply(rd.comNvEvasion(cc.getNvEvasion()));
		} else if (result.getMemory('nv_evasion_2')!=null){
			cc.setNvEvasion('NV_EVASION_2');
			console.log(result.getMemory('nv_evasion_2'));
			//message.reply(rd.comNvEvasion(cc.getNvEvasion()));
		};
		if (result.getMemory('activite_1')!=null){
			var nb = 1;
			console.log(result.getMemory('activite_1') + result.getMemory('activite_2') + result.getMemory('activite_3'));
			if (result.getMemory('activite_2')!=null){
				nb = 2;
				if (result.getMemory('activite_3')!=null){
					nb = 3;
				};
			};		
			cc.setNvActivites('NV_ACTIVITES_' + nb);
			//message.reply(rd.comNvActivites(cc.getNvActivites()));
		};
		if (result.getMemory('decouverte_1')!=null){
			console.log(result.getMemory('decouverte_1') + result.getMemory('decouverte_2') + result.getMemory('decouverte_3'));
			var nb = 1;
			if (result.getMemory('decouverte_2')!=null){
				nb = 2
				if (result.getMemory('decouverte_3')!=null){
					nb = 3;
				};
			};	
			cc.setNvDecouverte('NV_DECOUVERTE_' + nb);	
			//message.reply(rd.comNvDecouverte(cc.getNvDecouverte()));
		};
	};
*/	
	// appel yseop
	if (result.action && result.action.slug == 'meteo' && result.action.done){
		console.log(ay.appel());
	}
	

	
	
    if (result.action) {
      console.log('The conversation action is: ', result.action.slug)
    }

    // If there is not any message return by Recast.AI for this current conversation
    if (!result.replies.length) {
		// A ENLEVER A LA FIN
      message.addReply({ type: 'text', content: 'I don\'t have the reply to this yet :)' })
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
