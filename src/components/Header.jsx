import { useState, useEffect } from 'react';
// import {fetchApi} from 'api/api'
import axios from "axios";

export default function Header(){
    const [currentExchange, setCurrentExchange] = useState([])

    useEffect(() => {
        axios.get('https://api.apilayer.com/fixer/latest?base=USD&apikey=j1e3ILhOZJR4zJ9XVwIjk825d9gatOGR')
          .then(response => setCurrentExchange(response.data.rates))
      }, []);
      const EUR = (currentExchange.EUR * currentExchange.UAH).toFixed(2);
      const USD = (currentExchange.USD * currentExchange.UAH).toFixed(2);
      


    return(
        <header>
            <div>
            <a href="*"> 
            {/* <img src='../img/images.png' alt='time'></img> */}
            <span>Time</span>
            </a>
                 <nav>
                    <ul>
                        <li>Головна</li>
                        <li>Депозити</li>
                        <li>Кредити</li>
                        <li>Контакти</li>
                    </ul>
                </nav> 
               <ul>
              {currentExchange && (<li>{EUR} {USD}</li>
              )}
          </ul> 
            </div>
        </header>
    )
}