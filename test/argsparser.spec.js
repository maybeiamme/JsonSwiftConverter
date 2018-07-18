const chai = require('chai')
const expect = chai.expect;
const sinon = require('sinon');

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
		console.log(actual);
		const expected = { method: 'GET', 
			uri: 'https://api.endpoint.com',
			headers: { 'Content-Type': ' application/x-www-form-urlencoded',Authorization: ' Bearer Token' }
		};
		expect(actual).to.be.eql(expected);
	});

});