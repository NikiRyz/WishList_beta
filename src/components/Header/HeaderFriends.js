import React from 'react'
import propTypes from 'prop-types'
import cls from './Main.module.scss'
import {Link} from "react-router-dom";

class HeaderFriends extends React.Component {
    static propTypes = {
        fio: propTypes.string.isRequired,
        myPhoto: propTypes.string.isRequired
    };

    render() {

        const {fio, myPhoto, getInfo,getFriendsInfo} = this.props;

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
                        <Link to="/main" className={cls.nickname}>
                            Cписoк желаний
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default HeaderFriends;