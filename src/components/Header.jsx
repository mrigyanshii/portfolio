import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <nav className="header__nav">
                <a href="#home" className="header__logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="header__logo-bracket">&lt;</span>
                    MD
                    <span className="header__logo-bracket">/&gt;</span>
                </a>

                <div className="header__menu-wrapper">
                    <ul className="header__menu">
                        {navItems.map((item) => (
                            <li key={item.name} className="header__menu-item">
                                <a
                                    href={item.href}
                                    className="header__menu-link"
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <a
                    href="/general-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header__cta btn btn-primary"
                >
                    Resume
                </a>

                <button
                    className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
                <ul className="header__mobile-list">
                    {navItems.map((item, index) => (
                        <li
                            key={item.name}
                            className="header__mobile-item"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <a
                                href={item.href}
                                className="header__mobile-link"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
