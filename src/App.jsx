import './App.css';
import { Outlet } from 'react-router-dom';
import logo from './assets/Logo.sportsee.png'; // Chemin vers ton logo
import icon1 from './assets/icon1.png'; // Import des icônes
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';

function App() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="SportSee logo" className="logo" />
          <span>SportSee</span>
        </div>
        <nav className="nav-links">
          <a href="/">Accueil</a>
          <a href="/profil">Profil</a>
          <a href="/reglage">Réglage</a>
          <a href="/communaute">Communauté</a>
        </nav>
      </header>
      <div className="app">
        <nav className="side-nav">
          <div className="nav-item">
            <img src={icon1} alt="Icon 1" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={icon2} alt="Icon 2" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={icon3} alt="Icon 3" className="nav-icon" />
          </div>
          <div className="nav-item">
            <img src={icon4} alt="Icon 4" className="nav-icon" />
          </div>
        </nav>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
