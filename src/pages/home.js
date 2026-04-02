import { useState } from 'react';
import { Mail, ExternalLink, Code2, Palette } from 'lucide-react';
import '../sassfiles/pages/_home.scss';


import opeyemi from "../assets/images/copy.png";

import digiplusalliance from "../assets/images/projects/digiplus-alliance.png";
import geotrak from "../assets/images/projects/geotrak.png";
import everythingmeat from "../assets/images/projects/everythingmeat.png";
import iktm from "../assets/images/projects/iktm.png";
import legalmo from "../assets/images/projects/legalmo.png";
import cash2go from "../assets/images/projects/cash2go.png";
import haven from "../assets/images/projects/haven.png";
import eightgear from "../assets/images/projects/eightgear.png";
import freshchow from "../assets/images/projects/freshchow.png";
import jolevi from "../assets/images/projects/jolevi.png";
import languagehub from "../assets/images/projects/languagehub.png";
import portfolio from "../assets/images/projects/portfolio.png";


const GitHubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DEV_PROJECTS = [
  {
    id: 1,
    title: 'DigiPlus Alliance',
    description: 'MSME Digital Maturity Assessment & Transformation Platform with comprehensive dashboard architecture for tracking digital adoption across small businesses.',
    image: digiplusalliance,
    tech: ['NestJS', 'Next.js', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'https://www.digiplus.africa/',
      front: 'https://github.com/digiplus-alliance/digiplus-alliance-client',
      back: 'https://github.com/digiplus-alliance/digiplus-alliance-server'
    }
  },
  {
    id: 2,
    title: 'Ikeja Toastmasters Club',
    description: 'Website for empowering individuals to become confident speakers and leaders, featuring event management, member registration, and club resources.',
    image: iktm,
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    links: {
      live: 'https://ikeja-toastmasters-club.vercel.app/',
      front: 'https://github.com/opeyemibioku/ikeja-toastmasters-club'
    }
  },
  {
    id: 3,
    title: 'Everything Meat',
    description: 'E-commerce marketplace connecting buyers and sellers of freshly butchered livestock, with real-time inventory, order tracking, and vendor management.',
    image: everythingmeat,
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'https://everythingmeat.vercel.app/',
      front: 'https://github.com/opeyemibioku/everythingmeat-frontend',
      back: 'https://github.com/opeyemibioku/everythingmeat-backend'
    }
  },
  {
    id: 4,
    title: '8thGear',
    description: 'Business website showcasing digital transformation services, venture studio offerings, and tech partnerships for African startups.',
    image: eightgear,
    tech: ['React', 'Bootstrap', 'SASS', 'JavaScript'],
    links: {
      live: 'https://8thgearpartners.com/',
      front: 'https://github.com/8thGear-Tech/8thGearWebsite'
    }
  },
  {
    id: 5,
    title: 'Jolevi',
    description: 'Freelance marketplace connecting skilled service providers with clients across Nigeria. Features provider profiles, service listings, client reviews, and a seamless booking flow.',
    image: jolevi,
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'https://www.jolevi.com/',
      front: 'https://github.com/JoleviTech/Jolevi',
      back: 'https://github.com/JoleviTech/jolevi-server'
    }
  },
  {
    id: 6,
    title: 'LegalMo',
    description: 'B2B Legal Services Matching App connecting legal professionals with businesses seeking legal expertise, featuring smart matching and secure document sharing.',
    image: legalmo,
    tech: ['React', 'Express', 'MongoDB', 'Node.js'],
    links: {
      live: 'https://www.legalmo.biz/',
      front: 'https://github.com/8thGear-Tech/LegalMo',
      back: 'https://github.com/8thGear-Tech/LegalMoServer'
    }
  },
  {
    id: 7,
    title: 'Geotrak',
    description: 'Data collection software supporting location tracking and real-time media capture for field operations, built for survey teams and on-the-ground data agents.',
    image: geotrak,
    tech: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS'],
    links: {
      live: 'https://www.geotrak.app/',
      front: 'https://github.com/TrulanceHQ/geo-collect-ui',
      back: 'https://github.com/TrulanceHQ/geo-collect'
    }
  },
  {
    id: 8,
    title: 'Cash2go',
    description: 'Loan prediction application using machine learning algorithms to assess creditworthiness and streamline the loan approval process for underserved users.',
    image: cash2go,
    tech: ['Node.js', 'Express', 'MongoDB'],
    links: {
      live: 'https://cash2go.netlify.app/',
      back: 'https://github.com/Cash2go-backend-org/cash2go-backend'
    }
  },
  {
    id: 9,
    title: 'Haven',
    description: 'Instructor-School Matching App connecting educators with educational institutions looking for qualified teachers across Nigeria.',
    image: haven,
    tech: ['React', 'Bootstrap', 'SASS', 'JavaScript'],
    links: {
      live: 'https://www.haveneduservices.com/',
      front: 'https://github.com/8thGear-Tech/haven-web-app'
    }
  }
];

const DESIGN_PROJECTS = [
  {
    id: 1,
    title: 'Jolevi',
    description: 'Freelance marketplace connecting service providers with clients — full UI/UX design covering onboarding, service discovery, and booking flows.',
    image: jolevi,
    tech: ['Figma', 'UI/UX'],
    links: { figma: 'https://www.figma.com/proto/g4zcpr232hab89Yk3h51Ox/Jolevi' }
  },
  {
    id: 2,
    title: 'Freshchow',
    description: 'Food delivery application with intuitive user interface design.',
    image: freshchow,
    tech: ['Figma', 'UI/UX'],
    links: { figma: 'https://www.figma.com/proto/LTRLUlKSkWQt4NLdKjkxqd/Fresh-Chow?type=design&node-id=233-903&t=tUAKC6Us4Z74bKAb-0' }
  },
  {
    id: 3,
    title: 'LanguageHub',
    description: 'Language learning platform with engaging interactive design.',
    image: languagehub,
    tech: ['Figma', 'UI/UX'],
    links: { figma: 'https://www.figma.com/proto/jR5miImofMkFRGjqDDVGOn/LanguageHubng?node-id=3-15&scaling=scale-down' }
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing design and development work.',
    image: portfolio,
    tech: ['Figma', 'UI/UX'],
    links: { figma: 'https://www.figma.com/proto/GvyThbsKeyZxLxXV8coXMG/titiekundayo?type=design&node-id=513-178' }
  }
];

const Navigation = () => (
  <nav className="navbar">
    <div className="nav-content">
      <div className="nav-logo">Opeyemi Bioku</div>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
);


// ── Option C: Centered with circular headshot ────────────────────────────────
const HeroC = () => (
  <section className="hero-c">
    <div className="hero-c-content">
      <div className="hero-c-photo">
        <img src={opeyemi} alt="Opeyemi Bioku" />
      </div>
      {/* <div className="hero-c-status">Available for new projects</div> */}
      <h1 className="hero-title">
        Fullstack Developer<br />
        <span className="hero-highlight">Building Digital Solutions</span>
      </h1>
      {/* <div className="hero-c-tags">
        <span>NestJS · Next.js</span>
        <span>MongoDB · Node.js</span>
        <span>UI/UX Design</span>
      </div> */}
      <p className="hero-subtitle">
        I design and build web applications that solve real problems. From backend infrastructure to frontend experiences, I create products that matter.
      </p>
      <div className="hero-cta">
        <a href="#work"><button className="btn-primary">View My Work</button></a>
        <a href="#contact"><button className="btn-secondary">Get in Touch</button></a>
      </div>
    </div>
    {/* <div className="scroll-indicator">
      <span>Scroll to explore</span>
      <ChevronDown size={18} />
    </div> */}
  </section>
);

const AboutSection = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm Opeyemi Bioku, a fullstack developer with a passion for creating seamless digital experiences. With expertise spanning from NestJS and Node.js backends to Next.js and React frontends, I've helped companies and startups bring their ideas to life.
        </p>
        <p>
          I specialize in building scalable architectures, optimizing performance, and crafting responsive interfaces.
        </p>
      </div>
      <div className="skills-flat">
        <div className="skills-category">
          <span className="skills-label">Languages</span>
          <div className="skills-tags">
            {['JavaScript (ES6+)', 'TypeScript'].map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="skills-category">
          <span className="skills-label">Frontend</span>
          <div className="skills-tags">
            {['Next.js', 'React.js', 'Redux', 'TailwindCSS', 'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Figma'].map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="skills-category">
          <span className="skills-label">Backend</span>
          <div className="skills-tags">
            {['Node.js', 'Nest.js', 'Express.js'].map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="skills-category">
          <span className="skills-label">Databases</span>
          <div className="skills-tags">
            {['MongoDB', 'MySQL'].map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="skills-category">
          <span className="skills-label">Tools & Cloud</span>
          <div className="skills-tags">
            {['Git', 'GitHub', 'Bitbucket', 'Postman', 'Swagger', 'AWS Amplify', 'Render', 'Cloudinary'].map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = ({ activeTab, setActiveTab }) => {
  const projects = activeTab === 'dev' ? DEV_PROJECTS : DESIGN_PROJECTS;
  const isDesign = activeTab === 'design';

  return (
    <section className="projects" id="work">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Work</h2>
          <div className="project-tabs">
            <button
              className={`tab-btn${activeTab === 'dev' ? ' active' : ''}`}
              onClick={() => setActiveTab('dev')}
            >
              <Code2 size={16} /> Development
            </button>
            <button
              className={`tab-btn${activeTab === 'design' ? ' active' : ''}`}
              onClick={() => setActiveTab('design')}
            >
              <Palette size={16} /> Design
            </button>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} isDesign={isDesign} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, isDesign }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} />
        <div className={`project-overlay${isHovered ? ' visible' : ''}`}>
          <a href={project.links.live || project.links.figma} target="_blank" rel="noopener noreferrer">
            {isDesign ? 'View Design' : 'Visit Project'} <ExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
        {!isDesign && (
          <div className="project-links">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="link-live">
                🔗 Live Site
              </a>
            )}
            {project.links.front && (
              <a href={project.links.front} target="_blank" rel="noopener noreferrer" className="link-github">
                <GitHubIcon size={13} /> Frontend
              </a>
            )}
            {project.links.back && (
              <a href={project.links.back} target="_blank" rel="noopener noreferrer" className="link-github">
                <GitHubIcon size={13} /> Backend
              </a>
            )}
          </div>
        )}
        {isDesign && project.links.figma && (
          <div className="project-links">
            <a href={project.links.figma} target="_blank" rel="noopener noreferrer" className="link-live">
              <ExternalLink size={13} /> View on Figma
            </a>
          </div>
        )}
      </div>
    </div>
  );
};



const ContactSection = () => (
  <section className="contact" id="contact">
    <div className="container">
      <h2>Let's Work Together</h2>
      <p className="contact-text">
        Got a product to build, a problem to solve, or a team that needs a reliable engineer? I'm open to new projects, full-time roles, and meaningful collaborations.
      </p>
      <div className="contact-links">
        <a href="mailto:opeyemibioku@gmail.com">
          <Mail size={20} /> <span>opeyemibioku@gmail.com</span>
        </a>
        <a href="https://github.com/opeyemibioku" target="_blank" rel="noopener noreferrer">
          <GitHubIcon size={20} /> <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/opeyemi-bioku" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon size={20} /> <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="portfolio-footer">
    <p>© 2026 Opeyemi Bioku. All rights reserved.</p>
  </footer>
);

export const Home = () => {
  const [activeTab, setActiveTab] = useState('dev');

  return (
    <div>
      <Navigation />
      {/* HERO: swap HeroB ↔ HeroC to switch layouts */}
      {/* <HeroB /> */}
      <HeroC />
      <AboutSection />
      <ProjectsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;