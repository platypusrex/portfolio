const basePath = '/api';
const defaultHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

export async function get (path, options) {
	let fetchOptions = {...options};
	fetchOptions.headers = fetchOptions.headers || {};

	const res = await fetch(`${basePath}${path}`, fetchOptions);
	return res.json();
}

export async function post (path, body, options) {
	let fetchOptions = {...options};

	fetchOptions.method = 'POST';
	fetchOptions.mode = 'cors';
	fetchOptions.headers = Object.assign({}, defaultHeaders, fetchOptions);
	fetchOptions.body = JSON.stringify(body);

	const res = await fetch(`${basePath}${path}`, fetchOptions);
	return res.json();
}