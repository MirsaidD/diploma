import { BiCartAlt } from 'react-icons/bi'

import './CartBlock.css'

function CartBlock() {
    return (
        <div className="Cart-block">
            <BiCartAlt size={40} className="cart-block__icon" />
            <span className='cart-block__total-price'>2232руб</span>
        </div>
    );
}

export default CartBlock;