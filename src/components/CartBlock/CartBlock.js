import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux/';
import './CartBlock.css'

function CartBlock() {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, game) => acc += game.price, 0)

    return (
        <div className="Cart-block">
            <BiCartAlt size={40} className="cart-block__icon" />
            <span className='cart-block__total-price'>{totalPrice}$.</span>
        </div>
    );
}

export default CartBlock;