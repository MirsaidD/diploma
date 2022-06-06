import './GameCover.css';

export const GameCover = ({ image = "" }) => {
    return (
        <div className="Game-Cover" style={{
            backgroundImage: `url(${image})`
        }} />

    )
}