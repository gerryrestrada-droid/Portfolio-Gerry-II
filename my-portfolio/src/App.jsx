import React, { useEffect, useState } from 'react'

const projects = [
  {
    title: 'ShopUI',
    type: 'What I Know',
    desc: 'Production e-commerce UI built with React; accessibility and testing focused.',
    link: '#'
  },
  {
    title: 'DataVizLab',
    type: 'What I Learned',
    desc: 'Interactive visualizations with D3; performance tuning and SVG rendering.',
    link: '#'
  },
  {
    title: 'RealtimeCollab (Aspirational)',
    type: 'Aspirational',
    desc: 'Planning a real-time collaboration app using WebRTC and serverless functions.',
    link: '#'
  }
]

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  return (
    <div className="site">
      <header className="hero">
        <div className="hero-row">
          <div className="hero-left">
            <div className="profile">
              <svg className="profile-blob" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="pb" x1="0" x2="1">
                    <stop offset="0%" stopColor="#ff9a9e" />
                    <stop offset="100%" stopColor="#ff6b6b" />
                  </linearGradient>
                </defs>
                <path d="M50,3 C70,3 88,20 90,40 C92,60 78,82 58,88 C38,94 20,86 10,68 C0,50 10,22 30,12 C40,7 46,3 50,3Z" fill="url(#pb)" />
              </svg>
              <div className="profile-img-wrap">
                <img src="/images/IMG_20260122_100805.jpg" alt="Gerry II" className="profile-img" />
              </div>
            </div>
            <div className="hero-copy">
              <h1>Gerry II Estrada (G2) — Frontend Developer</h1>
              <p className="lead">I design and build refined, accessible web interfaces focused on clear interactions, fast performance, and thoughtful visual detail.</p>
            </div>
          </div>
          <div className="hero-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              <span className="visually-hidden">Toggle theme</span>
            </button>
          </div>
        </div>
        <svg className="hero-deco" viewBox="0 0 600 200" aria-hidden="true">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#ff9a9e" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          <path fill="url(#g1)" d="M0,100 C150,10 450,190 600,100 L600,200 L0,200 Z" opacity="0.16"></path>
        </svg>
      </header>

      <main className="container frame">
        <div className="layout">
          <aside className="left-col">
            <div className="profile-card">
              <div className="profile-card-img">
                <img src="/images/IMG_20260122_100805.jpg" alt="Gerry II" className="profile-img-card" />
              </div>
              <h3>Gerry II Estrada</h3>
              <p className="muted">Frontend Developer — G2</p>
              <div className="meta">
                <div><strong>3</strong><small>Projects</small></div>
                <div><strong>—</strong><small>Experience</small></div>
              ></div>
              <div className="profile-actions">
                <a className="btn" href="#contact">Contact</a>
              </div>
              <div className="profile-links">
                <a href="#projects">Projects</a>
                <a href="#learn">Learning</a>
              </div>
            </div>
          </aside>

          <div className="feed">
            <section className="about">
              <div className="about-left">
                <h2>About me</h2>
                <p>I’m Gerry II — a frontend developer crafting refined, accessible web interfaces. I prioritize usable interactions, fast load times, and polished visuals. I enjoy exploring micro-interactions, layout systems, and pragmatic design systems.</p>
                <p>I’m currently exploring advanced TypeScript, edge functions, and design systems to scale my projects with reliable patterns and better DX.</p>
              </div>
              <aside className="about-right">
                <h3>Skills</h3>
                <div className="skill-list">
                  <span className="skill">React</span>
                  <span className="skill">Vite</span>
                  <span className="skill">HTML & CSS</span>
                  <span className="skill">Accessibility</span>
                  <span className="skill">D3 / Data Viz</span>
                </div>
                <a className="btn" href="#contact">Contact</a>
              </aside>
            </section>

            <section id="projects">
              <h2>Selected Works</h2>
              <p className="section-desc">A selection of projects that demonstrate my growth: one that shows my strengths, one that taught me new techniques, and one that points toward where I’m headed next.</p>
              <div className="grid">
                {projects.map((p) => (
                  <article key={p.title} className="card">
                    <div className="card-media" aria-hidden>
                      <svg width="100%" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="80" rx="8" fill="rgba(0,0,0,0.06)"/></svg>
                    </div>
                    <h3>{p.title}</h3>
                    <small className="muted">{p.type}</small>
                    <p>{p.desc}</p>
                    <div className="tags">
                      <span className="tag">React</span>
                      <span className="tag">Accessibility</span>
                    </div>
                    <a className="btn" href={p.link}>View project</a>
                  </article>
                ))}
              </div>
            </section>

            <section id="learn">
              <h2>Currently Learning</h2>
              <ul>
                <li>React Server Components</li>
                <li>Advanced TypeScript patterns</li>
                <li>Web Performance (LCP, CLS)</li>
                <li>Edge / serverless functions</li>
              </ul>
            </section>

            <section id="contact">
              <h2>Contact</h2>
              <p>Email: <a href="mailto:gerryr.estrada@urios.edu.ph">gerryr.estrada@urios.edu.ph</a></p>
            </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Your Name — Built with React + Vite</small>
      </footer>
      <svg className="ghost-deco" viewBox="0 0 240 160" aria-hidden>
        <defs>
          <linearGradient id="g-ghost" x1="0" x2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#ffd7e0" stopOpacity="0.06"/>
          </linearGradient>
        </defs>
        <g transform="translate(20,10) scale(0.9)">
          <path d="M30,120 C10,120 5,90 20,70 C35,50 65,48 85,60 C105,48 135,50 150,70 C165,90 160,120 140,120 Z" fill="url(#g-ghost)" />
          <circle cx="70" cy="70" r="6" fill="#fff" opacity="0.18" />
          <circle cx="110" cy="70" r="6" fill="#fff" opacity="0.18" />
        </g>
      </svg>
    </div>
  )
}

function SunIcon() {
  return (
    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path d="M12 1v2" />
        <path d="M12 21v2" />
        <path d="M4.22 4.22l1.42 1.42" />
        <path d="M18.36 18.36l1.42 1.42" />
        <path d="M1 12h2" />
        <path d="M21 12h2" />
        <path d="M4.22 19.78l1.42-1.42" />
        <path d="M18.36 5.64l1.42-1.42" />
      </g>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
    </svg>
  )
}
