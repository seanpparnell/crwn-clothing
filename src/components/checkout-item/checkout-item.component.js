// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action.js';

import { Arrow, RemoveButton, Value, Quantity, NameQuantityPrice, ImageContainer, CheckoutItemConatiner} from './checkout-item.styles.js'

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity} = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  // const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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