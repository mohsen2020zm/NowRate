import './Header.css'
import OriginCurrency from './OriginCurrency/OriginCurrency'

export default function Header() {

    const date = new Date()

  return (
    <header>
        <div className="container">
            <div className="header-flex-div">
                <p className="header-date">{`${date.toLocaleDateString('en-US', {weekday: 'short'})}, ${date.getDate()} ${date.toLocaleDateString('en-US', {month: 'short'})}, ${date.getFullYear()}`}</p>
                <OriginCurrency />
            </div>
        </div>
    </header>
  )
}
