import Header from "../component/Header";
import Sidebar from "./Sidebar";
import Styles from './DefaultLayout.module.scss'
import classNames from "classnames/bind";


let cx = classNames.bind(Styles)
const DefaultLayout = ( { children } ) => {
    return(
        <>
            <div className={cx('wrapper')}>
                <Header/>
                <div className={cx('container')}>
                    <Sidebar/>
                    <div className={cx('content')}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
export default DefaultLayout