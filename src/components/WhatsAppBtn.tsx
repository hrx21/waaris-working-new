import styles from './WhatsAppBtn.module.css';

const WhatsAppBtn = () => (
  <a
    href="https://wa.me/91XXXXXXXXXX"
    className={styles.btn}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    💬
  </a>
);

export default WhatsAppBtn;
