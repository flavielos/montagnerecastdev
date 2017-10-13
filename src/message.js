/*
 * message.js
 * This file contains your bot code
 */

 const recastai = require('recastai')
 const md = require('./majData');
 const rando = require('./randonneurs');
 const rep = require('./reponse.js');
 const qu = require('./question.js');
 const nea = require('./nextExpAction.js');
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
	if (result) {
		//console.log(result.getMemory());
		var profil = senderId[0];
		if(result.getMemory('profil') != profil){
			result.setMemory(
				{
				  profil: {
					value: senderId[0],
					raw : senderId[0]
				  }
				}
			);
		};
		
		var action;
		var done;
		if(result.action){
			action = result.action.slug;
			done = result.action.done;
		} else {
			action = 'default';
			done = true;
		};
		console.log('action is ' + action + ' and it is ' + done);
		
		var expAction
		if( result.getMemory('expaction') != null){
			if(result.action){
				if (result.action.slug != 'goodbye'){
					expAction = result.getMemory('expaction').value;
				}
			} else if (!result.action){
				expAction = result.getMemory('expaction').value;
			}
		} else {
			expAction = "greetings";
		};
		var prevAction 
		if(result.getMemory('prevaction') != null){
			if(result.action){
				if (result.action.slug != 'goodbye'){
					prevAction = result.getMemory('prevaction').value;
				}
			} else if (!result.action){
				prevAction = result.getMemory('prevaction').value;
			}
		} else {
			prevAction = "start";
		};
		console.log('previous action was ' + prevAction + ' and expected action was ' + expAction);
		
		
		client = md.save(result, profil);
		

		
		var choix = 'none';
		if(result.getMemory('info') != null){
			choix = result.getMemory('info').raw;
		} else  if(result.getMemory('sujet') != null){
			choix = result.getMemory('sujet').raw;
		} else  if(result.getMemory('choix') != null){
			choix = result.getMemory('choix').raw;
		} 
		var isea = nea.isEA(prevAction, action, profil);
		var reponse = rep.reponse(action, done, client, choix, isea);
		console.log(reponse);
	

		[prevAction, expAction] = nea.NEA(expAction, prevAction, action, profil, done);
		console.log('expected next action is ' + expAction);
		result.setMemory({
				  expaction: {
					value: expAction,
					raw : expAction
				  },
				  prevaction : {
					  value : prevAction,
					  raw : prevAction
				  }
				}
			);
		var question = qu.question(expAction, done, isea);

		if(reponse.type == 'text' && question.type == 'text'){
			message.addReply({'type' : 'text', 'content' : reponse.content + '</br>' + question.content})
		} else if(reponse.type == 'text' && question.type == 'quickReplies'){
			message.addReply({
				'type' : 'quickReplies',
				content : {
					title: reponse.content + '</br>' + question.content.title,
					buttons: question.content.buttons
					}
			})
		} else if ( reponse.type == 'card'){
			message.addReply(reponse);
		} else if (reponse.type == 'quickReplies'){
			message.addReply(reponse);
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
