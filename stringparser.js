exports.convert = function convertJsonToSwiftCodableEntities(topClassName, json, accessControl) {
	if(accessControl === 'undefined' || accessControl == null) {
		accessControl = 'internal';
	}
	let stack = [];
	modelEntityDeclaration(topClassName, json, stack);
	let string = '';
	while(stack.length > 0) {
		let poped = stack.pop();
		string += createStringFromObject(accessControl, poped);
	}
	return string;
}

function modelEntityDeclaration(classname, object, stack) {
	let model = {};
	let declaration = {};
	for (const [key, val] of Object.entries(object)) {
		const dataType = objectType(val);
		if(dataType == 'Array<object>') {
			const arrayItemKey = uppercaseFirstLetter(key) + 'Item';
			modelEntityDeclaration(arrayItemKey, val[0], stack);
			declaration[key] = `Array<${arrayItemKey}>?`;
		} else if(dataType == 'object') {
			modelEntityDeclaration(uppercaseFirstLetter(key), val, stack);
			declaration[key] = `${uppercaseFirstLetter(key)}?`;
		} else {
			declaration[key] = dataType;
		}
	}
	model[classname] = declaration;
	stack.push(model);
}

function objectType(object) {
	if(object == null) {
		return "Any?";
	}
	if(typeof object === 'string') {
		return "String?";
	} else if(typeof object === 'number') {
		if(object % 1 === 0) {
			return "Int?";
		} else {
			return "Double?";
		}
	} else if(typeof object === 'boolean') {
		return "Bool?";
	} else if(typeof object === 'object') {
		if(Array.isArray(object)) {
			if(typeof object[0] === 'undefined') {
				return "Array<Any>?";
			}
			if(typeof object[0] === 'string') {
				return "Array<String>?";
			}
			if(typeof object[0] === 'number') {
				if(object % 1 === 0) {
					return "Array<Int?>"; 
				} else {
					return "Array<Double?>"; 
				}
			}
			if(typeof object[0] === 'object') {
				return "Array<object>"
			}
		} else {
			return 'object';
		}
	}
}

function createStringFromObject(accessControl, object) {
	let className;
	let classDeclaration;
	for (const [key, val] of Object.entries(object)) {
		className = key;
		classDeclaration = val;
	}
	let initial = `${accessControl} struct ${className}: Codable {\n\t`
	for (const [key, val] of Object.entries(classDeclaration)) {
		initial += `${accessControl} let ${key}: ${val}\n\t`;
	}
	initial += '\n}\n\n';
	return initial;
}

function uppercaseFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}