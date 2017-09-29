const modRandonnee = require('./randonnee');
const modRandonneur = require('./randonneur');

var membres;
var rando;
var profil;
var senderId;
var origin;

var dernierSite;
var sitesDejaRecommandes;
var indicateurNouveauSite;

var nvPhysique;
var nvRandonneur;
var nvBudget;
var lieu;

exports.randonneurs = function(a, canal)
{
	this.profil = a;
	this.membres = ['client'];
	this.rando = new modRandonnee.randonnee(0,0,0,0);
	this.origin = canal;
	this.indicateurNouveauSite = false;

	switch(a){
		
		case 'A':
		this.membres[0] = new modRandonneur.randonneur('Tom', 30);
		break;
		
		case 'B':
		this.membres[0] = new modRandonneur.randonneur('Michel', 50);
		this.membres[1] = new modRandonneur.randonneur('Patricia', 52);
		this.membres[2] = new modRandonneur.randonneur('Pierre', 15);
		this.membres[3] = new modRandonneur.randonneur('Marie', 6);
		this.nvPhysique = 1;
		this.nvRandonneur = 2;
		this.dernierSite = 'SITE_12';
		this.rando = new modRandonnee.randonnee(1, 4, 1, 4);
		break;
		
		case 'C':
		this.membres[0] = new modRandonneur.randonneur('Jeannine', 75);
		this.membres[1] = new modRandonneur.randonneur('Jeannot', 78);
		break;
		
		case 'D':
		this.membres[0] = new modRandonneur.randonneur('Paul', 25);
		this.membres[1] = new modRandonneur.randonneur('Jean', 22);
		this.membres[2] = new modRandonneur.randonneur('Marine', 26);
		this.membres[3] = new modRandonneur.randonneur('Inès', 23);
		this.nvPhysique = 3;
		this.nvRandonneur = 3;
		this.dernierSite = 'SITE_4';
		this.rando = new modRandonnee.randonnee(3, 1, 4, 1);
		break;
	};
};

