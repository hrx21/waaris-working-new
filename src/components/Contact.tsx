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
  { icon: '📍', label: 'Location', value: 'Office No. 111, Ajmera Sikova, LBS Marg, Ghatkopar East' },
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
    setSubmitted(true);
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3177198787516!2d72.91364207493041!3d19.093712751416838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c77733eccf69%3A0x741bf6a29c4a351a!2sALTPORT%20EXPERTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1777588162477!5m2!1sen!2sin"
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