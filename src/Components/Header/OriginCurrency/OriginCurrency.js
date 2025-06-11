import './OriginCurrency.css'
import Currency from './Currency/Currency'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeOriginCurrency, changeDestinationCurr } from '../../../Data/Store'
import { FaEquals } from "react-icons/fa";
import currencyList from '../../../Data/currencyList.json'
import currencyToCountry from '../../../Data/currencyToCountry.json'


export default function OriginCurrency() {

  const selector = useSelector(state => state.currency)
  const disPatch = useDispatch()

  const [allCurrencies, setAllCurrencies] = useState(currencyList)
  const [showCurrecies, setShowCurrecies] = useState(false)
  const [searchOriginCurr, setSearchOriginCurr] = useState(selector.originCurr)  
  
  const onSearchOrg = e => {
    setSearchOriginCurr(e.target.value)
    let filtredCurrency = currencyList.filter(curr => curr.name.toLowerCase().includes(searchOriginCurr.toLowerCase()))
    setAllCurrencies(filtredCurrency)
  }

  const onSelect = code => {
    disPatch(changeOriginCurrency({orgCurr: code}))
    setSearchOriginCurr(code)
  }

  return (
    <div className="origin-main-div">
        <div className="select-currency-div">
            {showCurrecies === false && currencyToCountry[searchOriginCurr] ?
            <img src={`https://flagcdn.com/${currencyToCountry[searchOriginCurr].toLowerCase()}.svg`} alt="flag" /> : null}
            <input 
            type="text" 
            placeholder='Search currency...'
            className='org-curr-input'
            value={searchOriginCurr}
            onFocus={() => setShowCurrecies(true)} 
            onBlur={() => setTimeout(() => setShowCurrecies(false),200)}
            onChange={e => onSearchOrg(e)}/>
        </div>
        {showCurrecies &&
        <div className="currencies-div">
          {allCurrencies.map(curr => <Currency {...curr} key={curr.code} selectCurrency={onSelect}/>)}
        </div>}
        <FaEquals />
        <input 
        type="text"
        className='des-curr-input' 
        placeholder='Search currency...'
        onChange={e => disPatch(changeDestinationCurr({desCurr: e.target.value}))}/>
    </div>
  )
}
