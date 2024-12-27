import './calories.css';
import caloriesIcon from '../../assets/calories-icon.svg';
import proteinIcon from '../../assets/proteines-icon.svg';
import carbsIcon from '../../assets/glucides-icon.svg';
import fatIcon from '../../assets/lipides-icon.svg';

const Calories = ({ data }) => {
  return (
    <div className='vignettes'>
      <div className="vignette">
        <div className="vignette-image">
          <div className='background image-calories'></div>
          <img alt="icon calories" className="icon" src={caloriesIcon} />
        </div>        
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.calorieCount}kCal</p>
          <p className="vignette-type">Calories</p>
        </div>
      </div>

      <div className="vignette">
        <div className="vignette-image">
        <div className='background image-proteines'></div>
          <img alt="icon proteines" className='icon' src={proteinIcon} />
        </div>
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.proteinCount}g</p>
          <p className="vignette-type">Proteines</p>
        </div>
      </div>

      <div className="vignette">
        <div className="vignette-image">
        <div className='background image-glucides'></div>
          <img alt="icon glucides" className="icon" src={carbsIcon} />
        </div>
        <div className="vignette-content">
          <p className="vignette-number">{data.keyData.carbohydrateCount}g</p>
          <p className="vignette-type">Glucides</p>
        </div>
      </div>

      <div className="vignette">
        <div className="vignette-image ">
        <div className='background image-lipides'></div>
          <img alt="icon lipides"  className="icon" src={fatIcon} />
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
