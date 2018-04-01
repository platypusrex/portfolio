import nodemailer from 'nodemailer'
import { accessToken, clientEmail, clientId, clientSecret, refreshToken } from "../config";

const smtpTransport = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	auth: {
		type: 'OAuth2',
		user: clientEmail,
		clientId: clientId,
		clientSecret: clientSecret,
		refreshToken: refreshToken,
		accessToken: accessToken
	}
});

export async function sendEmail (mailOptions) {
	await smtpTransport.sendMail(mailOptions, function(err, res) {
		if (error) {
			console.log(err);
		} else {
			console.log(res);
		}

		smtpTransport.close();
	});
}