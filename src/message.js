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
	  var profil = senderId[0];
	  console.log('memoire : ' + result.memory);

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
				value: senderId[0],
				raw : senderId[0]
			  },
			  prenom : null
			}
			);
			break;

		  };
		  [type, content] = dial.reponseActionDone(slug, result, profil);
	  } else {
		  [type, content] = dial.reponseActionNotDone(result.action.slug);
	  };
		console.log('type : ' + type);
		console.log('content : ' + content);
		if(content[0] !=null){	
			for(var i=0; i<type.length; i++)
			{
				message.addReply({type : type[i], content : content[i]});
			};
		} else {
			message.addReply({type : 'text', content : 'Message vide'});
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
