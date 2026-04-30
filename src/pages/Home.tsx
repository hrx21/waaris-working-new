import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppBtn from '../components/WhatsAppBtn';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <TrustBar />
    <About />
    <Services />
    <Process />
    <Testimonials />
    <CTABanner />
    <Contact />
    <Footer />
    <WhatsAppBtn />
  </>
);

export default Home;

// import { useState, useEffect } from 'react';
// import { Sun, Moon } from 'lucide-react';
// import styles from '../comingSoon.module.css';

// const TARGET = new Date('2026-05-01T00:00:00');

// function pad(n: number) { return String(n).padStart(2, '0'); }

// function getTimeLeft() {
//   const diff = Math.max(0, TARGET.getTime() - Date.now());
//   return {
//     d: Math.floor(diff / 86400000),
//     h: Math.floor((diff % 86400000) / 3600000),
//     m: Math.floor((diff % 3600000) / 60000),
//     s: Math.floor((diff % 60000) / 1000),
//   };
// }

// const STARS = Array.from({ length: 60 }, (_, i) => ({
//   id: i,
//   left: `${Math.random() * 100}%`,
//   top:  `${Math.random() * 100}%`,
//   dur:  `${2 + Math.random() * 4}s`,
//   delay:`${Math.random() * 5}s`,
//   op:   0.2 + Math.random() * 0.5,
//   big:  Math.random() < 0.15,
// }));

// // ── Paste your Web3Forms access key here ──
// // Get it free at https://web3forms.com — just enter info@waarislegacy.com
// const WEB3FORMS_ACCESS_KEY = 'db1b5451-4ad2-48ca-9987-bc1248b62d0f';

// const WaarisLogo = ({ size = 88 }: { size?: number }) => (
//   <svg width={size} height={size} viewBox="0 0 200 200" fill="none"
//        xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
//     <circle cx="100" cy="108" r="78" stroke="currentColor" strokeWidth="3.5" fill="none"/>
//     <rect x="68" y="38" width="64" height="8" rx="1.5" fill="currentColor"/>
//     <path d="M68 38 L68 22 L80 34 L100 14 L120 34 L132 22 L132 38 Z" fill="currentColor"/>
//     <circle cx="100" cy="14" r="3.5" fill="currentColor"/>
//     <circle cx="68"  cy="22" r="2.5" fill="currentColor"/>
//     <circle cx="132" cy="22" r="2.5" fill="currentColor"/>
//     <circle cx="100" cy="42" r="3"   fill="currentColor" opacity="0.4"/>
//     <circle cx="84"  cy="42" r="2"   fill="currentColor" opacity="0.3"/>
//     <circle cx="116" cy="42" r="2"   fill="currentColor" opacity="0.3"/>
//     <rect x="97.5" y="46" width="5" height="108" rx="2.5" fill="currentColor"/>
//     <circle cx="100" cy="64" r="14" stroke="currentColor" strokeWidth="3.5" fill="none"/>
//     <circle cx="100" cy="64" r="7"  stroke="currentColor" strokeWidth="2.5" fill="none"/>
//     <rect x="102.5" y="120" width="11" height="4.5" rx="1" fill="currentColor"/>
//     <rect x="102.5" y="130" width="8"  height="4.5" rx="1" fill="currentColor"/>
//     <rect x="102.5" y="140" width="11" height="4.5" rx="1" fill="currentColor"/>
//     <path d="M100 78 Q82 72 66 60"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
//     <path d="M100 88 Q80 84 60 78"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none"/>
//     <path d="M100 98 Q84 95 70 92"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M66 60 Q59 53 56 44"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M66 60 Q60 52 62 43"   stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//     <path d="M60 78 Q51 70 48 60"   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M60 78 Q54 72 55 63"   stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//     <path d="M100 78 Q118 72 134 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
//     <path d="M100 88 Q120 84 140 78" stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none"/>
//     <path d="M100 98 Q116 95 130 92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M134 60 Q141 53 144 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M134 60 Q140 52 138 43" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//     <path d="M140 78 Q149 70 152 60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M140 78 Q146 72 145 63" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
//     <path d="M100 154 Q88 162 78 172"  stroke="currentColor" strokeWidth="2"   strokeLinecap="round" fill="none"/>
//     <path d="M100 154 Q92 164 90 175"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M100 154 Q100 166 100 176" stroke="currentColor" strokeWidth="2"  strokeLinecap="round" fill="none"/>
//     <path d="M100 154 Q108 164 110 175" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
//     <path d="M100 154 Q112 162 122 172" stroke="currentColor" strokeWidth="2"  strokeLinecap="round" fill="none"/>
//   </svg>
// );

// type Status = 'idle' | 'sending' | 'success' | 'error';

// const Home = () => {
//   const [dark, setDark]       = useState(false);
//   const [time, setTime]       = useState(getTimeLeft());
//   const [email, setEmail]     = useState('');
//   const [invalid, setInvalid] = useState(false);
//   const [status, setStatus]   = useState<Status>('idle');

//   useEffect(() => {
//     const id = setInterval(() => setTime(getTimeLeft()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   const handleNotify = async () => {
//     const val = email.trim();
//     if (!val || !val.includes('@') || !val.includes('.')) {
//       setInvalid(true);
//       return;
//     }
//     setInvalid(false);
//     setStatus('sending');

//     try {
//       const res = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           access_key: WEB3FORMS_ACCESS_KEY,
//           subject: 'New Waaris Legacy Waitlist Signup',
//           from_name: 'Waaris Legacy Waitlist',
//           email: val,
//           message: `New signup: ${val} at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
//         }),
//       });

//       const data = await res.json();
//       if (!data.success) throw new Error(data.message);

//       setStatus('success');
//       setEmail('');
//     } catch (err) {
//       console.error(err);
//       setStatus('error');
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Cinzel:wght@400;600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html, body, #root { height: 100%; }
//       `}</style>

//       <div className={`${styles.root} ${dark ? styles.dark : styles.light}`}>

//         {/* Theme toggle */}
//         <button className={styles.themeToggle} onClick={() => setDark(d => !d)} aria-label="Toggle theme">
//           {dark ? <Sun size={16} /> : <Moon size={16} />}
//         </button>

//         {/* Stars */}
//         {dark && (
//           <div className={styles.stars} aria-hidden="true">
//             {STARS.map(s => (
//               <span key={s.id} className={styles.star} style={{
//                 left: s.left, top: s.top,
//                 '--d': s.dur, '--delay': s.delay, '--op': s.op,
//                 width: s.big ? 3 : 2, height: s.big ? 3 : 2,
//               } as React.CSSProperties} />
//             ))}
//           </div>
//         )}

//         {/* Corner brackets */}
//         {(['tl','tr','bl','br'] as const).map(pos => (
//           <svg key={pos} className={`${styles.corner} ${styles[pos]}`} viewBox="0 0 60 60" fill="none" aria-hidden="true">
//             <path d="M4 4 L4 32 M4 4 L32 4" stroke="currentColor" strokeWidth="1.5"/>
//             <circle cx="4" cy="4" r="2.5" fill="currentColor"/>
//           </svg>
//         ))}

//         <main className={styles.page}>

//           <div className={styles.logoWrap}><WaarisLogo size={86} /></div>

//           <div className={styles.brand}>WAARIS LEGACY</div>
//           <div className={styles.tagline}>Where Legacy Finds Its Heir</div>

//           <div className={styles.ornament} aria-hidden="true">
//             <span className={styles.ornamentLine} />
//             <span className={styles.ornamentDiamond} />
//             <span className={`${styles.ornamentLine} ${styles.right}`} />
//           </div>

//           <h1 className={styles.headline}>
//             The Kingdom <em>Is Being Prepared</em>
//           </h1>

//           <p className={styles.sub}>
//             Our royal court is setting every stone before the grand unveiling.<br />
//             Your legacy will soon have a throne worthy of its name.
//           </p>

//           {/* Countdown */}
//           <p className={styles.cdLabel}>The Grand Unveiling In</p>
//           <div className={styles.countdown} role="timer" aria-live="polite">
//             {([['d','Days'],['h','Hours'],['m','Mins'],['s','Secs']] as const).map(([k, label]) => (
//               <div key={k} className={styles.cdUnit}>
//                 <div className={styles.cdNum}>{pad(time[k])}</div>
//                 <span>{label}</span>
//               </div>
//             ))}
//           </div>

//           {/* Email form */}
//           <div className={styles.notifyWrap}>
//             {status === 'success' ? (
//               <p className={styles.notifySuccess}>✦ You shall be summoned when the gates open ✦</p>
//             ) : (
//               <>
//                 <div className={`${styles.notifyRow} ${invalid ? styles.invalid : ''}`}>
//                   <input
//                     type="email"
//                     placeholder="Your email address..."
//                     value={email}
//                     disabled={status === 'sending'}
//                     onChange={e => { setEmail(e.target.value); setInvalid(false); setStatus('idle'); }}
//                     onKeyDown={e => e.key === 'Enter' && handleNotify()}
//                     aria-label="Email address"
//                   />
//                   <button onClick={handleNotify} disabled={status === 'sending'} className={status === 'sending' ? styles.btnLoading : ''}>
//                     {status === 'sending' ? 'Sending...' : 'Notify Me'}
//                   </button>
//                 </div>
//                 {invalid && <p className={styles.errNote}>Please enter a valid email address.</p>}
//                 {status === 'error' && (
//                   <p className={styles.errNote}>
//                     Something went wrong. Email us directly at{' '}
//                     <a href="mailto:info@waarislegacy.com" className={styles.mailLink}>info@waarislegacy.com</a>
//                   </p>
//                 )}
//               </>
//             )}
//           </div>

//           {/* Pills */}
//           <div className={styles.pills}>
//             {['Physical Share Conversion','IEPF Recovery','Share Transmission','Legal & Compliant','End-to-End Guidance'].map(s => (
//               <span key={s} className={styles.pill}>{s}</span>
//             ))}
//           </div>

//           <p className={styles.footer}>© 2025 Waaris Legacy · All Rights Reserved</p>

//         </main>
//       </div>
//     </>
//   );
// };

// export default Home;