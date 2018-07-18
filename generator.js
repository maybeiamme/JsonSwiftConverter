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

generate()

// test command
// node generator.js -X POST -H 'Content-Type: application/x-www-form-urlencoded' -d 'access_token=00KYz~CEsDBGc8cOLWYCNtz5rMErFxqALEk-bg1ESRJ1gE58diJ5djkgVYMLRcJoIK1vNTN5dg7hwiXokOhKT7NnGX8C1lVhoumgZsoRwhfWTEgDFcEW-RSrt3K9KPR1PBC~3ruz8MgwEpmVcF9v482XlPpSLe9zeaURnkSUJpJ5dsaD62coaq5CXZtlGzwkTtgLwKXtK2ulKiW2WhKpAbHA&_password=qa_gurus11&region=sg&_username=abigail@propertyguru.com.sg' 'https://api.propertyguru.com/v1/jwt/login'
// node generator.js -X GET -H 'Content-Type: application/x-www-form-urlencoded' -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FHRU5UIiwiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWJpZ2FpbEBwcm9wZXJ0eWd1cnUuY29tLnNnIiwidXNlcklkIjoxNzY4MDYsInJlZ2lvbiI6InNnIiwiaWF0IjoxNTMxODE5NTMzLCJleHAiOjE1MzQ0OTc5MzN9.DiDAK25CCL_LXcSUuJIzmTJ28yQkqs4866Xch1OnGWDBQF2mrPohorUdJ8oSxUsw-KHBIRnH4Meyvqq_1YCU4wSSXtjcNXVGQc2rbQVn5OxdXff_m6OkQ-WkGPoppviotE7HGhxYVyY0fOXBY5tHPAvvskctUthXTspSlJ74GZ7dFuy4jImeNwoJ7LBg36pSorqT0nQsLPVnN7q2_EC2qAXKdsK9Nvt2No_c95cp0W5s3lQb6vz-yzCwMeF0cYJdxw_TbU5EULeckPjHQJ62ThXknN2_TWWv_SGUbcFQw-TIR-VxWqqfw760M3IJMAbwGyRGE-2qljSY89E5ZkB8MtgoIFhwjmiRaKY1v1iMjBpgVrdCz8sYyz-J6aUcy_VWXMZvkYVYz8fafnv-HcznTnQGe5VJF3VeL5G2yiZ0oh_fr8WzhhfinRFbh3ZXKeY-IclJBjggP4njUW67QzDlovxoK41pQKCy0rtPFAkC7todD8YPg_xXuSYmWeLPgGA_1XRhoYdB598JdcXzmSmlZFcqIB5CsvgC1sX2n6VLqdX43hLJxO_suOvPyJhx0eFJQI1WXSABISufeUfqLPBIKdp9ZFgLntFEwMHS6cbuSdP3OAMYJ-nrYWtGeA8EeBnzzAWmJIPX2_-8huxCftYAshzbt4SRDsSnplQMfHM_fyA'  'https://api.propertyguru.com/v3/agent/176806?access_token=00KYz~CEsDBGc8cOLWYCNtz5rMErFxqALEk-bg1ESRJ1gE58diJ5djkgVYMLRcJoIK1vNTN5dg7hwiXokOhKT7NnGX8C1lVhoumgZsoRwhfWTEgDFcEW-RSrt3K9KPR1PBC~3ruz8MgwEpmVcF9v482XlPpSLe9zeaURnkSUJpJ5dsaD62coaq5CXZtlGzwkTtgLwKXtK2ulKiW2WhKpAbHA&region=sg&locale=en' --name Generated
// internal struct 176806?access_token=00KYz~CEsDBGc8cOLWYCNtz5rMErFxqALEk-bg1ESRJ1gE58diJ5djkgVYMLRcJoIK1vNTN5dg7hwiXokOhKT7NnGX8C1lVhoumgZsoRwhfWTEgDFcEW-RSrt3K9KPR1PBC~3ruz8MgwEpmVcF9v482XlPpSLe9zeaURnkSUJpJ5dsaD62coaq5CXZtlGzwkTtgLwKXtK2ulKiW2WhKpAbHA&region=sg&locale=en
