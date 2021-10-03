import PropTypes from 'prop-types';

const Painting = ({ imageUrl, title, price, profileUrl, authorName = 'unknown', quantity }) => {
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена:{price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'в наличии' : 'заканчивается'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
