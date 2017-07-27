var PRENOM
var AGE_MIN;
var AGE_MAX;
var NV_PHYSIQUE;
var NV_DIFFICULTE;
var NV_MAX;
var BUDGET;
var ELOIGNEMENT;
var NV_ACTIVITES;
var NV_DECOUVERTE;
var NV_EVASION;

exports.setPrenom = function(name){
	this.PRENOM = name;
};

exports.getPrenom = function(){
	return(this.PRENOM);
};

exports.setAgeMin = function(age){
	this.AGE_MIN = age;
};

exports.getAgeMin = function(){
	return(this.AGE_MIN);
};

exports.setAgeMax = function(age){
	this.AGE_MAX = age;
};

exports.getAgeMax = function(){
	return(this.AGE_MAX);
};

exports.setNvPhysique = function(nv){
	this.NV_PHYSIQUE = nv;
};

exports.getNvPhysique = function(){
	return(this.NV_PHYSIQUE);
};

exports.setNvDifficulte = function(nv){
	this.NV_DIFFICULTE = nv.toString();
};

exports.getNvDifficulte = function(){
	return(this.NV_DIFFICULTE);
};

exports.setNvMax = function(nv){
	this.NV_MAX = nv.toString();
};

exports.getNvMax = function(){
	return(this.NV_MAX);
};

exports.setBudget = function(nv){
	this.BUDGET = nv;
};

exports.getBudget = function(){
	return(this.BUDGET);
};

exports.setEloignement = function(nv){
	this.ELOIGNEMENT = nv;
};

exports.getEloignement = function(){
	return (this.ELOIGNEMENT);
};


exports.setNvRandonneur = function(nv){
	this.NV_RANDONNEUR = nv;
};

exports.getNvRandonneur = function(){
	return(this.NV_RANDONNEUR);
};

exports.setNvEquipement = function(nv){
	this.NV_EQUIPEMENT = nv;
};

exports.getNvEquipement = function(){
	return(this.NV_EQUIPEMENT);
};

exports.setNvActivites = function(nv){
	this.NV_ACTIVITES = nv;
};

exports.getNvActivites = function(){
	return(this.NV_ACTIVITES);
};
exports.setNvEvasion = function(nv){
	this.NV_EVASION = nv;
};

exports.getNvEvasion = function(){
	return(this.NV_EVASION);
};
exports.setNvDecouverte = function(nv){
	this.NV_DECOUVERTE = nv;
};

exports.getNvDecouverte = function(){
	return(this.NV_DECOUVERTE);
};
