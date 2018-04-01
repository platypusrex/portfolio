export function validateFormFields (values) {
	if (!values.length) return false;
	let keys = [];

	values.forEach(value => {
		const currentKey = Object.keys(value)[0];
		if (!value[currentKey]) {
			keys.push(currentKey);
		}
	});

	const errors = {};
	keys.forEach(key => errors[key] = `${key} is required`);


	return errors;
}