import Link from 'next/link';
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
              <Link href="/vision">Vision</Link>
              <Link href="/services">Services</Link>
              <Link href="/business">Business</Link>
              <Link href="/students">Students</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">お問い合わせ</Link>
            </nav>
          </div>
          <div className="footer-section">
            <h4>お問い合わせ</h4>
            <p>お気軽にご連絡ください</p>
            <Link href="/contact" className="contact-button">お問い合わせフォーム</Link>
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