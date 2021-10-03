import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transactions.module.css';
import Container from '../container/Container';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <table className={s.transactionHistory}>
        <thead className={s.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <Transaction
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
