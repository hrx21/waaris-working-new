import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import WhatsAppBtn from './components/WhatsAppBtn';
import Footer from './components/Footer';

// Pages
import Home    from './pages/Home';
import About   from './pages/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Process from './components/Process';
const App = () => (
  <ThemeProvider>
    <Navbar />
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/about"    element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact"  element={<Contact />} />
      <Route path="/process"  element={<Process />} />

    </Routes>
    <Footer />
    <WhatsAppBtn />
  </ThemeProvider>
);

export default App;