import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import { FaInstagram, FaSpotify, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" aria-label="Inicio - MIATWORKS">
          <img src={logo} alt="Logo MIATWORKS - Matías Arcos Productor Musical" className="logo" />
        </Link>
      </div>
      
      <nav className="navbar" aria-label="Navegación principal">
        <ul className="nav-links">
          <li>
            <a href="https://instagram.com/mattiarcos" target="_blank" rel="noopener noreferrer" aria-label="Perfil de Instagram de Matías Arcos">
              <FaInstagram className="social-icon" />
             
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/playlist/4pXSTXtnChsyyB2qLSdvMt?go=1&sp_cid=e4f78082-f606-44fa-ba88-dda9b674a91a&utm_source=embed_player_p&utm_medium=desktop" target="_blank" rel="noopener noreferrer" aria-label="Playlist de Spotify de Matías Arcos">
              <FaSpotify className="social-icon" />
              
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/matiasarcos/" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn de Matías Arcos">
              <FaLinkedin className="social-icon" />
              
            </a>
          </li>
          <li>
            <a href="mailto:matiasarcos@hotmail.com" aria-label="Enviar correo a Matías Arcos">
              <FaEnvelope className="social-icon" />
              
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
