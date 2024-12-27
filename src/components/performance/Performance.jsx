import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import './Performance.css'; 

const Performance = () => {
  const characteristic = [
    { subject: 'Intensité', A: 55, B: 110, fullMark: 150 },
    { subject: 'Vitesse', A: 125, B: 130, fullMark: 150 },
    { subject: 'Force', A: 95, B: 130, fullMark: 150 },
    { subject: 'Endurance', A: 120, B: 100, fullMark: 150 },
    { subject: 'Energie', A: 115, B: 90, fullMark: 150 },
    { subject: 'Cardio', A: 85, B: 85, fullMark: 150 },
  ];

  // Fonction de rendu personnalisé pour les labels
  const renderCustomLabel = ({ x, y, payload }) => {
    if (payload.value === 'Intensité') {
      // Ajustement spécifique pour Intensité
      return (
        <text
          x={x}
          y={y - 4} 
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    } else if (payload.value === 'Endurance') {
      // Ajustement spécifique pour Endurance
      return (
        <text
          x={x}
          y={y + 10} 
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    } else if (['Cardio', 'Energie'].includes(payload.value)) {
      // Regroupe Cardio et Energie
      return (
        <text
          x={ x - 28} 
          y={y + 5}
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    } else if (['Vitesse', 'Force'].includes(payload.value)) {
      // Regroupe Vitesse et Force
      return (
        <text
          x={x + 23 } 
          y={y + 3}
          textAnchor="middle"
          fill="white"
          style={{ fontSize: '14px', fontWeight: 'bold' }}
        >
          {payload.value}
        </text>
      );
    }
    return null;
  };

  return (
    <div className="performance-container"> {/* Conteneur principal avec styles CSS */}
      <ResponsiveContainer width="100%" height="100%"> {/* Graphique responsive */}
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={characteristic}> {/* Graphique centré avec rayon de 80% */}
          <PolarGrid radialLines={false} className="polar-grid" /> {/* Grille sans lignes radiales */}
          <PolarAngleAxis
            dataKey="subject" // Labels autour du graphique
            tickLine={false} // Pas de petits traits
            tick={renderCustomLabel} // Labels personnalisés
          />
          <PolarRadiusAxis tick={false} axisLine={false} /> {/* Pas de ticks ni de ligne radiale */}
          <Radar
            name="Performance" // Nom des données
            dataKey="A" // Utilise la clé "A" pour les valeurs
            className="radar-chart" // Styles CSS pour le radar
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
  
};

export default Performance;