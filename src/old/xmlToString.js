var xmlserializer = require('xmlserializer');
var xmldoc = require('xmldoc');


exports.xmlToString = function(){

	var xmldoc = new XmlDocument();
	xmldoc.load('Client_A.xml');


	var xmlS = new XMLSerializer();

	var xmltext = xmlS.serializeToString(xmldoc);
	
	console.log(xmltext);
	return(xmltext);
};