import { useState } from 'react'

function App() {
  const [view, setView] = useState("about");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("davidpersson094@gmail.com");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Nav */}
      <nav className="header-nav">
        <div className="nav-container">
          <span className="nav-title">DavidBenitez.dev</span>
          <ul className="nav-links">
            <li>
              <button 
                className="nav-link-button"
                onClick={() => setView("about")}
              >
                Om mig
              </button>
            </li>

            <li>
              <button 
                className="nav-link-button"
                onClick={() => setView("projects")}
              >
                Projekt
              </button>
            </li>

            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>David P. Benitez</h1>
        <p className="subtitle">.Net Utvecklare</p>
      </section>

      {/* about */}
      {view === "about" && (
        <section id="about" className="content-section">
          <h2>Om mig</h2>

          <p>
            Jag är en student inom systemutveckling med fokus på C# och .NET.
            Jag har erfarenhet av CRUD-applikationer, webbutveckling och grundläggande JavaScript/React, samt HTML och CSS.
          </p>

          <p>
            Under min LIA vill jag växa som utvecklare, förstå hur yrket fungerar i praktiken och lära mig vad som förväntas utav mig för att bli en självgående systemutvecklare.
          </p>

          {/* Tech Stack */}
        <div className="tech-stack">
          <div className="tech-item">
            <span><i className="devicon-dotnetcore-plain colored"></i></span>
          </div>
        
          <div className="tech-item">
            <span><i className="devicon-csharp-plain colored"></i></span>
          </div>
        
          <div className="tech-item">
            <span><i className="devicon-react-original colored"></i></span>
          </div>
        
          <div className="tech-item">
            <span><i className="devicon-javascript-plain colored"></i></span>
          </div>
        
          <div className="tech-item">
            <span><i className="devicon-html5-plain colored"></i></span>
          </div>
        
          <div className="tech-item">
            <span><i className="devicon-css3-plain colored"></i></span>
          </div>

          <div className="tech-item">
            <span><i className="devicon-docker-plain colored"></i></span>
          </div>

          <div className="tech-item">
            <span><i className="devicon-microsoftsqlserver-plain colored"></i></span>
          </div>

          </div>

        </section>
      )}

      {/* Projekt */}
      {view === "projects" && (
        <section className="content-section projects-section">
          <h2>Projekt</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Alarm App, C#</h3>
              <p>En konsolbaserad alarmapplikation som demonstrerar CRUD-operationer, JSON-lagring och clean code-principer med Repository Pattern.</p>
              <a href="https://github.com/DavidPBenitez/AlarmApp" className="project-link">Visa projekt →</a>
            </div>

            <div className="project-card">
              <h3>Grupp Projekt</h3>
              <p>I detta projekt jobbade jag tillsammans med andra klasskamrater för att bygga ett bokningssystem i konsoll med hjälp av vad vi lärt oss i C#.</p>
              <a href="https://github.com/andersabjorn/D-Gruppuppgift-Bokningssystem" className="project-link">Visa projekt →</a>
            </div>
          </div>
        </section>
      )}

      {/* Spacer */}
      <div id="spacer"></div>

      { /* Footer */}
      <footer id="contact" className="footer-section">
        <h2>Kontakt</h2>
        <ul className="contact-links">
          <li>
            <a 
      
              href="https://github.com/DavidPBenitez" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a onClick={handleCopy} role="button" style={{ cursor: "pointer" }} aria-label="Kopiera email">
              <i className="fas fa-envelope"></i>
            </a>
            {copied && (
              <span className="copied-text">Kopierat!</span>
            )}
          </li>

          <li>
            <a 
      
              href="https://www.linkedin.com/in/david-p-b51685248/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>     
        </ul>
      </footer>
    </>
  )
}

export default App
