var prenom;
var age;
var tag;


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

exports.setTag = function(tagRandonneur){
	this.tag = tagRandonneur;
};

exports.getTag = function(){
	return(this.tag);
};