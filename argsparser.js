const commander = require('commander');

function collect(val, memo) {
	memo.push(val);
	return memo;
}

function string(val) {
	return val;
}

exports.parseToRequestPromiseOptionFormat = function parse(args) {
	commander
	.option('-H, --header <v>', 'HttpHeader', collect, [])
	.option('-X, --request <v>', 'Request command', string)
	.option('-d, --data <v>', 'POST BODY', string)
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
	.option('-P, --path <v>', 'filepath', string)
	.option('-N, --name <v>', 'classname', string)
	.option('-A, --accesscontrol <v>', 'accesscontrol', string)
	.parse(args);

	return {
		name: commander.name != null ? commander.name : 'Entity',
		accesscontrol: commander.accesscontrol != null ? commander.accesscontrol : 'internal',
		path: commander.path != null ? commander.path : './Entity.swift'
	}
}