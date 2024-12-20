import './calories.css'

const Calories = ({data}) => {
    console.log(data)
    return <div>
        <div className="vignette">
            <div className='vignette-image image-calories'>
                <img alt="icone calories" src=""/>
            </div>            
            <div className='vignette-content'>
                <p className='vignette-number'>{data.keyData.calorieCount}kCal</p>
                <p className='vignette-type'>Calories</p>
            </div>
        </div>

        <div className="vignette">
            <div className='vignette-image image-proteines'>
            <img alt="icone proteines" src=""/>
            </div>            
            <div className='vignette-content'>
                <p className='vignette-number'>{data.keyData.proteinCount}g</p>
                <p className='vignette-type'>Proteines</p>
            </div>
        </div>

        <div className="vignette">
            <div className='vignette-image image-glucides'>
            <img alt="icone glucides" src=""/>
            </div>            
            <div className='vignette-content'>
                <p className='vignette-number'>{data.keyData.carbohydrateCount}g</p>
                <p className='vignette-type'>Glucides</p>
            </div>
        </div>


        <div className="vignette">
            <div className='vignette-image image-lipides'>
            <img alt="icone lipides" src=""/>
            </div>            
            <div className='vignette-content'>
                <p className='vignette-number'>{data.keyData.lipidCount}g</p>
                <p className='vignette-type'>Lipides</p>
            </div>
        </div>
    </div>
}

export default Calories