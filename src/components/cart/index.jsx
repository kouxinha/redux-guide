import { useSelector } from 'react-redux';
import { selectProductsTotalPrice } from '../../redux/cart/cart.selectors';

// Styles
import * as Styles from "./styles";

//Components
import CartItem from '../cart-item/index';

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        <Styles.CartTotal>Total: R${ productsTotalPrice }</Styles.CartTotal>
        { 
          products.map(
            (product) =>
              <CartItem product={product}/>
          )
        }
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
