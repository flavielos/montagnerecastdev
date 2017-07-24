// Commentaire sur age_min
const cc = require('./carac_client')


exports.comAgeMin = function(age1, age2){
	var com;
	var alt = 0;
	var nvMax = 4;
	// Définition des seuils
	var seuil_1 = 2;
	var seuil_2 = 10;
	var seuil_3 = 70;
	var seuil_4 = 80;
	// s'assurer que age_min est le plus jeune
	age1 > age2 ? age1:age2;
	if (age1<2){
		alt = 1500;
		nvMax = 2;
		if (age2>80){
			com = 'Wow ! Vous voyagez avec toute la famille :)'
		} else if (age2>70){
			com = 'Wow ! Vous voyagez avec toute la famille :)'
		} else {
			com = 'Je vous félicite de faire découvrir les joies de la montagne à un enfant aussi jeune. :)'
		}
	} else if (age2<10){
		if (age2>80){
			alt = 1500;
			nvMax = 2;
			com = 'Wow ! Vous voyagez avec toute la famille :)'
		} else if (age2>70){
			alt = 3000;
			nvMax = 3;
			com = 'Wow ! Vous voyagez avec toute la famille :)'
		} else {
			alt = 3000;
			nvMax = 3;
			com = 'Je vous félicite de faire découvrir les joies de la montagne à un enfant aussi jeune. :)'
		}
	} else {
		if (age2>80){
			alt = 1500;
			nvMax = 2;
			com = 'Le grand air de la montagne vous fera du bien.'
		} else if (age2>70){
			alt = 3000;
			nvMax = 3;
			com = 'Le grand air de la montagne vous fera du bien.'
		} else {
			com = 'Vous avez la jeunesse idéale pour la randonnée en montagne !'
		}
	}
	if(age1<10 || age2>70){
		com = com + 'Cependant, en raison de votre âge, je ne pourrai vous proposer que des parcours ne dépassant pas les ' + alt.toString() + ' mètres.';
	}
	var reply = {type : 'text', content : com};
	cc.setAgeMin(age1);
	cc.setAgeMax(age2);
	cc.setNvMax(nvMax);
	return reply;
};

exports.comNvPhysique = function(nv){
	var com;
	if (nv <= 1){
		cc.setNvPhysique(1);
		com = 'La marche en montagne sera pour vous une bonne reprise du sport ;) \n Je vous conseille cependant de ne pas vous lancer dans un trek trop difficile';
	} else if (nv<=2){
		cc.setNvPhysique(2);
		com = 'En tant que sportifs occasionnels, vous allez apprécier mon sport préféré.';
	} else if (nv<=3) {
		cc.setNvPhysique(3);
		com = 'En tant que sportifs réguliers, vous allez apprécier mon sport préféré.';
	} else if (nv>3){
		cc.setNvPhysique(4);
		com = 'Vous êtes de vrais athlètes ! Je vous conseille de choisir un trek de bonne difficulté pour ne pas vous ennuyer ;)';
	}
	var reply = {type : 'text', content : com};
	return(reply);
};

exports.comNvDifficulte = function(nvPhysique, nvDifficulte){
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