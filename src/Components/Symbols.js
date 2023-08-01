import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'


const Symbols = () => {

    const currentDisplay = useSelector(selectDisplay)

    return (
        <div className='symbols'>
            <div className='stack'>
                <h2>Flag of {currentDisplay.name.common}: </h2>
                {currentDisplay.flag ? 
                (<img src={currentDisplay.flags.png} alt='flag' />) 
                : 
                ('No Flag present')
                }
            </div>
            <div className='stack'>
                <h2>Coat of Arms of {currentDisplay.name.common}: </h2>
                {currentDisplay.coatOfAmrs ?
                (<img src={currentDisplay.coatOfArms.png} alt='coat of arms' />)
                :
                ('No Coat of Arms Present')
                }
            </div>
        </div>
    )
}

export default Symbols