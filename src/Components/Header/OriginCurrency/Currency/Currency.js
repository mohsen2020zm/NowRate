import './Currency.css'
import currencyToCountry from '../../../../Data/currencyToCountry.json'

export default function Currency({code, name, selectCurrency}) {
  return (
    <div className='currency-main-div' onClick={() => selectCurrency(code)}>
        <img src={`https://flagcdn.com/${currencyToCountry[code].toLowerCase()}.svg`} alt="flag" />
        <p className='currency-full-name'>{name}</p>
    </div>
  )
}
