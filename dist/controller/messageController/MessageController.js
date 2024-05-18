"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const emailjs_com_1 = __importDefault(require("emailjs-com"));
require("dotenv/config");
// Configurar globalmente XMLHttpRequest para usar `xhr2`
global.XMLHttpRequest = require('xhr2');
class MessageController {
    sendMessageController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, message } = req.body;
            // Verifique se as variáveis de ambiente estão definidas
            const serviceId = process.env.EMAILJS_SERVICE_ID;
            const templateId = process.env.EMAILJS_TEMPLATE_ID;
            const userId = process.env.EMAILJS_USER_ID;
            const privateKey = process.env.EMAILJS_PRIVATE_KEY;
            if (!serviceId || !templateId || !userId || !privateKey) {
                console.error('EmailJS configuration is missing');
                return res.status(500).json({ message: 'EmailJS configuration is missing' });
            }
            // Inicializar emailjs com o User ID
            emailjs_com_1.default.init(userId);
            // Configure os parâmetros para enviar o email
            const templateParams = {
                from_name: name,
                to_email: email,
                message: message,
            };
            try {
                // Envie o email usando EmailJS
                const response = yield emailjs_com_1.default.send(serviceId, templateId, templateParams, privateKey);
                return res.status(200).json({ message: 'Message received and email sent successfully.', response });
            }
            catch (error) {
                console.error('Error sending email:', error);
                return res.status(500).json({ message: 'Failed to send email.', error });
            }
        });
    }
}
exports.MessageController = MessageController;
