import PropTypes from 'prop-types';
import css from './CurrencyInput.module.css'

export default function CurrencyInput(props) {
    return (
      <>
        <input className={css.input} type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} />
        <select className={css.select} value={props.currency} onChange={ev => props.onCurrencyChange(ev.target.value)}>
          {props.currencies.map((currency => (
            <option value={currency}>{currency}</option>
          )))}
        </select>
      </>
    );
  }

  CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
  };