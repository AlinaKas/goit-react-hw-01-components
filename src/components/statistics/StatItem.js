import PropTypes from 'prop-types';
import RandomColor from './RandomColor';
import s from './Statistics.module.css';

export default function StatItem({ label, percentage }) {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `${RandomColor()}`,
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
