import { Name, ItemDetails, CartItemContainer} from './cart-item.styles.js';


const CartItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Name>
          {quantity} x ${price}
        </Name>
      </ItemDetails>
    </CartItemContainer>
  )
};

export default CartItem;