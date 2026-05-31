import { useState, useEffect, useRef } from 'react';
import './App.css';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker, 
  FaPhp, FaLaravel, FaGithub, FaLinkedin, FaDownload, 
  FaFolder, FaExternalLinkAlt, FaMoon, FaSun, FaEnvelope, 
  FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCertificate,
  FaArrowRight, FaCode, FaTwitter
} from 'react-icons/fa';
import { SiPostgresql, SiSpringboot, SiTailwindcss, SiMysql, SiTypescript, SiNextdotjs } from 'react-icons/si';

import BatIcon from './components/BatIcon';
import BatParticles from './components/BatParticles';
import InitialLoader from './components/InitialLoader';
import BatTransition from './components/BatTransition';

const content = {
  pt: {
    nav: {
      professional: "Profissional",
      personal: "Pessoal",
      contact: "Contato",
    },
    hero: {
      tag: "ARQUITETANDO APIS NAS SOMBRAS, ESCALANDO SOLUÇÕES NO MUNDO REAL",
      name: "Lucas Viana",
      role: "Desenvolvedor Backend Jr. — Java",
      bio: "Meu nome é Lucas, mas pode me chamar de Luqi! Construindo soluções robustas, escaláveis e eficientes. Focado no desenvolvimento de APIs de alto desempenho e arquiteturas sólidas no ecossistema Java. ☕💻",
      ctaProjects: "Meus Projetos",
      ctaCv: "Baixar CV",
    },
    professional: {
      trajectoryTitle: "Minha Trajetória",
      experienceTitle: "Experiência Profissional",
      educationTitle: "Formação Acadêmica",
      certificationsTitle: "Certificações & Habilidades Extras",
      projectsTitle: "Projetos em Destaque",
      featuredBadge: "Projeto Destaque",
      premierTitle: "Estatísticas da Premier League",
      visitProject: "Visitar App",
      viewCode: "Ver Código",
      techArsenal: "Habilidades Técnicas",
      ativhubDesc: "Solução LMS completa com missões gamificadas, XP, níveis, entregas, feedback e ranking global para engajamento de alunos. Segurança com JWT, banco PostgreSQL e migrações com Flyway.",
      premierDesc: "Resolução do acesso fragmentado a dados esportivos por meio de um serviço full-stack estruturado com validações de negócio, prevenção de duplicidades e testes de integração.",
      estoqueDesc: "Projeto em equipe que resolveu problemas de controle de estoque manual através de uma interface web para cadastro, atualização e persistência de produtos.",
      crudDesc: "API REST com Spring Boot focada em boas práticas de CRUD, persistência de dados com JPA/Hibernate e integração segura.",
      xp: [
        {
          role: "Aprendiz de Desenvolvimento",
          company: "Iochpe-Maxion S.A.",
          period: "Fev 2024 – Dez 2024",
          bullets: [
            "Apoiei iniciativas de transformação digital por meio do desenvolvimento, teste e documentação de soluções tecnológicas.",
            "Desenvolvi aplicações em Java e sistemas web em PHP/Laravel, atuando em lógica de negócio, persistência de dados, manutenção e suporte a usuários.",
            "Modelei dados em MySQL e colaborei utilizando Git, práticas ágeis e rotinas de resolução de problemas."
          ]
        }
      ],
      edu: [
        {
          course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          school: "Faculdade Serra Dourada (Lorena, SP)",
          period: "Previsão: Jul 2027",
          bullets: [
            "Monitoria de Programação Orientada a Objetos — suporte técnico e atividades práticas de programação."
          ]
        },
        {
          course: "Curso Técnico em Análise e Desenvolvimento de Sistemas",
          school: "SENAI Lorena (Lorena, SP)",
          period: "Fev 2023 – Dez 2024",
          bullets: [
            "Formação profissional prática focada em lógica, modelagem de dados, metodologias de software e projetos reais."
          ]
        }
      ],
      certs: [
        "Google AI Essentials V1 – Coursera / Credly",
        "Monitor de Programação Orientada a Objetos (Serra Dourada)",
        "Idioma: Inglês (Intermediário)",
        "Idioma: Português (Nativo)"
      ],
      extraTitle: "Fundamentos de Infraestrutura",
      extraDesc: "Noções sólidas em computação em nuvem, ambientes Linux e Windows, fundamentos de redes, DNS, VPN e conceitos de segurança da informação."
    },
    personal: {
      title: "Lado Pessoal & Hobbies",
      subtitle: "O que me mantém ativo quando não estou compilando código, respondendo a requisições HTTP ou modelando bancos de dados.",
      statsTitle: "Curiosidades",
      hobbies: [
        {
          title: "Música & Metal",
          desc: "Aprecio qualquer estilo de música, mas tenho um amor especial por Metal. É a trilha sonora perfeita para focar e codar.",
          icon: "🎧"
        },
        {
          title: "Design UX/UI",
          desc: "Uma paixão paralela por design e interfaces visuais. Adoro estudar layouts, tipografia e UX/UI no meu tempo livre.",
          icon: "🎨"
        },
        {
          title: "Geek & Jogos",
          desc: "Fã de animes, cultura geek e games. Jogo desde competitivos como Valorant até indies, GTA, Subnautica, FIFA e um bom RPG.",
          icon: "🎮"
        },
        {
          title: "Estética de Morcegos",
          desc: "O tema visual com morcegos é proposital — simplesmente por ser um dos animais que eu acho mais daora e interessantes de todos.",
          icon: "🦇"
        },
        {
          title: "Criação de Conteúdo",
          desc: <>Produção de conteúdo sobre tecnologia, que hoje pode ser acompanhado no meu Twitter <a href="https://x.com/komoridev" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', textDecoration: 'underline', fontWeight: 600 }}>@komoridev</a>, e futuramente no YouTube e outras redes.</>,
          icon: "📹"
        },
        {
          title: "Futebol & SPFC",
          desc: "Torcedor fanático do São Paulo Futebol Clube e apaixonado por futebol. Acompanhar os jogos e a história do tricolor é um dos meus passatempos favoritos offline.",
          icon: "⚽"
        }
      ],
      stats: [
        { label: "Commits no GitHub", val: "∞" },
        { label: "Projetos Inacabados", val: "12" },
        { label: "Minutos ouvindo metal", val: "10k+" },
        { label: "Pesquisas no Google/IA", val: "∞" },
        { label: "Animes Assistidos", val: "50+" }
      ]
    },
    contact: {
      title: "Entrar em Contato",
      subtitle: "Precisa de soluções robustas em Java ou deseja trocar uma ideia? Deixe sua mensagem.",
      emailLabel: "E-mail Profissional",
      locationLabel: "Localização",
      locationVal: "Lorena, São Paulo, Brasil",
      formName: "Seu Nome",
      formEmail: "Seu E-mail",
      formMessage: "Mensagem (O que quer criar?)",
      formSubmit: "Enviar Mensagem",
      formSuccess: "Sua mensagem foi transmitida com sucesso pelas sombras! 🦇",
    },
    footer: {
      text: "Desenvolvido com dedicação por Lucas Viana.",
      rights: "Todos os direitos reservados."
    }
  },
  en: {
    nav: {
      professional: "Professional",
      personal: "Personal",
      contact: "Contact",
    },
    hero: {
      tag: "ARCHITECTING APIS IN THE SHADOWS, SCALING SOLUTIONS IN THE REAL WORLD",
      name: "Lucas Viana",
      role: "Junior Backend Developer — Java",
      bio: "My name is Lucas, but you can call me Luqi! Building robust, scalable, and efficient solutions. Focused on high-performance REST APIs and solid architectures in the Java ecosystem. ☕💻",
      ctaProjects: "My Projects",
      ctaCv: "Download CV",
    },
    professional: {
      trajectoryTitle: "My Journey",
      experienceTitle: "Professional Experience",
      educationTitle: "Academic Background",
      certificationsTitle: "Certifications & Extra Skills",
      projectsTitle: "Featured Projects",
      featuredBadge: "Main Project",
      premierTitle: "Premier League Statistics",
      visitProject: "Visit Live App",
      viewCode: "View Code",
      techArsenal: "Technical Skills",
      ativhubDesc: "Complete gamified LMS solution featuring quests, XP, levels, submissions, feedback, and global ranking. Secured with JWT, PostgreSQL, and managed via Flyway migrations.",
      premierDesc: "Solves fragmented sports data access by creating a full-stack REST API service with business logic validation, duplicates prevention, and integration testing.",
      estoqueDesc: "Team project solving manual inventory tracking issues with a web interface to register, update, and persist products in MySQL.",
      crudDesc: "Spring Boot REST API focused on standard CRUD practices, JPA/Hibernate data mapping, and secure integration.",
      xp: [
        {
          role: "Development Apprentice",
          company: "Iochpe-Maxion S.A.",
          period: "Feb 2024 – Dec 2024",
          bullets: [
            "Supported digital transformation initiatives through development, testing, and documentation of tech solutions.",
            "Developed Java applications and web systems using PHP/Laravel, focusing on business logic, data persistence, and user support.",
            "Modeled MySQL databases and collaborated utilizing Git, Agile methodologies, and structured problem solving."
          ]
        }
      ],
      edu: [
        {
          course: "Associate Degree in Systems Analysis & Development",
          school: "Faculdade Serra Dourada (Lorena, SP)",
          period: "Expected: Jul 2027",
          bullets: [
            "Teaching Assistant for Object-Oriented Programming (OOP) — technical support and practical programming tasks for students."
          ]
        },
        {
          course: "Technical Degree in Systems Analysis & Development",
          school: "SENAI Lorena (Lorena, SP)",
          period: "Feb 2023 – Dec 2024",
          bullets: [
            "Hands-on professional training focused on coding logic, database modeling, software methodologies, and practical projects."
          ]
        }
      ],
      certs: [
        "Google AI Essentials V1 – Coursera / Credly",
        "OOP Teaching Assistant Certificate (Serra Dourada)",
        "Language: English (Intermediate)",
        "Language: Portuguese (Native)"
      ],
      extraTitle: "Infrastructure Fundamentals",
      extraDesc: "Solid understanding of cloud computing basics, Linux/Windows environments, network fundamentals, DNS, VPNs, and information security concepts."
    },
    personal: {
      title: "Personal Life & Hobbies",
      subtitle: "What keeps me active when I'm not compiling code, replying to HTTP requests, or modeling database systems.",
      statsTitle: "Fun Facts",
      hobbies: [
        {
          title: "Music & Metal",
          desc: "I enjoy any style of music, but I have a special love for Metal. It is the perfect soundtrack to focus and code.",
          icon: "🎧"
        },
        {
          title: "UX/UI Design",
          desc: "A parallel passion for design and visual interfaces. I love studying layouts, typography, and UX/UI in my free time.",
          icon: "🎨"
        },
        {
          title: "Geek & Gaming",
          desc: "Fan of anime, geek culture, and games. I play anything from competitive Valorant to indies, GTA, Subnautica, FIFA, and RPGs.",
          icon: "🎮"
        },
        {
          title: "Bat Aesthetic",
          desc: "The bat aesthetic is entirely intentional — simply because they are one of my favorite and coolest animals.",
          icon: "🦇"
        },
        {
          title: "Content Creation",
          desc:   <>Production of technology-related content, which can currently be followed on my Twitter <a href="https://x.com/komoridev" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-purple)', textDecoration: 'underline', fontWeight: 600 }}>@komoridev</a>, and in the future on YouTube and other socials.</>,
          icon: "📹"
        },
        {
          title: "Football & SPFC",
          desc: "A passionate football fan and die-hard supporter of São Paulo Futebol Clube (SPFC). Following the 'Tricolor' matches and football history is one of my favorite offline hobbies.",
          icon: "⚽"
        }
      ],
      stats: [
        { label: "GitHub Commits", val: "∞" },
        { label: "Abandoned Projects", val: "12" },
        { label: "Minutes listening to metal", val: "10k+" },
        { label: "Google & AI Queries", val: "∞" },
        { label: "Animes Watched", val: "50+" }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Need robust Java systems or want to discuss a project? Drop me a message.",
      emailLabel: "Professional Email",
      locationLabel: "Location",
      locationVal: "Lorena, São Paulo, Brazil",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Message (What are we building?)",
      formSubmit: "Send Message",
      formSuccess: "Your message has been cast successfully into the shadows! 🦇",
    },
    footer: {
      text: "Developed with dedication by Lucas Viana.",
      rights: "All rights reserved."
    }
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('professional');
  const [targetTab, setTargetTab] = useState(null);
  const [transitionTrigger, setTransitionTrigger] = useState(0);
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('pt');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // CV Dropdown States
  const [cvHeroOpen, setCvHeroOpen] = useState(false);
  const [cvContactOpen, setCvContactOpen] = useState(false);

  // Refs for closing dropdowns on click outside
  const heroCvRef = useRef(null);
  const contactCvRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Lock scrolling when initial loading is active
  useEffect(() => {
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [loading]);

  // Close dropdowns on outside clicks
  useEffect(() => {
    function handleOutsideClick(event) {
      if (heroCvRef.current && !heroCvRef.current.contains(event.target)) {
        setCvHeroOpen(false);
      }
      if (contactCvRef.current && !contactCvRef.current.contains(event.target)) {
        setCvContactOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setTargetTab(tabId);
    setTransitionTrigger(prev => prev + 1);
  };

  const handleTransitionHalfway = () => {
    if (targetTab) {
      setActiveTab(targetTab);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const t = content[lang];

  // Expanded Skills array including HTML, CSS, Next.js, and TypeScript
  const skills = [
    { name: 'Java', icon: <FaJava color="#F89820" /> },
    { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
    { name: 'PHP', icon: <FaPhp color="#777BB4" /> },
    { name: 'Laravel', icon: <FaLaravel color="#FF2D20" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="var(--text-main)" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Docker', icon: <FaDocker color="#2496ED" /> },
    { name: 'Git', icon: <FaGithub color="var(--text-main)" /> },
  ];

  return (
    <>
      {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      
      <div className="app-container">
        {/* Floating particles in background */}
        <BatParticles />

        {/* Tab Transition Swipe Overlay */}
        <BatTransition 
          trigger={transitionTrigger} 
          onHalfway={handleTransitionHalfway}
        />

        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-brand" style={{ textTransform: 'none' }}>
            lucasluqi<span>.dev</span>
          </div>

          <div className="nav-links">
            <button 
              className={`nav-tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
              onClick={() => handleTabChange('professional')}
            >
              {t.nav.professional}
            </button>
            <button 
              className={`nav-tab-btn ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => handleTabChange('personal')}
            >
              {t.nav.personal}
            </button>
            <button 
              className={`nav-tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => handleTabChange('contact')}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="nav-controls">
            <button onClick={toggleLang} className="control-btn" title="Traduzir / Translate">
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button onClick={toggleTheme} className="control-btn" title="Alternar Tema / Toggle Theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>

        {/* MAIN LAYOUT */}
        <main>
          {/* ==========================================
              TAB: PROFESSIONAL
             ========================================== */}
          {activeTab === 'professional' && (
            <div className="tab-fade-in">
              <section className="hero-wrapper">
                <div className="hero-info">
                  <div className="hero-tag">{t.hero.tag}</div>
                  <h1 className="hero-title">
                    Lucas <span>"Luqi"</span> Viana
                  </h1>
                  <h2 className="hero-subtitle">{t.hero.role}</h2>
                  <p className="hero-bio">{t.hero.bio}</p>

                  <div className="hero-cta">
                    <button onClick={() => handleTabChange('contact')} className="neobrutal-btn">
                      {lang === 'pt' ? 'Contato' : 'Contact Me'} <FaArrowRight />
                    </button>
                    
                    {/* CV Download with Neobrutalist Dropdown */}
                    <div className="cv-download-wrapper" ref={heroCvRef}>
                      <button onClick={() => setCvHeroOpen(!cvHeroOpen)} className="neobrutal-btn secondary">
                        <FaDownload /> {t.hero.ctaCv}
                      </button>
                      {cvHeroOpen && (
                        <div className="cv-dropdown-neobrutal">
                          <a 
                            href="/CV_Lucas_Viana_da_Silva.pdf" 
                            download="CV_Lucas_Viana_da_Silva.pdf" 
                            onClick={() => setCvHeroOpen(false)}
                          >
                            {lang === 'pt' ? 'Português (PT)' : 'Portuguese (PT)'}
                          </a>
                          <a 
                            href="/CV_Lucas_Viana_da_Silva_english.pdf" 
                            download="CV_Lucas_Viana_da_Silva_english.pdf" 
                            onClick={() => setCvHeroOpen(false)}
                          >
                            {lang === 'pt' ? 'Inglês (EN)' : 'English (EN)'}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="hero-socials">
                    <a href="https://github.com/LucasViana4555" target="_blank" rel="noreferrer" className="social-neobrutal" title="GitHub">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/olucasv/" target="_blank" rel="noreferrer" className="social-neobrutal" title="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="https://x.com/komoridev" target="_blank" rel="noreferrer" className="social-neobrutal" title="Twitter / X">
                      <FaTwitter />
                    </a>
                  </div>
                </div>

                <div className="avatar-container">
                  <div className="avatar-relative">
                    {/* Pulsing gears/radars around avatar */}
                    <div className="radar-ring radar-ring-outer" />
                    <div className="radar-ring radar-ring-inner" />
                    <div className="avatar-image-wrapper">
                      {/* 
                      <img 
                        src="https://github.com/LucasViana4555.png" 
                        alt="Lucas Viana" 
                        className="avatar-img"
                      />
                      */}
                      <div className="avatar-empty-placeholder" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills Grid */}
              <section className="section-wrapper">
                <div className="section-head">
                  <h2 className="section-title">
                    <FaCode color="var(--accent-purple)" /> {t.professional.techArsenal}
                  </h2>
                  <div className="section-line" />
                </div>

                <div className="skills-grid">
                  {skills.map((skill) => (
                    <div className="skill-neobrutal" key={skill.name}>
                      <div className="skill-icon-wrapper">{skill.icon}</div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Minha Trajetória (Experience & Education Timeline) - Moved above Projects Grid for high visibility */}
              <section className="section-wrapper" style={{ marginTop: '2rem' }}>
                <div className="section-head">
                  <h2 className="section-title">
                    <FaBriefcase color="var(--accent-purple)" /> {t.professional.trajectoryTitle}
                  </h2>
                  <div className="section-line" />
                </div>
                
                <div className="timeline-grid" style={{ marginTop: '2.5rem' }}>
                  <div>
                    <h3 className="timeline-title" style={{ marginBottom: '1.5rem', fontSize: '1.4rem', borderBottom: '3px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                      {t.professional.experienceTitle}
                    </h3>
                    <div className="timeline-list">
                      {t.professional.xp.map((xpItem, idx) => (
                        <div className="timeline-item" key={idx}>
                          <div className="timeline-dot" />
                          <div className="timeline-header">
                            <span className="timeline-date">{xpItem.period}</span>
                            <h4 className="timeline-title" style={{ fontSize: '1.2rem' }}>{xpItem.role}</h4>
                            <div className="timeline-sub">{xpItem.company}</div>
                          </div>
                          <ul className="timeline-desc">
                            {xpItem.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="timeline-title" style={{ marginBottom: '1.5rem', fontSize: '1.4rem', borderBottom: '3px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                      {t.professional.educationTitle}
                    </h3>
                    <div className="timeline-list">
                      {t.professional.edu.map((eduItem, idx) => (
                        <div className="timeline-item" key={idx}>
                          <div className="timeline-dot" />
                          <div className="timeline-header">
                            <span className="timeline-date">{eduItem.period}</span>
                            <h4 className="timeline-title" style={{ fontSize: '1.2rem' }}>{eduItem.course}</h4>
                            <div className="timeline-sub">{eduItem.school}</div>
                          </div>
                          <ul className="timeline-desc">
                            {eduItem.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects Grid */}
              <section className="section-wrapper" style={{ marginTop: '2rem' }}>
                <div className="section-head">
                  <h2 className="section-title">
                    <FaFolder color="var(--accent-purple)" /> {t.professional.projectsTitle}
                  </h2>
                  <div className="section-line" />
                </div>

                <div className="projects-grid">
                  {/* PROJECT 1: AtivHub */}
                  <div className="neobrutal-card project-neobrutal project-ativhub">
                    <div className="project-meta">
                      <div className="neobrutal-badge">{t.professional.featuredBadge}</div>
                      <div className="project-icons-right">
                        <a href="https://github.com/LucasViana4555" target="_blank" rel="noreferrer" className="proj-link" title={t.professional.viewCode}>
                          <FaGithub />
                        </a>
                        <a href="https://ativhub.vercel.app" target="_blank" rel="noreferrer" className="proj-link" title={t.professional.visitProject}>
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                    <h3 className="project-heading">AtivHub</h3>
                    <p className="project-body">{t.professional.ativhubDesc}</p>
                    
                    {/* Floating Popover Preview */}
                    <div className="project-preview-popover">
                      <img 
                        src="/ativhub_preview.png" 
                        alt="AtivHub Preview" 
                        className="project-preview-popover-img"
                      />
                    </div>

                    <div className="project-tags">
                      <span className="tech-tag-neobrutal">Spring Boot</span>
                      <span className="tech-tag-neobrutal">PostgreSQL</span>
                      <span className="tech-tag-neobrutal">Next.js</span>
                      <span className="tech-tag-neobrutal">React</span>
                      <span className="tech-tag-neobrutal">JWT</span>
                    </div>
                  </div>

                  {/* PROJECT 2: Premier League */}
                  <div className="neobrutal-card project-neobrutal">
                    <div className="project-meta">
                      <FaFolder size={30} color="var(--accent-purple)" />
                      <div className="project-icons-right">
                        <a href="https://github.com/LucasViana4555/Projeto-PremierLeague" target="_blank" rel="noreferrer" className="proj-link" title={t.professional.viewCode}>
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <h3 className="project-heading">{t.professional.premierTitle}</h3>
                    <p className="project-body">{t.professional.premierDesc}</p>
                    <div className="project-tags">
                      <span className="tech-tag-neobrutal">Java</span>
                      <span className="tech-tag-neobrutal">Spring Boot</span>
                      <span className="tech-tag-neobrutal">React</span>
                      <span className="tech-tag-neobrutal">PostgreSQL</span>
                    </div>
                  </div>

                  {/* PROJECT 3: Stock Manager */}
                  <div className="neobrutal-card project-neobrutal">
                    <div className="project-meta">
                      <FaFolder size={30} color="var(--accent-purple)" />
                      <div className="project-icons-right">
                        <a href="https://github.com/LucasViana4555/Sistema-de-estoque" target="_blank" rel="noreferrer" className="proj-link" title={t.professional.viewCode}>
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <h3 className="project-heading">Sistema de Estoque</h3>
                    <p className="project-body">{t.professional.estoqueDesc}</p>
                    <div className="project-tags">
                      <span className="tech-tag-neobrutal">PHP</span>
                      <span className="tech-tag-neobrutal">Laravel</span>
                      <span className="tech-tag-neobrutal">MySQL</span>
                    </div>
                  </div>

                  {/* PROJECT 4: CrudSpringBoot */}
                  <div className="neobrutal-card project-neobrutal">
                    <div className="project-meta">
                      <FaFolder size={30} color="var(--accent-purple)" />
                      <div className="project-icons-right">
                        <a href="https://github.com/LucasViana4555/CrudSpringBoot" target="_blank" rel="noreferrer" className="proj-link" title={t.professional.viewCode}>
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <h3 className="project-heading">Crud Spring Boot</h3>
                    <p className="project-body">{t.professional.crudDesc}</p>
                    <div className="project-tags">
                      <span className="tech-tag-neobrutal">Java</span>
                      <span className="tech-tag-neobrutal">Spring Boot</span>
                      <span className="tech-tag-neobrutal">JPA/Hibernate</span>
                      <span className="tech-tag-neobrutal">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Certifications and Extras */}
              <section className="section-wrapper" style={{ marginTop: '2rem' }}>
                <div className="section-head">
                  <h2 className="section-title">
                    <FaCertificate color="var(--accent-purple)" /> {t.professional.certificationsTitle}
                  </h2>
                  <div className="section-line" />
                </div>

                <div className="timeline-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="neobrutal-card">
                    <ul className="timeline-desc" style={{ paddingLeft: 0 }}>
                      {t.professional.certs.map((cert, idx) => (
                        <li key={idx} style={{ fontSize: '1.05rem', marginBottom: '0.8rem' }}>{cert}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="neobrutal-card">
                    <h3 className="timeline-title" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                      {t.professional.extraTitle}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                      {t.professional.extraDesc}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ==========================================
              TAB: PERSONAL (HOBBIES & OFFLINE LIFE)
             ========================================== */}
          {activeTab === 'personal' && (
            <div className="tab-fade-in">
              <section className="section-wrapper">
                <div className="section-head">
                  <h2 className="section-title">
                    <BatIcon size={34} color="var(--accent-purple)" style={{ marginRight: '0.5rem' }} /> {t.personal.title}
                  </h2>
                  <div className="section-line" />
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '750px', lineHeight: 1.6 }}>
                  {t.personal.subtitle}
                </p>

                {/* Hobbies Grid */}
                <div className="projects-grid" style={{ marginBottom: '4rem' }}>
                  {t.personal.hobbies.map((hobby, idx) => (
                    <div className="neobrutal-card" key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ fontSize: '2.5rem' }}>{hobby.icon}</span>
                        <h3 className="project-heading" style={{ margin: 0 }}>{hobby.title}</h3>
                      </div>
                      <p className="project-body" style={{ margin: 0 }}>{hobby.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Stats Grid */}
                <div className="section-head">
                  <h2 className="section-title">
                    <FaCode color="var(--accent-purple)" /> {t.personal.statsTitle}
                  </h2>
                  <div className="section-line" />
                </div>

                <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                  {t.personal.stats.map((stat, idx) => (
                    <div className="neobrutal-card" key={idx} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                      <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', color: 'var(--accent-purple)', fontWeight: 800, marginBottom: '0.5rem' }}>
                        {stat.val}
                      </h4>
                      <p style={{ fontFamily: 'var(--font-heading)', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* ==========================================
              TAB: CONTACT
             ========================================== */}
          {activeTab === 'contact' && (
            <div className="tab-fade-in">
              <section className="section-wrapper">
                <div className="section-head">
                  <h2 className="section-title">
                    <BatIcon size={34} color="var(--accent-purple)" style={{ marginRight: '0.5rem' }} /> {t.contact.title}
                  </h2>
                  <div className="section-line" />
                </div>

                <div className="contact-grid">
                  <div className="contact-card-neobrutal">
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                      {t.contact.subtitle}
                    </p>

                    <div className="contact-info-list" style={{ marginBottom: '1.5rem' }}>
                      <div className="contact-info-item">
                        <div className="contact-info-icon"><FaEnvelope /></div>
                        <div className="contact-info-text">
                          <h4>{t.contact.emailLabel}</h4>
                          <p>lucasv4555@gmail.com</p>
                        </div>
                      </div>

                      <div className="contact-info-item">
                        <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                        <div className="contact-info-text">
                          <h4>{t.contact.locationLabel}</h4>
                          <p>{t.contact.locationVal}</p>
                        </div>
                      </div>
                    </div>

                    <div className="hero-socials" style={{ width: '100%', justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
                      <a href="https://github.com/LucasViana4555" target="_blank" rel="noreferrer" className="social-neobrutal" title="GitHub">
                        <FaGithub />
                      </a>
                      <a href="https://www.linkedin.com/in/olucasv/" target="_blank" rel="noreferrer" className="social-neobrutal" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href="https://x.com/komoridev" target="_blank" rel="noreferrer" className="social-neobrutal" title="Twitter / X">
                        <FaTwitter />
                      </a>
                    </div>

                    {/* CV Download Selector in Contact Page */}
                    <div className="cv-download-wrapper" ref={contactCvRef} style={{ width: '100%', position: 'relative' }}>
                      <button onClick={() => setCvContactOpen(!cvContactOpen)} className="neobrutal-btn" style={{ width: '100%' }}>
                        <FaDownload /> {t.hero.ctaCv}
                      </button>
                      {cvContactOpen && (
                        <div className="cv-dropdown-neobrutal" style={{ width: '100%' }}>
                          <a 
                            href="/CV_Lucas_Viana_da_Silva.pdf" 
                            download="CV_Lucas_Viana_da_Silva.pdf" 
                            onClick={() => setCvContactOpen(false)}
                          >
                            {lang === 'pt' ? 'Português (PT)' : 'Portuguese (PT)'}
                          </a>
                          <a 
                            href="/CV_Lucas_Viana_da_Silva_english.pdf" 
                            download="CV_Lucas_Viana_da_Silva_english.pdf" 
                            onClick={() => setCvContactOpen(false)}
                          >
                            {lang === 'pt' ? 'Inglês (EN)' : 'English (EN)'}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="neobrutal-card">
                    {formSubmitted ? (
                      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <BatIcon size={64} color="var(--accent-purple)" className="loader-pulsing-bat" style={{ marginBottom: '1rem' }} />
                        <h3 className="timeline-title" style={{ color: 'var(--accent-purple)' }}>
                          {t.contact.formSuccess}
                        </h3>
                      </div>
                    ) : (
                      <form className="contact-form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                          <label htmlFor="name">{t.contact.formName}</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="form-input" 
                            placeholder={lang === 'pt' ? 'Ex: Bruce Wayne' : 'e.g. Bruce Wayne'}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">{t.contact.formEmail}</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="form-input" 
                            placeholder="exemplo@gmail.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="message">{t.contact.formMessage}</label>
                          <textarea 
                            id="message" 
                            rows="4" 
                            className="form-input" 
                            placeholder={lang === 'pt' ? 'Escreva aqui...' : 'Write here...'}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            required
                          />
                        </div>

                        <button type="submit" className="neobrutal-btn" style={{ marginTop: '0.5rem' }}>
                          {t.contact.formSubmit}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </section>
            </div>
          )}
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-dev">
            <BatIcon size={24} color="var(--accent-purple)" />
            <span>{t.footer.text}</span>
          </div>
          <div>
            <span>© 2026 — {t.footer.rights}</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
