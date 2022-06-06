import classNames from "classnames";
import './button.css'

export const Button = ({
    onClick,
    type,
    children,
    size = 's'
}) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primery': type === 'primery',
        'btn--small': size === 's',
        'btn--medium': size === 'm',
    })
    return (
        <button className={btnClass} onClick={onClick}>
            {children}
        </button>
    )
}