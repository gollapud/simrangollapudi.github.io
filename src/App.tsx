
import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <a className="logo" href="#">sg.</a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Let's talk ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="eyebrow">SOFTWARE ENGINEER | 5+ Years of Experience</div>

          <div className="hero-content">
            <div>
              <h1>Software Engineering, <br />
                <span>From Development<br />to Delivery.</span>
              </h1>
              <p className="intro">
                Hi, I'm Simran, a Chicago-based software engineer with over five years of experience developing enterprise applications and backend systems. My work spans C#/.NET, JavaScript, and full-stack development.
              <div className="hero-links">
                <a href="#work" className="primary-link">Explore my work ↘</a>
                <a href="/resume.pdf" target="_blank">View résumé ↗</a>
              </div>
            </div>

            <div className="code-window">
              <div className="code-header">
                <span>developer.js</span>
                <span>● ● ●</span>
              </div>
              <pre>
                <span className="comment">// A little about me</span>{'\n\n'}
                <span className="keyword">const</span> developer = {'{'}{'\n'}
                {'  '}name: <span className="string">"Simran Gollapudi"</span>,{'\n'}
                {'  '}role: <span className="string">"Software Engineer"</span>,{'\n'}
                {'  '}basedIn: <span className="string">"Chicago, IL"</span>,{'\n'}
                {'  '}stack: [{'\n'}
                {'    '}<span className="string">"JavaScript"</span>, <span className="string">"C#"</span>,{'\n'}
                {'    '}<span className="string">"Playwright"</span>, <span className="string">".NET 5"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}focus: <span className="string">"Backend & full-stack engineering"</span>{'\n'}
                {'}'}
              </pre>
              <div className="code-footer">➜ Ready to build something great.</div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SOFTWARE ENGINEER · M.S. COMPUTER SCIENCE @ GEORGIA TECH</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="toolkit">
          <span>MY EVERYDAY TOOLKIT</span>
          <div>JavaScript <span>C# / .NET</span> <span>Playwright</span>
            <span>New Relic</span> <span>SQL</span> <span>Node.js</span>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-label">01 / SELECTED IMPACT</div>
          <div className="section-heading">
            <h2>Engineering that delivers.</h2>
            <p>Highlights from my professional work.</p>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <span className="company">CODAGAMI / MCDONALD'S</span>
              <div className="metric">368 <small>regression tests per deployment</small></div>
              <h3>Release confidence, automated</h3>
              <p>Built a scalable end-to-end testing framework that reduced release validation from 2 days to 4 hours.</p>
              <span className="tags">PLAYWRIGHT · JAVASCRIPT · CI/CD</span>
            </article>

            <article className="project-card">
              <span className="company">CODAGAMI / MCDONALD'S</span>
              <div className="metric">26 <small>production services instrumented</small></div>
              <h3>Production visibility, end to end</h3>
              <p>Integrated New Relic telemetry for real-time monitoring, proactive incident detection, and performance optimization.</p>
              <span className="tags">NEW RELIC · OBSERVABILITY</span>
            </article>

            <article className="project-card">
              <span className="company">CODAGAMI / MCDONALD'S</span>
              <div className="metric">15 <small>restaurant locations</small></div>
              <h3>Digital receipts at the kiosk</h3>
              <p>Designed, developed, and deployed a QR code-based digital receipt solution, eliminating printed receipts across 15 locations.</p>
              <span className="tags">JAVASCRIPT · KIOSK PLATFORM</span>
            </article>

            <article className="project-card">
              <span className="company">HERZOG TECHNOLOGIES</span>
              <div className="metric">86% <small>LiDAR object detection accuracy</small></div>
              <h3>Computer vision for infrastructure</h3>
              <p>Engineered a standalone computer vision application with asynchronous RESTful microservices for infrastructure data analysis.</p>
              <span className="tags">C# · .NET 5 · REST APIs</span>
            </article>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div>
            <div className="section-label">02 / THE PERSON BEHIND THE CODE</div>
            <h2>Reliable systems.<br />Real-world impact.</h2>
          </div>
          <div className="about-copy">
            <p>I'm Simran, a Chicago-based software engineer with 5+ years of experience, specializing in enterprise applications, test automation, and production reliability. I build software that scales, simplifies complex workflows, and delivers measurable results.</p>
            <p>My expertise is in building and improving enterprise applications using C#/.NET, JavaScript, REST APIs, and automated testing. I have delivered production features for McDonald’s systems and developed .NET applications for infrastructure analysis. </p>
            <p>I have experience in cross-functional collaboration, release quality, and using coding agents as development tools. I am also pursuing an M.S. in Computer Science at Georgia Tech, expected to graduate Fall 2027.</p>
            <h4>LANGUAGES</h4>
            <p>Java · C# · JavaScript · SQL · C++</p>
            <h4>FRAMEWORKS</h4>
            <p>.NET 5 · Entity Framework Core · React Native · Node.js</p>
            <h4>TOOLS & PRACTICES</h4>
            <p>Git · New Relic · CI/CD · REST APIs · Agile</p>
            <h4>TESTING</h4>
            <p>Playwright · Automated testing · Integration testing</p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-label">03 / PROFESSIONAL EXPERIENCE</div>
          <h2>Built in production.<br />Grounded in teams.</h2>
          <p className="section-description">Enterprise platforms, infrastructure tools, and customer-facing applications.</p>

          <div className="job">
            <div><h3>Codagami, Inc.</h3><span>2022 — PRESENT</span></div>
            <div>
              <h4>Software Engineer · Champaign, IL</h4>
              <ul>
                <li>Architected New Relic observability across 26 McDonald's production services and delivered QR code digital receipts to 15 restaurant locations.</li>
                <li>Built 368 automated regression tests per deployment, cutting release validation from 2 days to 4 hours.</li>
                <li>Refactored Point of Service business logic, API orchestration, and application workflows to improve maintainability and responsiveness.</li>
                <li>Owned weekly release management and partnered with product managers, QA, and stakeholders to demonstrate features and turn feedback into engineering priorities.</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <div><h3>Herzog Technologies, Inc.</h3><span>2021 — 2022</span></div>
            <div>
              <h4>Software Engineer · Cedar Rapids, IA</h4>
              <ul>
                <li>Built a LiDAR computer vision application with C#, .NET 5, and asynchronous RESTful microservices, achieving 86% detection accuracy.</li>
                <li>Transformed over 300 miles of railroad infrastructure data into interactive Track Chart visualizations, enabling technicians to validate mission-critical data with 100% accuracy.</li>
                <li>Redesigned C# and Entity Framework Core data pipelines, reducing ongoing IT maintenance costs by 33%.</li>
                <li>Presented software development best practices to promote code quality and maintainability across the team.</li>
              </ul>
            </div>
          </div>

          <div className="job">
            <div><h3>Nationwide Insurance</h3><span>2020</span></div>
            <div>
              <h4>Software Engineering Intern · Des Moines, IA</h4>
              <ul>
                <li>Developed customer-facing functionality for the enterprise Insurance Agent Portal using JavaScript.</li>
                <li>Contributed to design discussions, requirements analysis, and architecture decisions to improve usability and maintainability.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section education">
          <div className="section-label">04 / EDUCATION</div>
          <h2>Education</h2>
          <div className="job">
            <div><h3>Georgia Institute of Technology</h3></div>
            <div><h4>Master of Science in Computer Science</h4><p>College of Computing · Atlanta, GA · Expected Fall 2027</p></div>
          </div>
          <div className="job">
            <div><h3>University of Iowa</h3></div>
            <div><h4>Bachelor of Science in Computer Science</h4><p>College of Liberal Arts and Sciences · Iowa City, IA · May 2021</p></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label">05 / LET'S CONNECT</div>
          <h2>Let's make<br />something matter.</h2>
          <a className="contact-link" href="mailto:simrangollapudi@gmail.com">Contact me ↗</a>
          <p>Have an interesting project, a role, or just a good conversation?<br />I'd love to hear from you.</p>
          <div className="contact-details">
            <a href="mailto:simrangollapudi@gmail.com">simrangollapudi@gmail.com</a>
            <a href="tel:+17324397462">+1 732-439-7462</a>
            <a href="https://github.com/gollapud" target="_blank" rel="noreferrer" > GitHub ↗ </a>
            <a href="https://linkedin.com/in/simrangollapudi" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="/resume.pdf" download="Simran_Gollapudi_Resume.pdf"> Download résumé ↓ </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Simran Gollapudi</span>
        <span>DESIGNED WITH INTENTION. BUILT WITH CARE.</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
