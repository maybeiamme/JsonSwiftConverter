const commander = require('commander');

function collect(val, memo) {
	memo.push(val);
	return memo;
}

function string(val) {
	return val;
}

function initializeCommand() {
	commander
	.usage('[curl options] [generator options]')
	.option('-H, --header <v>', 'Same usage as curl option', collect, [])
	.option('-X, --request <v>', 'Same usage as curl option', string)
	.option('-d, --data <v>', 'Same usage as curl option', string)
	.option('-P, --path <v>', 'Destination path for swift file', string)
	.option('-N, --name <v>', 'Top most struct name for domain model entity', string)
	.option('-A, --accesscontrol <v>', 'Prefered accesscontrol for each variables and structs', string);
}

exports.parseToRequestPromiseOptionFormat = function parse(args) {
	initializeCommand();
	commander
	.parse(args);
	let returnVal = {
		method: commander.request,
		uri: commander.args[0]
	}
	returnVal.headers = commander.header.map(val => val.split(':')).reduce(function(prev, next) {
		prev[next[0]] = next[1];
		return prev;
	}, {});
	if(commander.data != null) {
		returnVal.body = commander.data;
	}
	return returnVal
}

exports.parseOptions = function options(args) {
	commander
	.parse(args);

	return {
		name: commander.name != null ? commander.name : 'Entity',
		accesscontrol: commander.accesscontrol != null ? commander.accesscontrol : 'internal',
		path: commander.path != null ? commander.path : './Entity.swift'
	}
}