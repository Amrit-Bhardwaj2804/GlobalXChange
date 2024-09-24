import { useState } from 'react';
import './App.css'
import flagList from './flagList.js';

import InputBox from './components/InputBox.jsx'
import useExchangeRate from './hooks/useExchangeRate.js';

function App({styleProp}) {

    const [convertFrom, setConvertFrom] = useState('usd');
    const [convertTo, setConvertTo] = useState('inr');

    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');

    const exchangeRatelist = useExchangeRate(convertFrom); 

    const optionsList = Object.keys(exchangeRatelist);

    const conversion = ()=>{
      setResult((amount * exchangeRatelist[convertTo]).toFixed(4)); // reduce the decimal-places to 4 places
    }

    const swap = ()=>{

      setConvertFrom(convertTo);
      setConvertTo(convertFrom);

      setAmount(amount);
      setResult('');
    }


  return (
    <>
  
    <h1 className='absolute py-2 pl-4 text-lg bg-white/10 w-screen'
        style={{
          borderBottom : styleProp
        }}
    >
      Get the updated Exchange Rates @<span className='font-medium'>GlobalXChange</span>
    </h1>    
    
    <div className='h-screen w-full flex flex-col justify-center bg-blue-200'
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          backgroundSize: 'cover'
        }}
    >  

      <div className='w-[600px]  border-0 shadow-md border-solid border-white rounded-lg mx-auto p-4 bg-white/20 '>         {/* shadow-[0_0_6px_-4px_black] */}
        
        <form 
          onSubmit={(event)=>{
            event.preventDefault();
            conversion();
          }}
          className='flex flex-col justify-center items-center w-full'>
        
          <div className='w-full mb-3'>
            <InputBox 
              labelValue='From' 
              placeholderValue='Enter amount here' 
              disabledValue={false} 

              amountValue={amount}  
              onAmountValueChange={(newAmountValue)=>setAmount(newAmountValue)} 
              
              selectedOption={convertFrom}
              optionsList={optionsList}
              onOptionChange={(updatedFrom)=>{
                if(updatedFrom === convertTo){
                  setConvertTo()
                }
                setConvertFrom(updatedFrom);
              }}

              flagLink={`https://flagsapi.com/${flagList[convertFrom.toUpperCase()]}/shiny/64.png`}
            />
          </div>

          <button 
            type='button'
            onClick={swap}
            className='border-2 border-white border-solid absolute -translate-y-6 px-8 pb-2 pt-1 mb-2 bg-blue-600 text-white p-2 rounded-md'>
              Swap
          </button>

          <div className='w-full mb-4'>
            <InputBox 
              labelValue='To' 
              placeholderValue='Converted result' 
              disabledValue={true}  

              amountValue={result} 
              onAmountValueChange={(newAmountValue)=>setAmount(newAmountValue)}

              selectedOption={convertTo}
              optionsList={optionsList}
              onOptionChange={(updatedFrom)=>{
                setConvertTo(updatedFrom);
              }}

              flagLink={`https://flagsapi.com/${flagList[convertTo.toUpperCase()]}/shiny/64.png`}
            />
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white p-2 rounded-md'>Convert {convertFrom.toUpperCase()} to {convertTo.toUpperCase()}</button>
      
        </form>
      
      </div>
    </div>

    </>
  )
}

export default App
