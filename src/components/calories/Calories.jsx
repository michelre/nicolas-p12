import './calories.css';
import caloriesIcon from '../../assets/calories-icon.png';
import proteinIcon from '../../assets/protein-icon.png';
import carbsIcon from '../../assets/carbs-icon.png';
import fatIcon from '../../assets/fat-icon.png';

const Calories = ({ data }) => {
  return (
    <div>
      <div className="vignette">
        <div className="vignette-image image-calories">
          <img alt="icon calories" src={caloriesIcon} />
        </div>
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.calorieCount}kCal</p>
          <p className="vignette-type">Calories</p>
        </div>
      </div>

      <div className="vignette">
        <div className="vignette-image image-proteines">
          <img alt="icon proteines" src={proteinIcon} />
        </div>
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.proteinCount}g</p>
          <p className="vignette-type">Proteines</p>
        </div>
      </div>

      <div className="vignette">
        <div className="vignette-image image-glucides">
          <img alt="icon glucides" src={carbsIcon} />
        </div>
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.carbohydrateCount}g</p>
          <p className="vignette-type">Glucides</p>
        </div>
      </div>

      <div className="vignette">
        <div className="vignette-image image-lipides">
          <img alt="icon lipides" src={fatIcon} />
        </div>
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.lipidCount}g</p>
          <p className="vignette-type">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default Calories;
