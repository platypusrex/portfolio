import Router from 'koa-router';
import {sendEmailFromContact} from "../controllers/send-email.controller";

const basePath = '/api/sendEmail';
const router = new Router();

router
	.prefix(basePath)
	.post('/', sendEmailFromContact);

export default router;



// import nodemailer from 'nodemailer'
// import {accessToken, clientEmail, clientId, clientSecret, refreshToken} from "../config";
//
// const smtpTransport = nodemailer.createTransport({
// 	host: 'smtp.gmail.com',
// 	auth: {
// 		type: 'OAuth2',
// 		user: clientEmail,
// 		clientId: clientId,
// 		clientSecret: clientSecret,
// 		refreshToken: refreshToken,
// 		accessToken: accessToken
// 	}
// });
//
// const mailOptions = {
// 	from: 'frankcooke79@gmail.com',
// 	to: clientEmail,
// 	subject: 'Hello',
// 	generateTextFromHTML: true,
// 	html: "<b>Hello world</b>"
// };
//
// export function sendEmail () {
// 	smtpTransport.sendMail(mailOptions, function(error, response) {
// 		if (error) {
// 			console.log(error);
// 		} else {
// 			console.log(response);
// 		}
// 		smtpTransport.close();
// 	});
// }