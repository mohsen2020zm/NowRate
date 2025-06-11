import './RateList.css'
import Rate from './Rate/Rate'
import RateListSkeleton from '../RateListSkeleton/RateListSkeleton'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function RateList() {

  const [rawData, setRawData] = useState([])
  const [haveMessage, setHaveMessage] = useState(false)
  const [allCurrencies, setAllCurrencies] = useState([])
  const [filteredCurrencies, setFilteredCurrencies] = useState([])
  const [num, setNum] = useState(20)

  const selector = useSelector(state => state.currency)

  const fetchData = async () => {
    setAllCurrencies([])
    await fetch(`https://v6.exchangerate-api.com/v6/dfbca7dfe6c4b7e914e58c4f/latest/${selector.originCurr}`)
    .then(res => res.json())
    .then(res => {
      setNum(20)
      let currencies = Object.entries(res.conversion_rates)
      setRawData(currencies)
    })
  }
  
  useEffect(() => {
    fetchData()
  },[selector.originCurr])
  
  useEffect(() => {
    let filtered = rawData.filter(curr => curr[0].toLowerCase().includes(selector.destinationCurr.toLowerCase()))
    if(num === 20){
      setHaveMessage(false)
    }else{
      filtered.length === 0 ? setHaveMessage(true) : setHaveMessage(false)
    }
    setAllCurrencies(filtered)
    addTwentyCurrencies(filtered)
  },[selector.destinationCurr, rawData])

  const addTwentyCurrencies = currs => {
    setNum(prev => prev + 20)
    let twentyCurrencies = []
    for(let i = 0; i < num; i++){
      currs[i] && twentyCurrencies.push(currs[i])
      setFilteredCurrencies(twentyCurrencies)
    }
  }

  return (
    <div className='container'>
      {
        haveMessage ? <p className='message'>Not Found</p> :
        allCurrencies.length === 0 ? <RateListSkeleton /> :
      <>
        <div className="rates-main-div">
          {filteredCurrencies.map(curr => <Rate key={curr[0]} code={curr[0]} price={curr[1]} />)}
        </div>
        {allCurrencies.length > 20 &&
        <div className="add-more-btn-div">
          <button onClick={() => addTwentyCurrencies(allCurrencies)}>More</button>
        </div>}
      </>
      }
    </div>
  )
}
