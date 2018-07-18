"use strict";
const argsparser = require('./argsparser');
const stringparser = require('./stringparser');
const request_promise = require('request-promise');
const fs = require('fs');

async function generate() {
	const promiseOption = argsparser.parseToRequestPromiseOptionFormat(process.argv);
	const option = argsparser.parseOptions(process.argv);
	const path = option.path;
	const classname = option.name;
	const accessControl = option.accesscontrol;
	const json = JSON.parse(await request_promise(promiseOption));
	const string = stringparser.convert(classname, json, accessControl);

	fs.writeFile(path, string, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	}); 
}

generate();
