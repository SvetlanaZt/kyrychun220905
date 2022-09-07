import { useState, useEffect } from 'react';
// import {fetchApi} from 'api/api'
import axios from "axios";
import css from './Header.module.css'


export default function Header(){
    const [currentExchange, setCurrentExchange] = useState([])

    useEffect(() => {
        axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=yei6WD8EtACj9FGH1MGU2VzIhys7RPy4')
          .then(response => setCurrentExchange(response.data.rates))
      }, []);
      const EUR = (currentExchange.EUR * currentExchange.UAH).toFixed(2);
      const USD = (currentExchange.USD * currentExchange.UAH).toFixed(2);
      
console.log(currentExchange)

    return(
        <header className={css.header}>
            <div className={css.headerContainer}>
            <a className={css.headerLink} href="*"> 
            {/* <img src='../img/images.png' alt='time'></img> */}
            <span className={css.headerTitle}>Time</span>
            </a>
                 <nav className={css.headerNavigation}>
                    <ul className={css.headerList}>
                        <li className={css.headerItem}>Головна</li>
                        <li className={css.headerItem}>Депозити</li>
                        <li className={css.headerItem}>Кредити</li>
                    </ul>
                </nav> 
               <ul>
              {currentExchange && (<li className={css.headerCurrency}>{EUR} {USD}</li>
              )}
          </ul> 
            </div>
        </header>
    )
}