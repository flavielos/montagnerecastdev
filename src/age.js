function age = (age1, age2) => {

	var ageTemp;
	if ( age1 > age2 ) {
		ageTemp = age2;
		age2 = age1;
		age1 = ageTemp;
	}
	return age1
}

module.exports = age