import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Styles from './AccountItem.module.scss'

const cx = classNames.bind(Styles)

const AccountItem = () => {
    return (
        <div className={cx('Wrapper')}>
            <img className={cx('avata')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1f2b211f002a8865e23cf6880c917753~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=68137&refresh_token=0e27a579a43a0341527cae62680688ef&x-expires=1728486000&x-signature=B%2BGkVDA4MYff2uFuVoIKW0qFsDM%3D&shp=a5d48078&shcp=81f88b70" alt="Khanh" />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}
export default AccountItem;