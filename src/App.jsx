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

    ExternalLink,
    Briefcase,
    GraduationCap,
    Trophy,
    Headphones
} from 'lucide-react'
import MusicPlayer from './MusicPlayer'



const ARTICLES = {

    'rowing-championship': {
        title: "National Champions",
        date: "May 2023",
        content: `
      <img src="/rowing-article-main.png" alt="Michigan Rowing Action Shot" style="width: 100%; border-radius: 12px; margin-bottom: 32px;" />
      
      <p>In May 2023, the Michigan Men's Rowing Team secured the ACRA National Championship. It was the culmination of years of early mornings, grueling erg tests, and unwavering dedication to the process. Rowing is a sport that demands absolute synchronicity; there is no MVP in a boat, only the collective rhythm of eight people moving as one.</p>

      <p>Balancing the rigors of a varsity-level athletic schedule with a demanding Computer Science curriculum taught me invaluable lessons about time management, resilience, and leadership. As a team, we learned that success isn't just about power—it's about trust. Trusting the person in front of you, trusting the training, and trusting yourself when your body wants to quit.</p>
      
      <p>Whether it's debugging a complex system or executing a race plan in the final 500 meters, the principles remain the same: preparation, execution, and the ability to adapt under pressure.</p>
      
      <p>This championship represents more than just a medal; it represents the power of a shared vision and the incredible things that can be achieved when a group of individuals commits entirely to a common goal.</p>
    `
    },
    'reflections': {
        title: "Reflections on AI and Music Creation",
        date: "Coming Soon",
        content: `

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
    const [theme, setTheme] = useState('light')

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
            <>

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
            </>
        )
    }

    if (activeArticle && ARTICLES[activeArticle]) {
        return (
            <>

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
            </>
        )
    }

    return (
        <>


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
                                B.S. in Computer Science<br />
                                Graduating May 2026
                            </div>
                        </div>

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



                {/* Posts / Selected Works Section */}
                <section id="posts" style={{ paddingTop: '40px' }}>
                    <div className="posts-header">
                        <Wrench size={48} /> Posts & Projects
                    </div>

                    <div className="posts-grid">

                        {/* Previous Rubin Chat Post (Optional or remove since it's in hero) */}
                        <a href="https://rubin-chat.vercel.app/" target="_blank" className="post-card large">
                            <div className="post-card-bg">
                                <img src="/blog/56.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="56." />
                            </div>
                            <div className="post-content">
                                <div className="post-title" style={{ fontSize: '24px' }}>56.</div>
                                <div className="post-date">Startup • Ongoing</div>
                            </div>
                        </a>

                        {/* Large Featured Card: Article */}
                        <a href="#" onClick={(e) => handleArticleClick(e, 'reflections')} className="post-card">
                            <div className="post-card-bg">
                                <img src="/blog/Reflections on AI and Music Creation.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Reflections on AI and Music Creation" />
                            </div>
                            <div className="post-content">
                                <div className="post-title" style={{ fontSize: '16px' }}>Reflections on AI and Music Creation</div>

                                <div className="post-date">Article • Dec 18, 2025</div>
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
        </>
    )
}

export default App