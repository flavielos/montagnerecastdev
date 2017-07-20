// Commentaire sur age_min
exports.comAgeMin = function(age1, age2){
	var com;
	var alt = 0;
	// Définition des seuils
	var seuil_1 = 2;
	var seuil_2 = 10;
	var seuil_3 = 70;
	var seuil_4 = 80;
	// s'assurer que age_min est le plus jeune
	age1 > age2 ? age1:age2;
	if (age1<2){
		alt = 1500;
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
			com = 'Wow ! Vous voyagez avec toute la famille :)'
		} else if (age2>70){
			alt = 3000;
			com = 'Wow ! Vous voyagez avec toute la famille :)'
		} else {
			alt = 3000;
			com = 'Je vous félicite de faire découvrir les joies de la montagne à un enfant aussi jeune. :)'
		}
	} else {
		if (age2>80){
			alt = 1500;
			com = 'Le grand air de la montagne vous fera du bien.'
		} else if (age2>70){
			alt = 3000;
			com = 'Le grand air de la montagne vous fera du bien.'
		} else {
			com = 'Vous avez la jeunesse idéale pour la randonnée en montagne !'
		}
	}
	if(age1<10 || age2>70){
		com = com + 'Cependant, en raison de votre âge, je ne pourrai vous proposer que des parcours ne dépassant pas les ' + alt.toString() + ' mètres.';
	}
	var reply = {type : 'text', content : com};
	return reply;
};
