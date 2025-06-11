import './Rate.css'
import currencyToCountry from '../../../Data/currencyToCountry.json'

export default function Rate({code, price}) {
  return (
    <div className='rate-main-div'>
        <div className='rate-details'>
          <img src={`https://flagcdn.com/${currencyToCountry[code].toLowerCase()}.svg`} alt="flag" />
          <p>{code}</p>
        </div>
        <p className='rate-number'>{price}</p>
    </div>
  )
}
