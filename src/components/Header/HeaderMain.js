import React from 'react'
import propTypes from 'prop-types'
import cls from './Main.module.scss'
import {Link} from "react-router-dom";

class HeaderMain extends React.Component {
    static propTypes = {
        fio: propTypes.string.isRequired,
        myPhoto: propTypes.string.isRequired,
        friendOne: propTypes.string.isRequired,
        friendTwo: propTypes.string.isRequired,
        friendThree: propTypes.string.isRequired,
    };

    render() {

        const {fio, myPhoto, friendOne, friendTwo, friendThree,getInfo,getFriendsInfo} = this.props;

        getInfo();
        getFriendsInfo();

        return (
            <div className={cls.header}>
                <div className={cls.header_me}>
                    <img src={myPhoto} alt="my_avatar"/>
                    <div >
                        <Link to="/me" className={`${cls.nickname} ${cls.fio}`} >
                            {fio}
                        </Link>
                    </div>
                </div>
                <div className={cls.header_friends}>
                    <div >
                        <Link to="/friends" className={cls.nickname}>
                            Мои друзья
                        </Link>
                    </div>
                    <img className={`${cls.first_img} ${cls.header_friends_avatar}`} src={friendOne} alt="avatar"/>
                    <img className={`${cls.second_img} ${cls.header_friends_avatar}`} src={friendTwo} alt="avatar"/>
                    <img className={`${cls.third_img} ${cls.header_friends_avatar}`} src={friendThree} alt="avatar"/>
                </div>
            </div>
        )
    }
}

export default HeaderMain;