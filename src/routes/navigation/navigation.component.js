import { Fragment} from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { UserContext } from '../../contexts/user.context';
// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop' >
            SHOP
          </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth' >
                SIGN IN
              </NavLink>
            )}
          <CartIcon/>
        </NavLinks>
        { isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;