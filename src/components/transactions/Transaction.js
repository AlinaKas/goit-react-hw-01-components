import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={s.row}>
      <td className={s.item}>{type}</td>
      <td className={s.item}>{amount}</td>
      <td className={s.item}>{currency}</td>
    </tr>
  );
}

Transaction.defaultProps = {
  type: 'Type not found',
  amount: 'Amount not found',
  currency: 'Currency not found',
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

