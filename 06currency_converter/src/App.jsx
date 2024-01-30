import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';

// Need to use {}, bcz InputBox is not exported by default in index.js
import { InputBox } from './components/index';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  
  const convert = () => {
    // conversion
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    // also fixin the converted amount to 2 decimal places
  }

  return (
    <>
    <div 
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url(https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg)`}}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form 
          onSubmit={(e) => {
            // to stop prevent submitting this form to some URL
            e.preventDefault();

            convert()
          }}
        >
          <div className="w-full mb-1">
            <InputBox 
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={ (currency) => setFrom(currency)}
              onAmountChange={ (amount) => setAmount(amount) }
              selectedCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-500 text-white px-2 py-0.5'

              onClick={swap} 
            >Swap</button>
          </div>
          <div className="w-full mb-1">
            <InputBox 
              label="to"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={ (currency) => setTo(currency) }
              selectedCurrency={to}
              amountDisabled

            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-700 text-white px-4 py-3 rounded-lg'
          >Convert {from.toUpperCase()} to {to.toUpperCase()} </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
