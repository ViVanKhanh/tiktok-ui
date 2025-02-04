import classNames from "classnames/bind";
import Styles from './Button.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(Styles)
const Button = ({
    to,
    href,
    primary = false,
    small = false,
    large = false,
    text = false,
    outline = false,
    disable = false,
    rounded = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick, ...passProps
}) => {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    }
    else if (href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
export default Button;