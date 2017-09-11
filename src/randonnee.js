var nvBudget;
var nvEloignement;

var nvDifficulte;
var nvEvasion;
var nvActivites;
var nvDecouvertes;

var ajustNvDifficulte;
var ajustNvEvasion;
var ajustNvActivites;
var ajustNvDecouvertes;


exports.randonnee = function(diff, evasion, acti, decouverte)
{
	this.nvDifficulte = diff;
	this.nvEvasion = evasion;
	this.nvActivites = acti;
	this.nvDecouvertes = decouverte;
	
	this.ajustNvDifficulte = 0;
	this.ajustNvEvasion = 0;
	this.ajustNvDecouvertes = 0;
	this.ajustNvActivites = 0;
	
};

