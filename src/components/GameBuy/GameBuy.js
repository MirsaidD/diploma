import { Button } from "../button/button"
import { useDispatch } from "react-redux/";
import { setItemInCart } from "../../redux/cart/reducer";

export const GameBuy = ({ game }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(game));
    }
    return (
        <div className="Game-Buy" >
            <span className="game-buy__price">{game.price}$.</span>
            <Button type="primery" onClick={(handleClick)} >В Корзину</Button>
        </div >
    )
}