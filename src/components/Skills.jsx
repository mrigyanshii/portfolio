import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16,18 22,12 16,6"></polyline>
                    <polyline points="8,6 2,12 8,18"></polyline>
                </svg>
            ),
            skills: ['C++', 'JavaScript', 'C', 'Java', 'Python'],
            color: 'blue',
        },
        {
            title: 'Frameworks/Libraries',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            ),
            skills: ['HTML/CSS', 'Bootstrap', 'FastAPI'],
            color: 'black',
        },
        {
            title: 'ML/AI',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                </svg>
            ),
            skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'NLP'],
            color: 'blue',
        },
        {
            title: 'Tools',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            ),
            skills: ['Git & GitHub', 'Figma', 'Docker', 'GitHub Actions'],
            color: 'black',
        },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="skills__header">
                    <h2 className="section-title">Skills</h2>
                    <p className="skills__subtitle">
                        Technologies and tools I work with to bring ideas to life
                    </p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`skills__card skills__card--${category.color}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skills__card-header">
                                <div className="skills__card-icon">{category.icon}</div>
                                <h3 className="skills__card-title">{category.title}</h3>
                            </div>

                            <div className="skills__list">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skills__item">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="skills__certifications">
                    <h3 className="skills__cert-title">
                        <span className="skills__cert-icon">🏆</span>
                        Certifications & Certificates
                    </h3>

                    <div className="skills__cert-grid">
                        <div className="skills__cert-card">
                            <span className="skills__cert-badge">Certification</span>
                            <h4>Mastering C++: From OOP to Dynamic Programming</h4>
                            <p className="font-mono">LPU • Jun-Jul 2025</p>
                        </div>

                        <div className="skills__cert-card">
                            <span className="skills__cert-badge">Certificate</span>
                            <h4>Master Gen AI & Gen AI Tools</h4>
                            <p className="font-mono">Udemy • Aug 2025</p>
                        </div>

                        <div className="skills__cert-card">
                            <span className="skills__cert-badge">Certificate</span>
                            <h4>Build Gen AI Apps with No-Code Tools</h4>
                            <p className="font-mono">Udemy • Aug 2025</p>
                        </div>

                        <div className="skills__cert-card">
                            <span className="skills__cert-badge">Certificate</span>
                            <h4>Mastering DSA using C and C++</h4>
                            <p className="font-mono">Udemy • Jan 2024</p>
                        </div>

                        <div className="skills__cert-card">
                            <span className="skills__cert-badge">Certificate</span>
                            <h4>Deep Learning and Deployment on Web</h4>
                            <p className="font-mono">GDSC • Feb 2024</p>
                        </div>

                        <div className="skills__cert-card">
                            <span className="skills__cert-badge">Certificate</span>
                            <h4>Responsive Web Design</h4>
                            <p className="font-mono">FreeCodeCamp • Oct 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
