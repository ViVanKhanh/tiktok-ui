import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import Button from "~/component/Button";


const cx = classNames.bind(Styles);

const MenuItem = ({ data }) => {
    return <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>{data.title}</Button>
}
export default MenuItem;