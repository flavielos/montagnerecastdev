// Commentaire sur age_min
const cc = require('./carac_client')
const ay = require('./appel_yseop')


exports.comAgeMin = function(age){
	var com;
	var alt = 0;
	var nvMax = 4;
	// Définition des seuils
	var seuil_1 = 2;
	var seuil_2 = 10;
	if (age < seuil_1){
		alt = 1500;
		nvMax = 2
		com = age.toString() + ' ans ! Je vous félicite de faire découvrir la montagne à un enfant aussi jeune.'
	} else if (age < seuil_2){
		alt = 3000;
		nvMax = 3
		com = age.toString() + ' ans ! Je vous félicite de faire découvrir la montagne à un enfant aussi jeune.'
	} else {
		com = age.toString() + ' ans est l\'âge idéal pour la marche en montagne.'
	};
	cc.setAgeMin(age);
	cc.setNvMax(nvMax);
	var reply = {type : 'text', content : com};
	return reply;
};

exports.comAgeMax = function(age){
	var com;
	var alt = 0;
	var nvMax = 4;
	// Définition des seuils
	var seuil_1 = 80;
	var seuil_2 = 70;
	if (age > seuil_1){
		alt = 1500;
		nvMax = 2
		com = 'A ' + age.toString() + ' ans, l\'air de la montagne vous fera le plus grand bien.'
	} else if (age > seuil_2){
		alt = 3000;
		nvMax = 3
		com = 'A ' + age.toString() + ' ans, l\'air de la montagne vous fera le plus grand bien.'
	} else {
		com = age.toString() + ' ans est l\'âge idéal pour la marche en montagne.'
	};
	cc.setAgeMax(age);
	cc.setNvMax(nvMax);
	//com += '\n Quel budget par personne avez-vous pour ce voyage ?';
	var reply = {type : 'text', content : com};
	return reply;
};

exports.comNvPhysique = function(nv){
	var com;
	nv = nv.substring(12);
	var nvMax = cc.getNvMax()
	var alt;
	if (nv > nvMax){
		nv = nvMax;
	};
	if (nv <= 1){
		com = 'La marche en montagne sera pour vous une bonne reprise du sport ;) \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
	} else if (nv<=2){
		com = 'En tant que sportifs occasionnels, vous allez apprécier mon sport préféré.';
	} else if (nv<=3) {
		com = 'En tant que sportifs réguliers, vous allez apprécier mon sport préféré.';
	} else if (nv>3){
		com = 'Vous êtes de vrais athlètes ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer ;)';
	};
	//com = com + '\n Quel est votre budget par personne pour ce trek ?';
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvDifficulte = function(a, b){
	var nvPhysique = a.substring(12);
	var nvDifficulte = b.substring(14);
	var delta = nvPhysique - nvDifficulte;
	var com;
	switch(delta){
		case 3:
			com = 'Vraiment ? Pour de grands sportifs comme vous ?';
		break;
		case 2:
			com = 'Vous avez raison de vous ménager, ce sont les vacances :sunglasses:';
		break;
		case 1:
			com = 'Vous avez raison de vous ménager, ce sont les vacances :sunglasses:';
		break;
		case 0:
			com = 'Cela me parait parfaitement adapté.';
		break;
		case -1:
			com = 'Vous cherchez le challenge, j\'aime ça :muscle:';
		break;
		case -2:
			com = 'Vous cherchez le challenge, j\'aime ça :muscle:';
		break;
		case -3:
			com = 'Vraiment ? Ces parcours risquent d\'être trop difficiles pour vous...';
		break;
	}
	cc.setNvDifficulte(nvDifficulte.floor());
	var reply = {type : 'text', content : com};
	return(reply);
	
};

exports.comBudget = function(nv){
	var nb = nv.substring(10);
	var com;
	if (nb == 0){
		com = 'Ok, nous discuterons du prix plus tard.';
	} else if (nb == 1){
		com = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à la France et son voisinage';
	} else if(nb == 2){
		com = 'Je peux déjà vous dire qu\’avec un budget de cette gamme mes recommandations se cantonneront à l\’Europe et son voisinage';
	} else {
		com = 'En voilà un budget intéressant !';
	};
	//com += '\n De quelle distance environ comptez-vous vous éloigner de la France ?';

	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comEloignement = function(nv){
	var com;
	var budget = cc.getBudget().substring(10);
	var nb = nv.substring(15);
	var delta =  budget - nb;
	if (nb == 0){
		com = 'Ok, je vais vous trouver un endroit sympa !';
	} else if ( budget == 0 || delta >= 0){
		com = 'Ok, je vais vous trouver un endroit sympa !';
	} else if (delta < 0){
		com = 'Compte-tenu de votre budget, nous allons devoir faire des compromis. Cependant, je vais faire de mon mieux.';
	};
	//com += '\n Comment qualifieriez vous le niveau physique général du groupe ?';

	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvRandonneur = function(nv){
	var com;
	nv = nv.substring(14);
	if (nv <= 1){
		com = 'Je suis ravi de vous faire découvrir mon sport préféré ! \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
	} else if (nv<=2){
		com = 'J\'espère que ce trek confirmera votre amour pour la montagne';
	} else if (nv<=3) {
		com = 'J\'espère que ce trek confirmera votre amour pour la montagne';
	} else if (nv>3){
		com = 'Vous êtes des experts ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer ;)';
	};
	//com = com + '\n Quel est votre budget par personne pour ce trek ?';
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvEquipement = function(){
	var com;
	com = 'c\'est noté :smile:';
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvDecouverte = function(nv){
	var com = nv.toString();
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvEvasion = function(nv){
	var com = nv.toString();
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvActivite = function(nv){
	var com = nv.toString();
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comYseop = function(){
	var com = ay.appel();
	var reply = {type : 'text', content : com};
	return(reply);
};

