import { NextApiRequest, NextApiResponse } from 'next';
import * as sendGrid from '@sendgrid/mail';

const apiKey = process.env.SG_API_KEY;

const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sendGrid.setApiKey(apiKey!);
    const msg = {
      to: 'frankcooke79@gmail.com', // Change to your recipient
      from: email, // Change to your verified sender
      subject: `${name} has sent you a message!`,
      text: message,
    };

    try {
      await sendGrid.send(msg);
      return res.status(200).end();
    } catch (e) {
      return res.status(404).json({
        error: {
          code: 'not_found',
          message: "The requested endpoint was not found or doesn't support this method.",
        },
      });
    }
  }
};

export default sendMail;
