import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './Contact.module.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const SERVICES = [
  'IEPF Recovery',
  'Unclaimed Shares',
  'Dormant Assets (Bank/MF/Insurance)',
  'Succession & Legal Heir Support',
  'Not Sure – Need Guidance',
];

const CONTACT_DETAILS = [
  { icon: '📧', label: 'Email', value: 'info@waarislegacy.com' },
  { icon: '📞', label: 'Phone', value: '+91 96531 66634' },
  { icon: '📍', label: 'Location', value: '1212, 12th Floor, Ajmera Sikova, Nityanand Nagar, Ghatkopar West, Mumbai 400086' },
  { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat: 10:00 AM – 6:00 PM' },
];

const Contact = () => {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'db1b5451-4ad2-48ca-9987-bc1248b62d0f', // Use the same Web3Forms key
          subject: 'New Contact Form Submission',
          from_name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          service_required: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className="section-inner">
        <div className={styles.grid}>

          {/* LEFT SIDE */}
          <div className={styles.info}>
            <div className="section-label">
              <span className="section-label-line" />
              <span>Get In Touch</span>
            </div>

            <h2 className="section-title">
              Start Your <em>Recovery Journey</em> Today
            </h2>

            <p className="section-desc" style={{ marginBottom: 32 }}>
              Fill in the enquiry form and our team will get back to you within 24 hours for a free consultation.
            </p>



            {/* 🔥 GRID CONTACT INFO */}
            <div className={styles.infoGrid}>
              {CONTACT_DETAILS.map(d => (
                <div key={d.label} className={styles.infoItem}>
                  <div className={styles.detailIcon}>{d.icon}</div>
                  <div>
                    <p className={styles.label}>{d.label}</p>
                    <p>{d.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* MAP */}
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.321030081064!2d72.9133946179305!3d19.093567431133007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cc0ed1d2bd%3A0x74d07460d73f0beb!2sAjmera%20Sikova%2C%20Nityanand%20Nagar%2C%20Ghatkopar%20West%2C%20Mumbai%2C%20Maharashtra%20400086!5e0!3m2!1sen!2sin!4v1778613821968!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className={styles.formBox}>
            <h3 className={styles.formTitle}>Send Us an Enquiry</h3>

            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h4>Thank you!</h4>
                <p>We've received your enquiry and will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className={styles.row}>
                  <div className={styles.group}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text" placeholder="Ramesh" value={form.firstName} onChange={handleChange} required />
                  </div>

                  <div className={styles.group}>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Iyer" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>

                <div className={styles.group}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" placeholder="ramesh@example.com" value={form.email} onChange={handleChange} required />
                </div>

                <div className={styles.group}>
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                </div>

                <div className={styles.group}>
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>

                <div className={styles.group}>
                  <label htmlFor="message">Brief Description</label>
                  <textarea id="message" name="message" placeholder="Tell us a little about your situation..." value={form.message} onChange={handleChange} rows={4} />
                </div>

                <button type="submit" className={styles.submit}>
                  Submit Enquiry
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;