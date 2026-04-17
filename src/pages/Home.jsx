import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../assets/hero.jpg';
import backgroundVideo from '../assets/background.mov';
// Importa los videos de los proyectos
import gtskVideo from '../assets/gtsk.mp4'; // Asegúrate de que estos archivos existan
import enfieldVideo from '../assets/enfield.mov';
import murphyVideo from '../assets/murphy.mp4';
import jimmyVideo from '../assets/jimmy.mp4';

const Home = () => {
  // ID de tu playlist de Spotify
  const spotifyPlaylistId = '37i9dQZF1DXcBWIGoYBM5M'; // Reemplaza con el ID de tu playlist
  
  // Referencia al elemento de fondo con parallax
  const parallaxRef = useRef(null);
  
  // Efecto para manejar el movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;
      
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Calcular la posición relativa del mouse (valores entre -1 y 1)
      const xPos = (clientX / windowWidth - 0.5) * 2;
      const yPos = (clientY / windowHeight - 0.5) * 2;
      
      // Aplicar la transformación (movimiento sutil)
      parallaxRef.current.style.transform = `translate(${xPos * 15}px, ${yPos * 15}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{'--hero-bg': `url(${heroImage})`}}
    >
      <video 
        className="video-background" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      
      <section className="hero-section">
        <div className="hero-parallax-bg" ref={parallaxRef}></div>
        <div className="container">
          <h1>Matías "Miattu" Arcos</h1>
          <p className="tagline">Productor Musical | Ingeniero de Mezcla y Mastering | Sonidista FOH</p>
          
          <div className="cta-buttons">
            <a href="#portfolio" className="primary-btn">Ver Trabajos</a>
            <a 
              href="https://wa.me/+56942136335?text=Hola%20Matías,%20me%20interesa%20tu%20trabajo%20como%20productor%20musical." 
              className="secondary-btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>
      
      <section className="featured-section" id="portfolio">
        <div className="container">
          <h2>Portafolio Musical</h2>
          <div className="spotify-embed-container">
            <iframe 
              src="https://open.spotify.com/embed/playlist/4pXSTXtnChsyyB2qLSdvMt?si=7ad9af8194074afc" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allowtransparency="true" 
              allow="encrypted-media"
              title="Spotify Playlist"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="recent-projects-section">
        <div className="container">
          <h2>Proyectos Recientes</h2>
          <div className="projects-grid">
          <Link to="https://www.youtube.com/watch?v=RPtB8edAdzA&ab_channel=Kyllow" className="project-card-link">
              <div className="project-card">
                <video 
                  className="project-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={gtskVideo} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                <h3>GTSK</h3>
                <h4>Musica House</h4>
                <p>Productor | Mezcla | Mastering    Visuales</p>
                
              </div>
            </Link>
            <Link to="https://open.spotify.com/intl-es/track/6ERwQrcIXLCva5RpgK57wm?si=1b0c188eb61d49a4" className="project-card-link">
              <div className="project-card">
                <video 
                  className="project-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={enfieldVideo} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                <h3>Enfield Chase</h3>
                <h4>Indie Pop-Alternativo</h4>
                <p>Productor | Mezcla | Mastering    Visuales</p>
              </div>
            </Link>
            <Link to="https://www.youtube.com/watch?v=qLtytJfpo08&ab_channel=Enga%C3%B1andoAMurphy" className="project-card-link"> 
              <div className="project-card">
                <video 
                  className="project-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={murphyVideo} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                <h3>Engañando a Murphy</h3>
                <h4>Indie Pop-Rock</h4>
                <p>Co-productor | FOH | Visualista</p>
              </div>
            </Link>
            <Link to="https://www.youtube.com/watch?v=ZXCdgvVdYog&ab_channel=JimmyGalard" className="project-card-link"> 
              <div className="project-card">
                <video 
                  className="project-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={jimmyVideo} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                <h3>Jimmy Gallard</h3>
                <h4>Indie Pop</h4>
                <p>Co-compositor | Co-productor</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>MIATWORKS | Matías Arcos &copy; 2025 </p>
      </footer>
    </motion.div>
  );
};

export default Home;
