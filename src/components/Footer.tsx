import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Engrowth</h3>
            <p>第二言語習得メソッド × 伴走型サポートで、確実な成長と挑戦の場を提供する。</p>
          </div>
          <div className="footer-section">
            <h4>リンク</h4>
            <nav className="footer-nav">
              <Link to="/vision">Vision</Link>
              <Link to="/services">Services</Link>
              <Link to="/business">Business</Link>
              <Link to="/students">Students</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">お問い合わせ</Link>
            </nav>
          </div>
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <p>お気軽にご連絡ください</p>
            <Link to="/contact" className="contact-button">お問い合わせフォーム</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Engrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 