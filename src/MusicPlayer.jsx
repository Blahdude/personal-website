import React, { useState, useEffect, useRef } from 'react'
import { 
  Play, 
  Pause, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  VolumeX,
  Shuffle,
  Repeat,
  ArrowLeft
} from 'lucide-react'

// Track list - manually maintained list of beats
const BEATS_FOLDER = '/beats/'
const TRACKS = [
  { id: 1, name: "Gringle", file: "1 Gringle (Prod. OLLY) 152 bpm.wav" },
  { id: 2, name: "that way 2", file: "1 that way 2 (Prod. Ollie) 79 bpm.mp3" },
  { id: 3, name: "forest hills ave", file: "10 forest hills ave (Prod. Oliver Camp) 9-18-19.mp3" },
  { id: 4, name: "pasa", file: "10 pasa (Prod. OLLY) 161 bpm.mp3" },
  { id: 5, name: "welcome home", file: "11 welcome home (Prod. OLLY) 97 bpm.mp3" },
  { id: 6, name: "lord for us", file: "12 lord for us (Prod. Oliver Camp) 11_17_19.mp3" },
  { id: 7, name: "poof like pi'erre", file: "13 poof like pi'erre.mp3" },
  { id: 8, name: "astroboy", file: "15 astroboy (Prod. OLLY) 137 bpm.mp3" },
  { id: 9, name: "barage of inspiration", file: "15 barage of inspiration (Prod. Oliver Camp) 10:3:19.mp3" },
  { id: 10, name: "carti funny", file: "15 carti funny (Oliver Camp) 132 bpm.mp3" },
  { id: 11, name: "netflix doc", file: "15 netflix doc (Prod. Ollie) 66 bpm.mp3" },
  { id: 12, name: "dis b***h haunted", file: "16 dis bithc haunted (Oliver Camp) 134 bpm.mp3" },
  { id: 13, name: "hauh", file: "16 hauh (Prod. OLLY) 81 bpm.mp3" },
  { id: 14, name: "APPLE PIE 2", file: "17 APPLE PIE 2 (Prod. Oliver Camp) 11_20_19.mp3" },
  { id: 15, name: "sol", file: "17 sol (Prod. OLLY) 134 bpm.mp3" },
  { id: 16, name: "element", file: "19 element (Oliver Alvah) 155 bpm.mp3" },
  { id: 17, name: "goldfish", file: "2 goldfish (Prod. Ollie) 103 bpm.mp3" },
  { id: 18, name: "Sweeter", file: "2 Sweeter (Prod. OLLY) 155 bpm.mp3" },
  { id: 19, name: "mama", file: "20 mama (Prod. Ollie) 112 bpm.mp3" },
  { id: 20, name: "rewnd", file: "20 rewnd (Prod. OLLY) 94 bpm.mp3" },
  { id: 21, name: "dioa", file: "21 dioa (Prod. OLLY) 138 bpm.mp3" },
  { id: 22, name: "dustin rest easy, F**K A WHAT IF", file: "3 dustin rest easy, FUCK A WHAT IF (Prod. Oliver Camp) 10_2_19.mp3" },
  { id: 23, name: "one day", file: "3 one day (Prod. Ollie) 80 bpm.mp3" },
  { id: 24, name: "tone down", file: "3 tone down (Prod. Ollie) 87 bpm.mp3" },
  { id: 25, name: "Yea, we got one", file: "3 Yea, we got one (Prod. OLLY) 111 bpm.mp3" },
  { id: 26, name: "mask on", file: "4 mask on (Prod. Ollie) 77 bpm.mp3" },
  { id: 27, name: "blew", file: "5 blew (Prod. Oliver Camp) 12_6_19.mp3" },
  { id: 28, name: "dirty dance", file: "5 dirty dance (Oliver Camp) 80 bpm.mp3" },
  { id: 29, name: "palm tree", file: "5 palm tree (Prod. Ollie) 99 bpm.mp3" },
  { id: 30, name: "For the money", file: "6 For the money (Prod. OLLY) 140 bpm.mp3" },
  { id: 31, name: "pop smoke", file: "6 pop smoke (Prod. Ollie) 104 bpm.mp3" },
  { id: 32, name: "the less i know", file: "6 the less i know (Oliver) 144 bpm.mp3" },
  { id: 33, name: "alllll in myhead", file: "7 alllll in myhead (Oliver Camp) 160 bpm.mp3" },
  { id: 34, name: "uptown", file: "7 uptown (Prod. Ollie) 141 bpm.mp3" },
  { id: 35, name: "main man waters", file: "8 main man waters (Oliver Camp) 87 bpm.mp3" },
  { id: 36, name: "Fly High", file: "9 Fly High (Prod. OLLY) 138 bpm.mp3" },
  { id: 37, name: "love yourz", file: "9 love yourz (Prod. Oliver Camp) 11_11_19.mp3" },
  { id: 38, name: "rolling 2", file: "9 rolling 2 (Prod. Ollie) 128 bpm.mp3" },
  { id: 39, name: "buzzed boy", file: "buzzed boy (Prod. Ollie).mp3" },
  { id: 40, name: "buzzer cutter", file: "buzzer cutter (Prod. Ollie).mp3" },
  { id: 41, name: "Camp", file: " Camp (Prod. Oliver Camp).mp3" },
  { id: 42, name: "Clipped that h** beat", file: "Clipped that hoe beat.mp3" },
  { id: 43, name: "comic book heroes", file: "comic book heroes.mp3" },
  { id: 44, name: "dark future", file: "dark future (Prod. Ollie).mp3" },
  { id: 45, name: "delay it as long as it goes", file: "delay it as long as it goes.mp3" },
  { id: 46, name: "four on the floor INSTRUMENTAL", file: "four on the floor INSTRUMENTAL.mp3" },
  { id: 47, name: "Guitarra Better Version", file: "Guitarra Better Version (Prod. Oliver Camp).mp3" },
  { id: 48, name: "hold my apple juice", file: "hold my apple juice.mp3" },
  { id: 49, name: "kid see me beat", file: "kid see me beat.mp3" },
  { id: 50, name: "Lessons 2", file: "Lessons 2 (Prod. Danny Alvah) 5-16-20.mp3" },
  { id: 51, name: "Lessons 4", file: "Lessons 4 (Prod. Danny Alvah) 5-18-20.mp3" },
  { id: 52, name: "lsd but its me", file: "lsd but its me (Prod. Ollie).mp3" },
  { id: 53, name: "Lulabye", file: "Lulabye (Prod. Oliver Camp).mp3" },
  { id: 54, name: "orientation", file: "orientation.mp3" },
  { id: 55, name: "pack 231", file: "pack 231.mp3" },
  { id: 56, name: "Roady", file: "Roady (Prod. Oliver Camp).mp3" },
  { id: 57, name: "spandex", file: "spandex.mp3" },
  { id: 58, name: "SUMTHIN SUMTHIN' beat", file: "SUMTHIN SUMTHIN' beat.mp3" },
  { id: 59, name: "What the f**k 2", file: "What the fuck 2 (Prod. OLLY).wav" },
].map(track => ({ ...track, artist: "Oliver Camp" }))

function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export default function MusicPlayer({ onBack }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false) // Track if user has played anything
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const [repeat, setRepeat] = useState(0) // 0: off, 1: all, 2: one
  const [playlist, setPlaylist] = useState(TRACKS)
  const [trackDurations, setTrackDurations] = useState({}) // Store durations for all tracks
  
  const audioRef = useRef(null)
  const progressRef = useRef(null)

  const currentTrack = playlist[currentTrackIndex]

  // Load durations for all tracks on mount
  useEffect(() => {
    const loadDurations = async () => {
      const durations = {}
      
      for (const track of TRACKS) {
        try {
          const audio = new Audio()
          audio.preload = 'metadata'
          
          await new Promise((resolve) => {
            audio.onloadedmetadata = () => {
              durations[track.id] = audio.duration
              resolve()
            }
            audio.onerror = () => {
              durations[track.id] = null
              resolve()
            }
            audio.src = `${BEATS_FOLDER}${track.file}`
          })
        } catch (err) {
          durations[track.id] = null
        }
      }
      
      setTrackDurations(durations)
    }
    
    loadDurations()
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      if (repeat === 2) {
        // Repeat one
        audio.currentTime = 0
        audio.play()
      } else if (repeat === 1 || currentTrackIndex < playlist.length - 1) {
        // Repeat all or next track
        handleNext()
      } else {
        setIsPlaying(false)
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex, repeat, playlist.length])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.play().catch(err => console.error('Play failed:', err))
    } else {
      audio.pause()
    }
  }, [isPlaying, currentTrackIndex])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    if (shuffle) {
      const nextIndex = Math.floor(Math.random() * playlist.length)
      setCurrentTrackIndex(nextIndex)
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
    }
    setIsPlaying(true)
  }

  const handlePrevious = () => {
    if (shuffle) {
      const prevIndex = Math.floor(Math.random() * playlist.length)
      setCurrentTrackIndex(prevIndex)
    } else {
      setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
    }
    setIsPlaying(true)
  }

  const handleProgressClick = (e) => {
    const audio = audioRef.current
    if (!audio || !progressRef.current) return
    
    const rect = progressRef.current.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audio.currentTime = percent * duration
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const toggleRepeat = () => {
    setRepeat((prev) => (prev + 1) % 3)
  }

  const handleTrackClick = (index) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
    setHasStarted(true)
  }

  const handleShufflePlay = () => {
    setShuffle(true)
    const randomIndex = Math.floor(Math.random() * playlist.length)
    setCurrentTrackIndex(randomIndex)
    setIsPlaying(true)
    setHasStarted(true)
  }

  return (
    <div className="music-player-container">
      <div className="music-player-header">
        <button onClick={onBack} className="btn-back">
          <ArrowLeft size={20} /> Back
        </button>
        <div>
          <h1 className="music-player-title">My Music</h1>
          <p className="music-player-description">
            Over 800 projects spanning Logic Pro, FL Studio, and Ableton Live. I started producing in 2017 with no prior 
            musical experience, fully self-taught through the internet. Exploring multiple DAWs and hundreds of plugins, 
            from instruments to effects, experimenting with different tools and workflows. Hundreds of plugins, millions 
            of minutes listened, and hundreds of podcasts and videos on production and my favorite artists shaped my 
            understanding of music. This is what I'd do when I got home, putting off homework. After graduating high school, 
            I read Steve Jobs' biography the summer before LMU and knew I wanted to transfer and pursue something bigger. 
            That led me to Michigan, studying Computer Science, and now I'm building Rubin to build music AI the right way.
          </p>
        </div>
      </div>

      <div className="music-player-content">
        {/* Top Controls */}
        <div className="top-controls-bar">
          <button
            className={`shuffle-btn-top ${shuffle ? 'active' : ''}`}
            onClick={handleShufflePlay}
            title="Shuffle and play random track"
          >
            <Shuffle size={24} />
            <span>Shuffle Play</span>
          </button>
        </div>

        {/* Track List */}
        <div className="track-list-container">
          <div className="track-list-header">
            <div className="track-list-header-item" style={{ flex: '0 0 40px' }}>#</div>
            <div className="track-list-header-item" style={{ flex: '1' }}>Title</div>
            <div className="track-list-header-item" style={{ flex: '0 0 80px', textAlign: 'right' }}>Duration</div>
          </div>
          <div className="track-list">
            {playlist.map((track, index) => (
              <div
                key={track.id}
                className={`track-item ${index === currentTrackIndex ? 'active' : ''}`}
                onClick={() => handleTrackClick(index)}
              >
                <div className="track-number">
                  {index === currentTrackIndex && isPlaying ? (
                    <div className="equalizer">
                      <span></span><span></span><span></span>
                    </div>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className="track-info">
                  <div className="track-name">{track.name}</div>
                  <div className="track-artist">{track.artist}</div>
                </div>
                <div className="track-duration">
                  {trackDurations[track.id] ? formatTime(trackDurations[track.id]) : '-'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Hidden audio element - always present */}
      <audio
        ref={audioRef}
        src={`${BEATS_FOLDER}${currentTrack.file}`}
        preload="metadata"
      />

      {/* Fixed Player Controls at Bottom - only show after user starts playing */}
      {hasStarted && (
        <div className="player-controls">
          {/* Left: Current Track Info */}
          <div className="current-track-info">
            <div className="current-track-name">{currentTrack.name}</div>
            <div className="current-track-artist">{currentTrack.artist || 'Unknown Artist'}</div>
          </div>

          {/* Center: Controls + Progress */}
          <div className="player-center">
            <div className="main-controls">
              <button
                className={`control-btn ${shuffle ? 'active' : ''}`}
                onClick={() => setShuffle(!shuffle)}
                title="Shuffle"
              >
                <Shuffle size={16} />
              </button>
              <button className="control-btn" onClick={handlePrevious} title="Previous">
                <SkipBack size={18} />
              </button>
              <button className="control-btn play-pause-btn" onClick={handlePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
              </button>
              <button className="control-btn" onClick={handleNext} title="Next">
                <SkipForward size={18} />
              </button>
              <button
                className={`control-btn ${repeat > 0 ? 'active' : ''} ${repeat === 2 ? 'repeat-one' : ''}`}
                onClick={toggleRepeat}
                title={repeat === 0 ? 'Repeat Off' : repeat === 1 ? 'Repeat All' : 'Repeat One'}
              >
                <Repeat size={16} />
                {repeat === 2 && <span className="repeat-one-badge">1</span>}
              </button>
            </div>

            <div className="progress-container">
              <span className="time-display">{formatTime(currentTime)}</span>
              <div
                ref={progressRef}
                className="progress-bar"
                onClick={handleProgressClick}
              >
                <div
                  className="progress-fill"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <span className="time-display">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Volume Control */}
          <div className="volume-control">
            <button
              className="control-btn"
              onClick={() => setIsMuted(!isMuted)}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>
        </div>
      )}
    </div>
  )
}
