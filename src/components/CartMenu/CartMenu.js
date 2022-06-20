import { Button } from "../button/button";
import { calcTotalPrice } from "../utils";
import './CartMenu.css'

function CartMenu({ items, onClick }) {
    return (
        <div className="CartMenu">
            <div className="cart-menu__games-list">
                {
                    items.lenght > 0 ? items.map(game => game.title) : 'Корзина пуста'
                }
            </div>
            {
                items.lenght > 0 ?
                    <div className="cart-menu__arrage">
                        <div className="cart-menu__total-price">
                            <span>Итого:</span>
                            <span>{calcTotalPrice(items)}руб.</span>
                            <Button type="primery" size="m" onClick={onClick}>
                                Оформить заказ
                            </Button>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
}

export default CartMenu;