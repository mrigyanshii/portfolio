import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Multilingual Intent Discovery',
            subtitle: 'NLP Pipeline for Intent Prediction',
            date: 'Dec 2025',
            description:
                'Built a multilingual NLP system that clusters user queries into intents without labeled data, enabling semantic understanding across 50+ languages.',
            features: [
                'Unsupervised intent discovery',
                'Cross-lingual semantic embeddings',
                'Unsupervised clustering',
            ],
            techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Sentence Transformers'],
            github: 'https://github.com/mrigyanshii',
            live: '#',
            color: 'blue',
        },
        {
            id: 2,
            title: 'Bug Workflow Automator',
            subtitle: 'Multi-Agent Bug Triage System',
            date: 'Oct 2025',
            description:
                'Created an ML system that groups similar bug reports and maps them to developers using pattern detection and skill-based assignment.',
            features: [
                'Hybrid feature pipeline',
                'Dimensionality reduction & clustering',
                'Agent-based workflow orchestration',
            ],
            techStack: ['Python', 'Scikit-Learn', 'SciPy', 'Matplotlib', 'Joblib'],
            github: 'https://github.com/mrigyanshii',
            live: '#',
            color: 'black',
        },
        {
            id: 3,
            title: 'LexiLearn',
            subtitle: 'AI Powered Vocabulary Assistant',
            date: 'Mar-Apr 2025',
            description:
                'Built an AI-powered vocabulary assistant that generates meanings, examples, and adapts difficulty based on user learning patterns.',
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
            id: 4,
            title: 'PathMatch',
            subtitle: 'ML-Based Career Guidance System',
            date: 'Feb-May 2025',
            description:
                'Developed a machine learning system that recommends career paths based on user skills, interests, and performance indicators.',
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
        }
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
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projects__link projects__link--primary"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

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