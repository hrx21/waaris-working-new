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
  // 'Physical Share to Demat Conversion',  // old
  // 'IEPF Claim Recovery',                  // old
  // 'Transmission of Shares',               // old
  // 'Not Sure – Need Guidance',             // keep if you want
  'Not Sure – Need Guidance',
];

const CONTACT_DETAILS = [
  { icon: '📧', label: 'Email', value: 'info@waarislegacy.com' },
  { icon: '📞', label: 'Phone', value: '+91 XXXXX XXXXX' },
  { icon: '📍', label: 'Location', value: 'Mumbai, Maharashtra, India' },
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up to backend / email service
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="contact">
      <div className="section-inner">
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className="section-label">
              <span className="section-label-line" />
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title">Start Your <em>Recovery Journey</em> Today</h2>
            <p className="section-desc" style={{ marginBottom: 44 }}>
              Fill in the enquiry form and our team will get back to you within 24 hours for a free consultation.
            </p>
            {CONTACT_DETAILS.map(d => (
              <div key={d.label} className={styles.detail}>
                <div className={styles.detailIcon}>{d.icon}</div>
                <div>
                  <strong>{d.label}</strong>
                  <span>{d.value}</span>
                </div>
              </div>
            ))}
          </div>

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
                <button type="submit" className={styles.submit}>Submit Enquiry</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
