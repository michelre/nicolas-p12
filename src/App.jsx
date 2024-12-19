import './App.css';
import { Outlet } from 'react-router-dom';
import logo from './assets/Logo.sportsee.png'; // Chemin vers ton logo

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
          <div className="nav-item">🏋️</div>
          <div className="nav-item">🏊</div>
          <div className="nav-item">🚴</div>
          <div className="nav-item">✈️</div>
        </nav>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
