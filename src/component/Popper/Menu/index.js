import Tippy from "@tippyjs/react/headless";
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/component/Popper'
import MenuItem from "./MenuItem";



const cx = classNames.bind(Styles);
const Menu = ({ children, items = [] }) => {

    const renderItems = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item}/>
        ))
    }
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}
export default Menu;