
import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const featuredProjects = projects.filter(project => project.featured);
  const additionalProjects = projects.filter(project => !project.featured);

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#">SG.</a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
          <a href="#contact">Let's talk ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="eyebrow">SOFTWARE ENGINEER | 5+ Years of Experience</div>

          <div className="hero-content">
            <div>
              <h1>From complex problems <br />
                <span>to working software.</span>
              </h1>
              <p className="intro">
                Hi, I'm Simran, a Chicago-based software engineer with over five years of experience building enterprise applications and backend systems. My work spans full-stack development, software architecture, and test automation, with an emphasis on reliability and maintainability.
                </p>
              <div className="hero-links">
                <a href="#experience" className="primary-link">Explore my work ↘</a>
                <a
                  href={`${import.meta.env.BASE_URL}Simran_Gollapudi.Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >View résumé ↗</a>
              </div>
            </div>

            <div className="code-window">
              <div className="code-header">
                <span>developer.js</span>
              </div>
              <pre>
                <span className="keyword">const</span> developer = {'{'}{'\n'}
                {'  '}name: <span className="string">"Simran Gollapudi"</span>,{'\n'}
                {'  '}role: <span className="string">"Software Engineer"</span>,{'\n'}
                {'  '}basedIn: <span className="string">"Chicago, IL"</span>,{'\n'}
                {'  '}stack: [{'\n'}
                {'    '}<span className="string">"C#"</span>, <span className="string">".NET"</span>, <span className="string">"JavaScript"</span>,{'\n'}
                {'    '}<span className="string">"React"</span>, <span className="string">"SQL Server"</span>, <span className="string">"Playwright"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}focus: [{'\n'}
                {'    '}<span className="string">"Backend engineering"</span>,{'\n'}
                {'    '}<span className="string">"Full-stack development"</span>,{'\n'}
                {'    '}<span className="string">"Test automation"</span>{'\n'}
                {'  '}]{'\n'}
                {'};'}
              </pre>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SOFTWARE ENGINEER · M.S. COMPUTER SCIENCE CANDIDATE @ GEORGIA TECH</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="toolkit">
          <span>MY EVERYDAY TOOLKIT</span>
          <div>JavaScript <span>C# / .NET</span> <span>Playwright</span>
            <span>New Relic</span> <span>SQL</span> <span>Node.js</span>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div>
            <div className="section-label">01 / THE PERSON BEHIND THE CODE</div>
            <h2>An Engineering Mindset.<br />An Evolving Skill Set.</h2>
          </div>
          <div className="about-copy">
            <p>My background in software engineering spans restaurant technology and rail infrastructure, where I've developed customer-facing applications, backend systems, and internal engineering tools. I've worked on new features, improvements to existing applications, automated testing, and production issues.</p>
            <p>I enjoy understanding how systems work and figuring out how to approach unfamiliar problems. I care about writing reliable, maintainable software and understanding why certain engineering decisions are made, rather than simply implementing a solution.</p>
            <p>I'm currently pursuing an M.S. in Computer Science at Georgia Tech, with an expected graduation in Fall 2027. I wanted to build a stronger foundation in computer science and explore areas of computing beyond what I've encountered professionally. My graduate studies and personal projects give me the opportunity to develop new technical skills outside of my day-to-day work.</p>
            <h4>LANGUAGES</h4>
            <p>C# · JavaScript · Java · TypeScript · SQL · Python · C++</p>
            <h4>FRAMEWORKS & LIBRARIES</h4>
            <p>.NET · Entity Framework Core · React · React Native</p>
            <h4>BACKEND & DATA</h4>
            <p>SQL Server · Node.js · REST APIs</p>
            <h4>TOOLS & PRACTICES</h4>
            <p>Git · New Relic · CI/CD · Agile · AI-assisted development</p>
            <h4>TESTING & QUALITY</h4>
            <p>Playwright · Regression testing · Integration testing · Test automation</p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-label">02 / PROFESSIONAL EXPERIENCE</div>
          <h2>Engineering Across Industries.<br />Experience Across Technologies.</h2>
          <p className="section-description">Enterprise platforms, infrastructure tools, and customer-facing applications.</p>

          <div className="job">
            <div><h3>Codagami, Inc.</h3><span>2022 — PRESENT</span></div>
            <div>
              <h4>Software Developer · Champaign, IL</h4>
              <p>Developing and maintaining McDonald's self-service ordering and Point of Service software, with responsibilities spanning feature development, production support, test automation, and release management.</p>
              <ul>
                <li>Developed and refactored C#/.NET business logic, REST API integrations, and PIN pad initialization workflows within the Point of Service platform.</li>
                <li>Implemented New Relic telemetry across 26 production services and plugins to support application monitoring, performance analysis, and production troubleshooting.</li>
                <li>Developed a QR code-based digital receipt feature using JavaScript within the Kiosk microservice, integrating receipt generation into existing checkout workflows across 15 restaurant locations.</li>
                <li>Built an automated regression testing framework using Playwright and JavaScript, executing 368 test cases per production deployment and reducing release validation from two days to four hours.</li>
                <li>Investigated and resolved production defects across application workflows and regional plugins, including components supporting Canadian restaurant operations.</li>
                <li>Managed weekly software releases, demonstrated new functionality to stakeholders, and collaborated with product managers and QA engineers to incorporate feedback into future development.</li>
              </ul>
              <div className="job-technologies">
                <h5>Technologies</h5>
                <div className="technology-tags">
                  {["C#", ".NET", "JavaScript", "REST APIs", "Playwright", "New Relic", "CI/CD", "Claude Code"].map((technology) => (
                  <span className="technology-tag" key={technology}>
                  {technology}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="job">
            <div><h3>Herzog Technologies, Inc.</h3><span>2021 — 2022</span></div>
            <div>
              <h4>Software Engineer · Cedar Rapids, IA</h4>
              <p>Developed software for railroad infrastructure and maintenance operations, working on an integrated system that leveraged LiDAR data for computer vision, infrastructure visualization, and data processing.</p>
              <ul>
                <li>Developed a LiDAR-based computer vision application using C#, .NET 5, and asynchronous RESTful microservices, achieving 86% detection accuracy.</li>
                <li>Developed a Track Chart generator that transformed over 300 miles of railroad infrastructure data into interactive visualizations, enabling technicians to identify ballast requirements, document no-dump zones, and validate infrastructure data.</li>
                <li>Redesigned backend data processing pipelines using C#, Entity Framework Core, and SQL Server, reducing ongoing IT maintenance costs by 33%.</li>
                <li>Presented software development best practices to the engineering team, emphasizing code quality and maintainability.</li>
              </ul>
              <div className="job-technologies">
                <h5>Technologies</h5>
                <div className="technology-tags">
                  {["C#", ".NET 5", "Entity Framework Core", "SQL Server", "REST APIs", "Microservices", "LiDAR", "Computer Vision"].map((technology) => (
                  <span className="technology-tag" key={technology}>
                    {technology}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="job">
            <div><h3>Nationwide Insurance</h3><span>2020</span></div>
            <div>
              <h4>Software Engineering Intern · Des Moines, IA</h4>
              <p>Contributed to the development of Nationwide's enterprise Insurance Agent Portal, gaining experience in application development and collaborative software engineering within the insurance industry.</p>
              <ul>
                <li>Developed user-facing functionality using JavaScript to support insurance agents within the enterprise portal.</li>
                <li>Participated in technical design discussions, requirements analysis, and application architecture decisions, with an emphasis on usability and maintainability.</li>
              </ul>
              <div className="job-technologies">
                <h5>Technologies</h5>
                <div className="technology-tags">
                  {["JavaScript", "TypeScript", "Java", "HTML", "CSS", "REST APIs", "Git", "Jira", "Agile", "Scrum", "Unit Testing"].map((technology) => (
                  <span className="technology-tag" key={technology}>
                    {technology}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-label">03 / SELECTED PROJECTS</div>
          <div className="section-heading">
            <h2>Engineering beyond the workplace.</h2>
            <p>Personal and academic software projects.</p>
          </div>
          <h4 className="project-group-label">Featured Projects</h4>
          <div className="project-grid featured-project-grid">
            {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <h4 className="project-group-label">Additional Projects</h4>
          <div className="additional-project-grid">
            {additionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="section education" id="education">
          <div className="section-label">04 / EDUCATION</div>
          <h2>Education</h2>
          <div className="education-entry">
            <h3>Georgia Institute of Technology</h3>
            <h4>Master of Science in Computer Science</h4>
            <p>College of Computing · Atlanta, GA · Expected Fall 2027</p>
          <div className="education-coursework">
            <h5>Selected Graduate Coursework</h5>
            <ul>
              <li>CS 6515 · Graduate Algorithms</li>
              <li>CS 7470 · Mobile and Ubiquitous Computing</li>
              <li>CS 6750 · Human-Computer Interaction</li>
             <li>CS 6435 · Digital Health Equity</li>
            </ul>
          </div>
          </div>

          <div className="education-entry">
            <h3>University of Iowa</h3>
            <h4>Bachelor of Science in Computer Science</h4>
            <p>College of Liberal Arts and Sciences · Iowa City, IA · May 2021</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label">05 / LET'S CONNECT</div>
          <h2>Let's connect.</h2>
          <a className="contact-link" href="mailto:simrangollapudi@gmail.com">Contact me ↗</a>
          <p>I'm always interested in discussing software engineering opportunities, technical projects, and new ideas.</p>
          <div className="contact-details">
            <a href="mailto:simrangollapudi@gmail.com">simrangollapudi@gmail.com</a>
            <a href="tel:+17324397462">+1 732-439-7462</a>
            <a href="https://github.com/gollapud" target="_blank" rel="noreferrer" > GitHub ↗ </a>
            <a href="https://linkedin.com/in/simrangollapudi" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Simran_Gollapudi.Resume.pdf"
              >Download résumé ↓</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Simran Gollapudi</span>
        <span>DESIGNED IN FIGMA · BUILT WITH REACT & TYPESCRIPT</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
