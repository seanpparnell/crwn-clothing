import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { Arrow, RemoveButton, Value, Quantity, NameQuantityPrice, ImageContainer, CheckoutItemConatiner} from './checkout-item.styles.js'

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity} = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemConatiner>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <NameQuantityPrice>{name}</NameQuantityPrice>
      <NameQuantityPrice>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </NameQuantityPrice>
      <NameQuantityPrice>{price}</NameQuantityPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemConatiner>
  )
}

export default CheckoutItem;