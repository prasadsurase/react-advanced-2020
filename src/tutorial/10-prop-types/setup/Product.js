import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = (props) => {
  const {name, image, price} = props;
  return (
    <article className="product">
      <img src={image?.url} alt={name}/>
      <h4>{name}</h4>
      <h5>{price}</h5>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number
}

Product.defaultProps = {
  name: 'default name',
  image: {url: defaultImage},
  price: 0
}

export default Product;
