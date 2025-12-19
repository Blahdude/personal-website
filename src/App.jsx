import React, { useState, useEffect } from 'react'
import { 
  Home, 
  Wrench, 
  Music, 
  Bookmark, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun,
  ArrowRight, 
  ArrowLeft,
  ArrowDownToLine, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Trophy,
  Headphones
} from 'lucide-react'
import MusicPlayer from './MusicPlayer'

const TIMELINE = [
  {
    year: "2025 - Present",
    role: "Founder",
    company: "Rubin",
    description: "Building the future of Music AI. Leading development of generative audio tools and interactive chat interfaces.",
    icon: <Briefcase size={16} />,
    logo: null, // Add logo path here, e.g., "/rubin-logo.png"
    link: "https://rubin-chat.vercel.app/"
  },
  {
    year: "2022 - 2026",
    role: "B.S. Computer Science",
    company: "University of Michigan",
    description: "Focusing on Machine Learning and Artificial Intelligence. Conducting research in computer vision and deep learning.",
    icon: <GraduationCap size={16} />,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Seal_of_the_University_of_Michigan.svg"
  },
  {
    year: "Spring 2024",
    role: "CFO & Leadership",
    company: "Michigan Rugby",
    description: "Managed team finances and strategy. Advocated for program development with University administration.",
    icon: <Trophy size={16} />,
    logo: null
  },
  {
    year: "May 2023",
    role: "National Champion",
    company: "Michigan Men's Rowing",
    description: "ACRA National Championship. Developed resilience, discipline, and teamwork at the highest collegiate level.",
    icon: <Trophy size={16} />,
    logo: null
  },
  {
    year: "2021 - 2022",
    role: "Division 1 Athlete",
    company: "Loyola Marymount University",
    description: "Walked on to Division 1 Rowing. Developed strong discipline and work ethic before transferring to Michigan to pursue Computer Science.",
    icon: <GraduationCap size={16} />,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Loyola_Marymount_University_seal.svg/1200px-Loyola_Marymount_University_seal.svg.png"
  },
  {
    year: "2017 - 2022",
    role: "Music Producer",
    company: "Independent",
    description: "Started producing music in 9th grade. Self-taught in composition, mixing, and mastering. Explored various genres and developed a deep passion for audio synthesis.",
    icon: <Headphones size={16} />,
    logo: null
  }
]

const ARTICLES = {
  'rugby-president': {
    title: "Meeting President Ono",
    date: "Spring 2024",
    content: `
      <img src="/rugby-president.png" alt="Rugby Team Meeting with President Ono" style="width: 100%; border-radius: 12px; margin-bottom: 32px;" />
      
      <p>I had the incredible opportunity to meet with University of Michigan President Santa Ono alongside my rugby teammates to discuss the future of our program and plans for a new field. It was a surreal experience to advocate for a sport and a community that has given me so much.</p>

      <p>Walking into his office, I was struck by the history on the walls. He had photos displayed with some of the most impactful people in the world—world leaders, innovators, and changemakers. Standing there, taking it all in, I had a realization that resonated deeply with me: I want to be on that wall someday.</p>
      
      <p>This meeting wasn't just about a field; it was a masterclass in leadership and vision. Seeing how President Ono engaged with us, listened to our concerns, and championed student initiative was inspiring. It reinforced my drive to not only excel in my own endeavors but to create impact that lasts far beyond my time here.</p>

      <div style="display: grid; grid-template-columns: 1fr; gap: 16px; margin-top: 32px;">
        <img src="/rugby-helmet.png" alt="With the signed helmet" style="width: 100%; border-radius: 12px; height: auto; object-fit: cover;" />
      </div>
    `
  },
  'rowing-championship': {
    title: "National Champions",
    date: "May 2023",
    content: `
      <img src="/rowing-article-main.png" alt="Michigan Rowing Action Shot" style="width: 100%; border-radius: 12px; margin-bottom: 32px;" />
      
      <p>In May 2023, the Michigan Men's Rowing Team secured the ACRA National Championship. It was the culmination of years of early mornings, grueling erg tests, and unwavering dedication to the process. Rowing is a sport that demands absolute synchronicity; there is no MVP in a boat, only the collective rhythm of eight people moving as one.</p>

      <p>Balancing the rigors of a varsity-level athletic schedule with a demanding Computer Science curriculum taught me invaluable lessons about time management, resilience, and leadership. As a team, we learned that success isn't just about power—it's about trust. Trusting the person in front of you, trusting the training, and trusting yourself when your body wants to quit.</p>
      
      <p>Serving in a leadership capacity within the team (and jokingly as "CFO") allowed me to see the operational side of success as well. Whether it's debugging a complex system or executing a race plan in the final 500 meters, the principles remain the same: preparation, execution, and the ability to adapt under pressure.</p>
      
      <p>This championship represents more than just a medal; it represents the power of a shared vision and the incredible things that can be achieved when a group of individuals commits entirely to a common goal.</p>
    `
  },
  'reflections': {
    title: "Reflections on AI and Music Creation",
    date: "Dec 18, 2025",
    content: `
      <p>To begin, I will speak about my experience making music. I wasn't naturally gifted at music, I had to work hard at it consistently for four years to get to the point where I could proudly release something. I learned how to make music from Youtube and used basically every music software tool I could get my hands on. I was particularly inspired by artists like Tame Impala, Kanye West, Bon Iver, Aries, and Finneas who often produced, wrote, and performed their own music, as well as producers like Kenny Beats and Nick Mira who made beats for other artists. I watched countless interviews and studio sessions to get inspired and learn how I could be one of the greats.</p>

      <p>I particularly looked up to artists who made their own instrumentals. I was shy and insecure and was worried about sharing my music. They felt more scrappy and that is something I related to. I felt these people's greatest talent was their ability to "steal like an artist," or an ability to compile their current resources up to the best of their ability to create something new. They don't need the greatest tools to make something great, they just needed tools. Watching these artists made me think I could be like them one day. That if I placed midi notes in the same way they did, and tweaked knobs in the same way they did, and set my plugins to the right presets, then I could too make great music.</p>
      
      <p>I can't speak on creativity back in the day, or what it meant to be a fan of someone like Michael Jackson, AC/DC, or The Beatles, but I'd imagine the dream felt a bit more out of reach due to a somewhat increased barrier to entry. You almost always had to amass a tangible talent, like guitar or voice or drums, and you had to put in the hours and hours of time to get good at this tangible skill. If you learned to play guitar long enough you would likely be able to start making some cool new stuff of your own and be able to combine styles that you liked.</p>

      <p>The thing about these skills is that they often don't go away. Like any skill you master, you can come back to it and retain a lot of the skill you developed. As music evolved, or more particularly as mainstream music evolved, and as technology became more impactful, we began seeing these tangible skills change and adapt based on the new instruments of the time, often new technologies that shaped new generations of music. These skills are less tangible in that they rely more on technology, which isn't inherently bad at all, but is going to be less respected due to the lack of blood sweat and tears that were required to put in to create that work. Honestly this might be what it boils down to. There is a spectrum of how much people value this compared to others I believe.</p>

      <p>To the point above, there is always a spectrum though. There are obviously cases of people who grew up classically or in bands and eventually convert to be able to appreciate new kinds of music and art forms. It's difficult for me to fully say it's a lack of understanding but it really might be to some extent. However, it's interesting to think of how to bridge this gap, or if this is even a gap worth bridging in the first place.</p>

      <p>It is looked down upon among those who fail to understand that everything that they use currently was likely some version of this: a new technology (at one point everything was new) that challenges their safety. By safety I mean something is new, and is a threat either their current view of the world, their existing competitive advantage in the world, and their future plans. It is a fair and understandable position to have, and I would like to infer that this pattern will propagate through time. In music, there were likely people who pushed back on the synth. There were many people who pushed back on autotune, and it used to be a common topic in music, until people got so used to it and actually probably realized they enjoy a little bit of autotune, that new technologies blurred it out that the new technologies outweighed their fear of autotune so they stopped caring and adapted. However to take advantage of the opportunity, many had to face backlash for their use, which is totally fair and again this will propagate through time.</p>

      <p>Now I would like to go back to the music creation process again. People have been creating music forever. It started with wood and skin drums and wood flutes and fire songs, then we developed new technology which allowed us to not only create nicer versions of the existing instruments but also allowed us to invent new instruments. And as always, those who adapted and used the new instruments won. It's not often you hear wood drums or tribal songs in modern music these days. Honestly it's hard to pinpoint why. My first thought was that people just prefer better sounding music however that's just implying all older music is bad which is not the case at all so that's not a fair assumption to make.</p> 
      
      <p>That leads me to think that it's more connected to generations having music that is theirs. Music tends to evolve, yet most of my friends only listen to old music from pre 2010's or just exclusively bands who are now 40+ years old. So yes, I'm thinking that somehow it's connected to music being a literal placeholder for people in time. For some people it may represent a closeness with their parents and a slight rebelliousness of their current generation and the trajectory they think the world is going. Or it could be as simple as they are an old spirit and just appreciate the tangible skill it took to create music back in the day, something they can respect more. That kinda brings me back to the idea of tangible skills and how they've evolved today. Because of how much freedom and support technology like the computer has brought music, likely impacts those who value the tangible aspect of music to respect current music less, which is totally fair.</p>

      <p>However, in this discussion its important to consider that there is also a lot of balance in music and entertainment as whole with the person making the music is incredibly important, so it's important to weigh that fact whenever thinking about music and technology as a whole. When the person who makes the music is respected by the listener, the listener can tolerate that a lot more even if it was a prior controversial idea or opinion of theirs.</p>
    `
  }
}

function ArticleView({ article, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="article-view" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={onBack} className="btn-action secondary" style={{ width: 'fit-content', marginBottom: '32px' }}>
        <ArrowLeft size={16} style={{ marginRight: '8px' }} /> Back to Home
      </button>
      
      <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>{article.title}</h1>
      <div style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '14px', marginBottom: '40px' }}>
        {article.date}
      </div>
      
      <div 
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }} 
        style={{ 
          lineHeight: '1.8', 
          color: 'var(--text-primary)',
          fontSize: '16px'
        }}
      />
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [activeArticle, setActiveArticle] = useState(null)
  const [showMusicPlayer, setShowMusicPlayer] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const scrollToSection = (id) => {
    setActiveTab(id)
    setActiveArticle(null) // Close article if navigating via dock
    // Small timeout to allow render if switching back from article view
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 10)
  }

  const handleArticleClick = (e, slug) => {
    e.preventDefault()
    setActiveArticle(slug)
    window.scrollTo(0, 0)
  }

  if (showMusicPlayer) {
    return (
      <div className="app-container">
        <nav className="site-header">
          <div className="site-header-inner">
             <div className="nav-left">
                <div 
                  className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                  onClick={() => {
                    setShowMusicPlayer(false)
                    scrollToSection('home')
                  }}
                >
                  Home
                </div>
                <div 
                  className={`nav-link ${activeTab === 'timeline' ? 'active' : ''}`} 
                  onClick={() => {
                    setShowMusicPlayer(false)
                    scrollToSection('timeline')
                  }}
                >
                  Timeline
                </div>
                <div 
                  className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`} 
                  onClick={() => {
                    setShowMusicPlayer(false)
                    scrollToSection('posts')
                  }}
                >
                  Projects
                </div>
                <div className="nav-link active">
                  Music
                </div>
             </div>
             
             <div className="nav-right">
                <a href="https://www.linkedin.com/in/olivercamp/" target="_blank" rel="noopener noreferrer" className="nav-icon-link">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:ocamp@umich.edu" className="nav-icon-link">
                  <Mail size={18} />
                </a>
                <div className="nav-divider-vertical" />
                <div className="nav-icon-link" onClick={toggleTheme}>
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </div>
             </div>
          </div>
        </nav>
        <MusicPlayer onBack={() => setShowMusicPlayer(false)} />
        <footer>
          <div>© 2025 Oliver Camp. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="mailto:ocamp@umich.edu" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/olivercamp/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </footer>
      </div>
    )
  }

  if (activeArticle && ARTICLES[activeArticle]) {
    return (
      <div className="app-container">
        <nav className="nav-dock">
          <div className="nav-dock-inner">
             <div className="nav-item" onClick={() => setActiveArticle(null)}>
              <Home size={20} />
            </div>
            <div className="nav-divider" />
            <div className="nav-item" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </div>
          </div>
        </nav>
        <ArticleView 
          article={ARTICLES[activeArticle]} 
          onBack={() => setActiveArticle(null)} 
        />
        <footer>
          <div>© 2025 Oliver Camp. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="mailto:ocamp@umich.edu" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/olivercamp/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <nav className="site-header">
        <div className="site-header-inner">
           <div className="nav-left">
              <div 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} 
                onClick={() => scrollToSection('home')}
              >
                Home
              </div>
              <div 
                className={`nav-link ${activeTab === 'timeline' ? 'active' : ''}`} 
                onClick={() => scrollToSection('timeline')}
              >
                Timeline
              </div>
              <div 
                className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`} 
                onClick={() => scrollToSection('posts')}
              >
                Projects
              </div>
              <div 
                className={`nav-link ${showMusicPlayer ? 'active' : ''}`}
                onClick={() => setShowMusicPlayer(true)}
              >
                Music
              </div>
           </div>
           
           <div className="nav-right">
              <a href="https://www.linkedin.com/in/olivercamp/" target="_blank" rel="noopener noreferrer" className="nav-icon-link">
                <Linkedin size={18} />
              </a>
              <a href="mailto:ocamp@umich.edu" className="nav-icon-link">
                <Mail size={18} />
              </a>
              <div className="nav-divider-vertical" />
              <div className="nav-icon-link" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </div>
           </div>
        </div>
      </nav>

      {/* Main Bento Grid Section */}
      <section id="home" className="bento-grid">
        
        {/* Hero Card (Left) */}
        <div className="bento-card card-hero">
          <div className="profile-section">
            <img src="/profile.png" alt="Oliver Camp" className="profile-image" />
            <h1 className="hero-title">
              Oliver Camp
            </h1>
            <div style={{ 
              marginTop: '24px', 
              color: 'var(--text-secondary)', 
              fontSize: '14px', 
              lineHeight: '1.6',
              fontFamily: 'var(--font-serif)'
            }}>
              I love food, pushing myself, and taking on new adventures. Building Rubin to shape how musicians interact with AI.
            </div>
          </div>
          
          <div 
            onClick={() => scrollToSection('posts')} 
            className="btn-action secondary"
            style={{ marginTop: 'auto', justifyContent: 'center', gap: '8px' }}
          >
            See projects <ArrowRight size={14} />
          </div>
        </div>

        {/* Education Card */}
        <div className="bento-card">
          <div>
            <div className="card-title">Education</div>
            <div className="card-subtitle">University of Michigan</div>
            <div style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '12px' }}>
              B.S. in Computer Science<br/>
              Graduating May 2026
            </div>
          </div>
          <a href="/oliver_camp_resume.pdf" target="_blank" className="btn-action">
            View Resume <ArrowDownToLine size={14} />
          </a>
        </div>

        {/* Founder/Current Role Card */}
        <div className="bento-card">
          <div>
            <div className="card-title">Founder</div>
            <div className="card-subtitle">Rubin</div>
            <div style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '12px' }}>
              The future of Music AI.
            </div>
          </div>
          <a href="https://rubin-chat.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-action secondary">
            Try it out <ExternalLink size={14} />
          </a>
        </div>

        {/* Developer Card */}
        <div className="bento-card">
           <div>
              <div className="card-title">Stack</div>
              <div className="tech-stack">
                <span className="tech-pill">Python</span>
                <span className="tech-pill">PyTorch</span>
                <span className="tech-pill">C++</span>
                <span className="tech-pill">React</span>
                <span className="tech-pill">Pandas</span>
                <span className="tech-pill">NumPy</span>
              </div>
            </div>
        </div>
        
        {/* Music Card */}
        <div className="bento-card">
           <div>
              <div className="card-title">My Music</div>
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Over 800 self-taught projects across Logic Pro, FL Studio, and Ableton Live. Started with no musical experience, learned everything online through podcasts and videos, experimented with hundreds of plugins from instruments to effects in the process.
              </div>
            </div>
             <button onClick={() => setShowMusicPlayer(true)} className="btn-action secondary">
              Listen <ArrowRight size={14} />
            </button>
        </div>

      </section>

      {/* Timeline Section */}
      <section id="timeline" style={{ paddingTop: '20px' }}>
        <div style={{ 
          marginBottom: '40px',
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          color: 'var(--text-primary)'
        }}>
          Journey
        </div>
        
        <div className="timeline-container">
          {TIMELINE.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-left">
                <div className="timeline-date">{item.year}</div>
              </div>
              
              <div className="timeline-center">
                <div className="timeline-line" />
                <div className="timeline-icon">
                  {item.logo ? (
                     <img src={item.logo} alt={item.company} className="timeline-logo-img" />
                  ) : (
                    item.icon
                  )}
                </div>
              </div>
              
              <div className="timeline-right">
                <div className="timeline-content">
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                  <div className="timeline-description">{item.description}</div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-link">
                      View <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Posts / Selected Works Section */}
      <section id="posts" style={{ paddingTop: '40px' }}>
        <div className="posts-header">
          <Wrench size={48} /> Posts & Projects
        </div>
        
        <div className="posts-grid">
          
          {/* Previous Rubin Chat Post (Optional or remove since it's in hero) */}
          <a href="https://rubin-chat.vercel.app/" target="_blank" className="post-card large">
             <div className="post-card-bg" style={{ background: '#4A4A4A' }} />
            <div className="post-content">
              <div className="post-title" style={{ fontSize: '24px' }}>Rubin Chat</div>
              <div className="post-date">Startup • Ongoing</div>
            </div>
          </a>

          {/* Large Featured Card: Article */}
          <a href="#" onClick={(e) => handleArticleClick(e, 'reflections')} className="post-card">
            <div className="post-card-bg" style={{ background: 'linear-gradient(45deg, #1a1a1a 0%, #2a2a2a 100%)' }} />
            <div className="post-content">
              <div className="post-title" style={{ fontSize: '16px' }}>Reflections on AI and Music Creation</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px', lineHeight: '1.4' }}>
                "I wasn't naturally gifted at music..."
              </div>
              <div className="post-date">Article • Dec 18, 2025</div>
            </div>
          </a>

          <a href="#" onClick={(e) => handleArticleClick(e, 'rugby-president')} className="post-card">
             <div className="post-card-bg">
                <img src="/rugby-president.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Meeting President Ono" />
             </div>
             <div className="post-content">
                <div className="post-title">Meeting President Ono</div>
                <div className="post-date">Leadership • Spring 2024</div>
             </div>
          </a>

          <a href="#" onClick={(e) => handleArticleClick(e, 'rowing-championship')} className="post-card">
             <div className="post-card-bg">
                <img src="/rowing-champs-main.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} alt="Michigan Men's Rowing Champions" />
             </div>
             <div className="post-content">
                <div className="post-title">National Championship</div>
                <div className="post-date">Championship • May 2023</div>
             </div>
          </a>

        </div>
      </section>

      <footer>
        <div>© 2025 Oliver Camp. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="mailto:ocamp@umich.edu" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/olivercamp/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
