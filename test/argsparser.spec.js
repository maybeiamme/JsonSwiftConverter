const chai = require('chai');
const expect = chai.expect;

describe('Argument parser specs', function() {
	let argsparser;
	before(() => {
		argsparser = require('./../argsparser');
	});

	it('ParseToRequestPromiseOptionFormat spec', function() {
		const options = ['executable', 'option', '-X','GET',
					  '-H',
					  'Content-Type: application/x-www-form-urlencoded',
					  '-H',
					  'Authorization: Bearer Token',
					  'https://api.endpoint.com'];
		const actual = argsparser.parseToRequestPromiseOptionFormat(options);
		const expected = { method: 'GET', 
			uri: 'https://api.endpoint.com',
			headers: { 'Content-Type': ' application/x-www-form-urlencoded',Authorization: ' Bearer Token' }
		};
		expect(actual).to.be.eql(expected);
	});

	it('ParseOptions spec', function() {
		const options = ['executable', 'option', '-P','./some/relative/path',
					  '--name',
					  'classname',
					  '-A',
					  'public_accesscontrol'];
		const actual = argsparser.parseOptions(options);
		const expected = { path: './some/relative/path', 
			name: 'classname',
			accesscontrol: 'public_accesscontrol' };
		expect(actual).to.be.eql(expected);
	});

});