import { Button } from "../button/button"
export const GameBuy = ({ game }) => {
    return (
        <div className="Game-Buy">
            <span className="game-buy__price">{game.price}$.</span>
            <Button type="primery" onClick={() => null} >В Корзину</Button>
        </div>
    )
}