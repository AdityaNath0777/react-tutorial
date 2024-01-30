import { useId } from "react"

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) {
  // useId generates and stores unique IDs
  const id = useId();
  return (
    <div
      className={` bg-white p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2">
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          type="number" 
          id = {id}
          className='outline-none w-full bg-transparent py-1.5'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          // if amountChange exists (val: true), then it will trigger
          onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}
          // just to make sure it won't break the build
          // i.e. for safety purposes   // good standard safety practice
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg p-1 bg-gray-100 cursor-pointer outline-none'
          value={selectedCurrency} 
          onChange={ (e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled = {currencyDisabled}
        >
          {currencyOptions.map( (currency) => (
            <option key={currency} value={currency}>
              {currency}
              {/* Don't use {} after => arrrow key, bc we're not returning anything */}
              {/* Thus we're here using parenthesis: { fn( ()=> () ) } */}
            </option>
          ) )}
        </select>
      </div>
    </div>
  )
}

export default InputBox
