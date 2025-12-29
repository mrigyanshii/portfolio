import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'LexiLearn',
            subtitle: 'AI Powered Vocabulary Assistant',
            date: 'Mar-Apr 2025',
            description:
                'An intelligent vocabulary assistant that personalizes word learning for students. Features an NLP-based bot that generates definitions, synonyms, antonyms, and example sentences with adaptive difficulty.',
            features: [
                'NLP-based intelligent responses',
                'Adaptive difficulty levels',
                'Personalized learning experience',
                'Example sentence generation',
            ],
            techStack: ['Python', 'NLP', 'Scikit-Learn', 'Flask/Node', 'MongoDB'],
            github: 'https://github.com/mrigyanshii',
            live: '#',
            color: 'blue',
        },
        {
            id: 2,
            title: 'PathMatch',
            subtitle: 'ML-Based Career Guidance System',
            date: 'Feb-May 2025',
            description:
                'A machine learning system that suggests career paths based on skills, interests, and performance indicators. Uses a supervised learning pipeline to predict suitable career paths from student profiles.',
            features: [
                'ML-powered career prediction',
                'Skill & interest analysis',
                'Performance indicators tracking',
                'Personalized recommendations',
            ],
            techStack: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Jupyter'],
            github: 'https://github.com/mrigyanshii',
            live: '#',
            color: 'black',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects__header">
                    <h2 className="section-title">Projects</h2>
                    <p className="projects__subtitle">
                        Featured work showcasing my skills in AI/ML and Web Development
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`projects__card projects__card--${project.color}`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="projects__card-header">
                                <div className="projects__card-number font-mono">
                                    0{project.id}
                                </div>
                                <span className="projects__card-date font-mono">
                                    {project.date}
                                </span>
                            </div>

                            <div className="projects__card-content">
                                <h3 className="projects__card-title">{project.title}</h3>
                                <p className="projects__card-subtitle">{project.subtitle}</p>
                                <p className="projects__card-description">
                                    {project.description}
                                </p>

                                <div className="projects__features">
                                    <h4 className="projects__features-title">Key Features:</h4>
                                    <ul className="projects__features-list">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="projects__feature">
                                                <span className="projects__feature-bullet">→</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="projects__tech">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="projects__tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="projects__card-footer">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__link"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__link projects__link--primary"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* More Projects Coming */}
                <div className="projects__more">
                    <div className="projects__more-content">
                        <span className="projects__more-icon">🚀</span>
                        <p className="projects__more-text">
                            More exciting projects coming soon! Stay tuned.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
