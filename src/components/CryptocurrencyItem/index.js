// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCurrency
  return (
    <li className="currency-item">
      <div className="currency-name-img">
        <img src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="currency-value-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
