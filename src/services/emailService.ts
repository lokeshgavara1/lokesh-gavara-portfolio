
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

// Initialize EmailJS with the public key
emailjs.init(EMAILJS_CONFIG.publicKey);

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Lokesh Gavara',
    };

    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};
