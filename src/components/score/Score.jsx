import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './Score.css'; // Styles externes

const Score = () => {
    // Données pour le cercle
    const data = [
      { name: 'Progression', value: 12 }, // Partie rouge
      { name: 'Reste', value: 88 }, // Partie grise
    ];
  
    const COLORS = ['#FF0101', '#E8E8E8']; // Couleurs : rouge et gris
  
    return (
      <div className="score-container">
        <h3 className="score-title">Score</h3> {/* Titre au-dessus */}
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%" // Position X
            cy="50%" // Position Y
            startAngle={90} // Début à 12h
            endAngle={450} // Fin à 12h (360° + 90°)
            innerRadius={70} // Cercle interne
            outerRadius={80} // Cercle externe
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} /> // Couleur par segment
            ))}
          </Pie>
        </PieChart>
        <div className="score-text">
          <p className="score-percentage">12%</p> {/* Affiche le score */}
          <p className="score-subtext">de votre objectif</p> {/* Sous-texte */}
        </div>
      </div>
    );
  };
  
  export default Score;