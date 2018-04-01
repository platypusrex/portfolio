import { clientEmail } from "../config";
import { sendEmail } from "../utils/nodemailer.util";

export const sendEmailFromContact = async (ctx) => {
	const {name, email, message} = ctx.request.body;

	if (!name || !email || !message) {
		ctx.body = {isSuccess: false};
	}

	await sendEmail({
		from: email,
		to: clientEmail,
		subject: `Frank Cooke Portfolio - New Message from ${name}`,
		text: message
	});

	ctx.body = {isSuccess: true};
};