import config from '../config/index.js';
import transporter from '../services/mailTransporter.js';


const mailHelper = async (options) => {
    
    const message = {
        from: `${config.SMTP_FROM_EMAIL} <${config.SMTP_USERNAME}>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }
    await transporter.sendMail(message);
}

export default mailHelper;