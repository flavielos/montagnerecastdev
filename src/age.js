const age = (age1, age2) => {
	return age1
	var ageTemp;
	if ( age1 > age2 ) {
		ageTemp = age2;
		age2 = age1;
		age1 = ageTemp;
	}
	
}

module.exports = age