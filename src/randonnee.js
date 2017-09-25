

var nvDifficulte;
var nvEvasion;
var nvActivites;
var nvDecouvertes;

var ajustNvDifficulte;
var ajustNvEvasion;
var ajustNvActivites;
var ajustNvDecouvertes;

var recoIntro;
var recoDifficulte;
var recoEvasion;
var recoActivites;
var recoDecouvertes;
var recoConclusion;
var siteTitre;
var siteNum
var imageUrl;

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

