import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsAppBtn.module.css';

const WhatsAppBtn = () => (
  <a
    href="https://wa.me/919653166634"
    className={styles.btn}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp />
  </a>
);

export default WhatsAppBtn;