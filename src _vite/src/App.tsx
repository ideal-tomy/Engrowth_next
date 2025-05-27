// import React from 'react'; // Removed unused import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Services from './pages/Services';
import Business from './pages/Business';
import Students from './pages/Students';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Reason1 from './pages/Reason1';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/services" element={<Services />} />
            <Route path="/business" element={<Business />} />
            <Route path="/students" element={<Students />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reason1" element={<Reason1 />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
