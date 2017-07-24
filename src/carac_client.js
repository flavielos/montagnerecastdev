var AGE_MIN;
var AGE_MAX;
var NV_PHYSIQUE;
var NV_DIFFICULTE;
var NV_MAX;


exports.setAgeMin = function(age){
	this.AGE_MIN = age;
};

exports.setAgeMax = function(age){
	this.AGE_MAX = age;
};

exports.setNvPhysique = function(nv){
	this.NV_PHYSIQUE = 'NV_PHYSIQUE_' + nv.toString();
};

exports.setNvDifficulte = function(nv){
	this.NV_DIFFICULTE = 'NV_DIFFICULTE_' + nv.toString();
};

exports.setNvMax = function(nv){
	this.NV_MAX = nv.toString();
};