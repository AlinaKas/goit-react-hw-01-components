import StatItem from './StatItem';
import PropTypes from 'prop-types';
// import RandomColor from './RandomColor';
import s from './Statistics.module.css';

export default function StatList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <StatItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}

StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
