import './Hero.css';


const Hero = () => {
    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/mrigyanshi/',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            url: 'https://github.com/mrigyanshii',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'Email',
            url: 'mailto:mriigyanshii@gmail.com',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="home" className="hero">
            <div className="hero__background">
                <div className="hero__grid"></div>
                <div className="hero__shapes">
                    <div className="hero__shape hero__shape--1"></div>
                    <div className="hero__shape hero__shape--2"></div>
                    <div className="hero__shape hero__shape--3"></div>
                </div>
            </div>

            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__tag">
                        <span className="badge badge-blue">Available for Opportunities</span>
                    </div>

                    <h1 className="hero__title">
                        Hi, I'm{' '}
                        <span className="hero__name">
                            Mrigyanshi
                            <svg className="hero__underline" viewBox="0 0 200 12" preserveAspectRatio="none">
                                <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="hero__subtitle font-mono">
                        {'>'} Computer Science Student
                    </p>

                    <p className="hero__description">
                        Computer Science student at Lovely Professional University specializing in ML. Experienced in building machine learning pipelines and models.<br />Passionate about working in a creative setting to make use as an AIML engineer and game developer.
                    </p>

                    <div className="hero__author" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.85 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span className="font-mono" style={{ fontSize: '0.875rem' }}>Published author- Autumn Diaries (Amazon anthology)</span>
                    </div>

                    <div className="hero__cta">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get in Touch
                        </a>
                    </div>

                    <div className="hero__social">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero__social-link"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="hero__image-wrapper">
                    <div className="hero__image-container">
                        <img
                            src="/profile.png"
                            alt="Mrigyanshi Digari"
                            className="hero__image"
                        />
                        <div className="hero__image-border"></div>
                    </div>
                    <div className="hero__stats">
                        <div className="hero__stat">
                            <span className="hero__stat-number">2+</span>
                            <span className="hero__stat-label">Projects</span>
                        </div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">5+</span>
                            <span className="hero__stat-label">Certifications</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll">
                <span className="hero__scroll-text font-mono">Scroll Down</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
