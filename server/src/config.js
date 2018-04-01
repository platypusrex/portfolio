import dotenv from 'dotenv-safe';

dotenv.load();

export const secret = process.env.SECRET;
export const port = process.env.PORT || 3001;

// Nodemailer constants
export const clientEmail = process.env.CLIENTEMAIL;
export const clientId = process.env.CLIENTID;
export const clientSecret = process.env.CLIENTSECRET;
export const refreshToken = process.env.REFRESHTOKEN;
export const accessToken = process.env.ACCESSTOKEN;