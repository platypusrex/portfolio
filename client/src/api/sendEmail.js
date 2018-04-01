import { post } from "./apiUtil";

export async function sendEmail (requestBody) {
	const path = '/sendEmail';

	return await post(path, requestBody);
}