import { Request, Response } from 'express';
import emailjs from 'emailjs-com';
import 'dotenv/config';

global.XMLHttpRequest = require('xhr2');

interface UserMessage {
    name: string;
    email: string;
    message: string;
}

export class MessageController {
    async sendMessageController(req: Request, res: Response): Promise<Response> {
        const { name, email, message } = req.body as UserMessage;

        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const userId = process.env.EMAILJS_USER_ID;
        const privateKey = process.env.EMAILJS_PRIVATE_KEY;

        if (!serviceId || !templateId || !userId || !privateKey) {
            console.error('EmailJS configuration is missing');
            return res.status(500).json({ message: 'EmailJS configuration is missing' });
        }

        emailjs.init(userId);

        const templateParams = {
            from_name: name,
            to_email: email,
            message: message,
        };

        try {
            const response = await emailjs.send(serviceId, templateId, templateParams, privateKey);
            return res.status(200).json({ message: 'Message received and email sent successfully.', response });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send email.', error });
        }
    }
}
