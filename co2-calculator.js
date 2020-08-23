#!/usr/bin/env node
'use strict';

// Using yargs package for parsing named parameters
const args = require('yargs').argv;

// Quick dictionary - emissions values for each vehicle type
var emissionsDict = {
	"small-diesel-car": 142,
	"small-petrol-car": 154,
	"small-plugin-hybrid-car": 73,
	"small-electric-car": 50,
	"medium-diesel-car": 171,
	"medium-petrol-car": 192,
	"medium-plugin-hybrid-ca,r": 110,
	"medium-electric-car": 58,
	"large-diesel-car": 209,
	"large-petrol-car": 282,
	"large-plugin-hybrid-ca,r": 126,
	"large-electric-car": 73,
	"bus": 27,
	"train": 6
};

// Error flag, set to false, assuming there are no errors.
var error_flag = false;

// Handling distance argument
if(typeof(args.distance) == 'number'){
	var distance = args.distance;
}else{
	console.log('Error: Specify distance as a parameter (--distance <distance as number>)');
	error_flag = true;
}

// Handling transportation-method argument
if(emissionsDict[args.transportationMethod] == undefined){
	console.log('Error: Specify transportation-method as a parameter (--transportation-method [small-diesel-car|small-petrol-car|...])');	
	error_flag = true;
}else{
	var emissionsPerKm = emissionsDict[args.transportationMethod];
}

// Exiting in the event of missing values
if(error_flag) return;

// Handling unit-of-distance argument
switch(args.unitOfDistance){
	case "km":
		var unitOfDistance = args.unitOfDistance;
		break;
	case "m":
		var unitOfDistance = args.unitOfDistance;
		distance = distance/1000;
		break;
	default:
		var unitOfDistance = 'km';
}

// Calculating emissions
var emissions = emissionsPerKm * distance;

// Handling output units
switch(args.output) {
	case "kg":
		var emissionsUnit = 'kg';
		emissions = emissions / 1000;
		break;
	case "g":
		var emissionsUnit = 'g';
		break;
	default:
		if(emissions >= 1000){
			var emissionsUnit = 'kg';
			emissions = emissions / 1000;
		}else{
			var emissionsUnit = 'g';
		}
}

// Final output, rounded to one decimal point
console.log("Your trip caused %d%s of CO2-equivalent.", emissions.toFixed(1), emissionsUnit);