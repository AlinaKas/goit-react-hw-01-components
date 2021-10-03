import StatList from './StatList';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <StatList items={stats} />
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.node,
};
