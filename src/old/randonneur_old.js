var prenom;
var age;



exports.setPrenom = function(name){
	this.prenom = name;
};

exports.getPrenom = function(){
	return(this.prenom);
};

exports.setAge = function(ageRandonneur){
	this.age = ageRandonneur;
};

exports.getAge = function(){
	return(this.age);
};

