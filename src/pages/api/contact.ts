import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { name, email, description } = JSON.parse(req.body);
  const kps = process.env.KPS;

  const smptTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'gnome.braioso@gmail.com',
      pass: kps,
    },
    tls: { rejectUnauthorized: false },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    smptTransport.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData: MailOptions = {
    from: `${email}`,
    to: 'mrbraiant@gmail.com',
    subject: `Oportunidades de emprego by ${name}`,
    text: description,
    html: `
            <p><strong>Descrição: </strong>${description}</p>
            <br />
            <br />
            <div><strong>Enviado por: </strong>${name}</div>
            <div><strong>Email: </strong>${email}</div>
          `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    smptTransport.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        // console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ name: 'Envio com Sucesso' });
}

export const config = {
  api: {
    bodyParser: true,
  },
};
