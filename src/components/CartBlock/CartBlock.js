import CartMenu from "../CartMenu/CartMenu"

import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux/';
import './CartBlock.css'
import { calcTotalPrice } from "../utils";

function CartBlock() {
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);

    return (
        <div className="Cart-block">
            <BiCartAlt size={40} className="cart-block__icon" />
            <span className='cart-block__total-price'>{totalPrice}$.</span>
            <CartMenu items={items} onClick={() => null} />
        </div>
    );
}

export default CartBlock;