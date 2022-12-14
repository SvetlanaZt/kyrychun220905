import { useState, useEffect } from 'react';
// import {fetchApi} from 'api/api';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import axios from "axios";
import css from './Converter.module.css'

export default function Converter(){
    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [rates, setRates] = useState([]);
    console.log(amount1)
  
    useEffect(() => {
      axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=yei6WD8EtACj9FGH1MGU2VzIhys7RPy4')
        .then(response => {
          setRates(response.data.rates);
        })
    }, []);
  
    // useEffect(() => {
    //   if (!!rates) {
    //     function init() {
    //       handleAmount1Change(1);
    //     }
    //     init();
    //   }
    // }, [rates]);
  
    function format(number) {
      return number.toFixed(2);
    }
  
    function handleAmount1Change(amount1) {
      setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
      setAmount1(amount1);
    }
  
    function handleCurrency1Change(currency1) {
      setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
      setCurrency1(currency1);
    }
  
    function handleAmount2Change(amount2) {
      setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
      setAmount2(amount2);
    }
  
    function handleCurrency2Change(currency2) {
      setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
      setCurrency2(currency2);
    }
  
  
    return (
      <div className={css.currencyContainer}>
        <h1 className={css.currencyTitle}>Currency Converter</h1>
        <div className={css.currencyWrapperInput}>
        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencies={Object.keys(rates)}
          amount={amount1}
          currency={currency1} />
          </div>
          <div className={css.currencyWrapperInput}>
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencies={Object.keys(rates)}
          amount={amount2}
          currency={currency2} />
          </div>
      </div>
    );
  }