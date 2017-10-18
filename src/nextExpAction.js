var tree = {
	"start" : {
		"A" : ["greetings"],
		"B" : ["greetings"],
		"C" : ["greetings"],
		"D" : ["greetings"]
	},
	"goodbye" : {
		"A" : ["greetings"],
		"B" : ["greetings"],
		"C" : ["greetings"],
		"D" : ["greetings"]
	},
	"greetings" : {
		"A" : ["nom"],
		"B" : ["budget", "pas-de-preference-budget", "nombre-budget"],
		"C" : ["niveau-randonneur"],
		"D" : ["budget", "pas-de-preference-budget", "nombre-budget"]
	},
	"nom" : {
		"A" : ["age", "nombre-age"],
		"B" : ["age", "nombre-age"],
		"C" : ["age", "nombre-age"],
		"D" : ["age", "nombre-age"]
	},
	"age" : {
		"A" : ["niveau-randonneur"],
		"B" : ["niveau-randonneur"],
		"C" : ["niveau-randonneur"],
		"D" : ["niveau-randonneur"]
	},
	"nombre-age" : {
		"A" : ["niveau-randonneur"],
		"B" : ["niveau-randonneur"],
		"C" : ["niveau-randonneur"],
		"D" : ["niveau-randonneur"]
	},
	"niveau-randonneur" : {
		"A" : ["niveau-physique"],
		"B" : ["niveau-physique"],
		"C" : ["niveau-physique"],
		"D" : ["niveau-physique"]
	},
	"niveau-physique" : {
		"A" : ["budget", "pas-de-preference-budget", "nombre-budget"],
		"B" : ["budget", "pas-de-preference-budget", "nombre-budget"],
		"C" : ["budget", "pas-de-preference-budget", "nombre-budget"],
		"D" : ["budget", "pas-de-preference-budget", "nombre-budget"]
	},
	"budget" : {
		"A" : ["eloignement", "pas-de-preference-eloignement"],
		"B" : ["eloignement", "pas-de-preference-eloignement"],
		"C" : ["eloignement", "pas-de-preference-eloignement"],
		"D" : ["eloignement", "pas-de-preference-eloignement"]
	},
	"pas-de-preference-budget" : {
		"A" : ["eloignement", "pas-de-preference-eloignement"],
		"B" : ["eloignement", "pas-de-preference-eloignement"],
		"C" : ["eloignement", "pas-de-preference-eloignement"],
		"D" : ["eloignement", "pas-de-preference-eloignement"]
	},
	"nombre-budget" : {
		"A" : ["eloignement", "pas-de-preference-eloignement"],
		"B" : ["eloignement", "pas-de-preference-eloignement"],
		"C" : ["eloignement", "pas-de-preference-eloignement"],
		"D" : ["eloignement", "pas-de-preference-eloignement"]
	},
	"eloignement" : {
		"A" : ["details"],
		"B" : ["recap-valide", "recap-invalide"],
		"C" : ["details"],
		"D" : ["recap-valide", "recap-invalide"]
	},
	"pas-de-preference-eloignement" : {
		"A" : ["details"],
		"B" : ["recap-valide", "recap-invalide"],
		"C" : ["details"],
		"D" : ["recap-valide", "recap-invalide"]
	},
	"details" : {
		"A" : ["recap-valide", "recap-invalide"],
		"B" : ["recap-valide", "recap-invalide"],
		"C" : ["recap-valide", "recap-invalide"],
		"D" : ["recap-valide", "recap-invalide"]
	},
	"recap-valide" : {
		"A" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"B" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"C" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"D" : ["intro-valide", "intro-invalide", "en-savoir-plus"]
	},
	"recap-invalide" : {
		"A" : ["selectionner-ajustement-donnees"],
		"B" : ["selectionner-ajustement-donnees"],
		"C" : ["selectionner-ajustement-donnees"],
		"D" : ["selectionner-ajustement-donnees"]
	},
	"intro-valide" : {
		"A" : ["fin"],
		"B" : ["fin"],
		"C" : ["fin"],
		"D" : ["fin"]
	},
	"intro-invalide" : {
		"A" : ["ajuster-reco"],
		"B" : ["ajuster-reco"],
		"C" : ["ajuster-reco"],
		"D" : ["ajuster-reco"]
	},
	"en-savoir-plus" : {
		"A" : ["info"],
		"B" : ["info"],
		"C" : ["info"],
		"D" : ["info"]
	},
	"selectionner-ajustement-donnees" : {
		"A" : ["rectifier-lieu", "rectifier-details", "rectifier-niveau"],
		"B" : ["rectifier-lieu", "rectifier-details", "rectifier-niveau"],
		"C" : ["rectifier-lieu", "rectifier-details", "rectifier-niveau"],
		"D" : ["rectifier-lieu", "rectifier-details", "rectifier-niveau"]
	},
	"ajuster-reco" : {
		"A" : ["intro-valide", "reco-invalide", "en-savoir-plus"],
		"B" : ["intro-valide", "reco-invalide", "en-savoir-plus"],
		"C" : ["intro-valide", "reco-invalide", "en-savoir-plus"],
		"D" : ["intro-valide", "reco-invalide", "en-savoir-plus"]
	},
	"info" : {
		"A" : ["reco-valide", "reco-invalide", "en-savoir-encore-plus"],
		"B" : ["reco-valide", "reco-invalide", "en-savoir-encore-plus"],
		"C" : ["reco-valide", "reco-invalide", "en-savoir-encore-plus"],
		"D" : ["reco-valide", "reco-invalide", "en-savoir-encore-plus"]
	},
	"rectifier-lieu" : {
		"A" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"B" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"C" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"D" : ["intro-valide", "intro-invalide", "en-savoir-plus"]
	},
	"rectifier-details" : {
		"A" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"B" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"C" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"D" : ["intro-valide", "intro-invalide", "en-savoir-plus"]
	},
	"rectifier-niveau" : {
		"A" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"B" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"C" : ["intro-valide", "intro-invalide", "en-savoir-plus"],
		"D" : ["intro-valide", "intro-invalide", "en-savoir-plus"]
	},
	"reco-invalide" : {
		"A" : ["ajuster-reco"],
		"B" : ["ajuster-reco"],
		"C" : ["ajuster-reco"],
		"D" : ["ajuster-reco"]
	},
	"reco-valide" : {
		"A" : ["fin"],
		"B" : ["fin"],
		"C" : ["fin"],
		"D" : ["fin"]
	},
	"en-savoir-encore-plus" : {
		"A" : ["reco-valide", "reco-invalide"],
		"B" : ["reco-valide", "reco-invalide"],
		"C" : ["reco-valide", "reco-invalide"],
		"D" : ["reco-valide", "reco-invalide"]
	},
};

exports.isEA = function(prevAction, action, profil){
	
	return(action == tree[prevAction][profil][0] || action == tree[prevAction][profil][1] || action == tree[prevAction][profil][2])
};

exports.NEA = function(expAction, prevAction, action, profil, done){
	if(action == 'goodbye'){
		return([action, tree[action][profil][0]]);
	} else if(exports.isEA(prevAction, action,profil) && done){
		return([action, tree[action][profil][0]]);
	} else {
		return([prevAction, expAction]);
	}

};