import Styles from './Header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(Styles)

const Header = () => {
    return <header className={cx('wraper')}>
        <div className={cx('inner')}>
            
        </div>
    </header>
}
export default Header