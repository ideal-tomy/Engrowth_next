import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // メニュー開閉の処理
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // メニューを閉じる処理
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          Engrowth
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </div>
        <nav className={`nav ${isMenuOpen ? 'menu-open' : ''}`}>
          <Link to="/vision" className={location.pathname === '/vision' ? 'active' : ''} onClick={closeMenu}>ビジョン</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={closeMenu}>サービス</Link>
          <Link to="/business" className={location.pathname === '/business' ? 'active' : ''} onClick={closeMenu}>ビジネス</Link>
          <Link to="/students" className={location.pathname === '/students' ? 'active' : ''} onClick={closeMenu}>学生</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''} onClick={closeMenu}>料金</Link>
          <Link to="/faq" className={location.pathname === '/faq' ? 'active' : ''} onClick={closeMenu}>よくある質問</Link>
          <Link to="/contact" className="contact-button" onClick={closeMenu}>お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 