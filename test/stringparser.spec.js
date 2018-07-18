const chai = require('chai');
const fs = require('fs');
const expect = chai.expect;

describe('String parser specs', function() {
	let stringparser;
	before(() => {
		stringparser = require('./../stringparser');
	});

	it('convertJsonToSwiftCodableEntities spec', function() {
		const json = {results: [
        {
            geometry: {
                location: {
                    lat: 1.3553794,
                    lng: 103.8677444
                },
                viewport: {
                    northeast: {
                        lat: 1.4708809,
                        lng: 104.0415799
                    },
                    southwest: {
                        lat: 1.216611,
                        lng: 103.6065099
                    }
                }
            }
        }]}
		const actual = stringparser.convert('Entity', json, 'public');
		const expected = fs.readFileSync("./test/stringparserstub1.swift").toString();
		expect(actual).to.be.equal(expected);
	});

});