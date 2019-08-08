import React from 'react'
import FriendsHeader from "../../containers/FriendsHeader"
import FriendsListNew from "../../containers/FriendList"
import FriendsSearch from '../../containers/FriendsSearch'


class FriendsPage extends React.Component {
    render() {
        return (
            <div>
                < FriendsHeader />
                < FriendsSearch placeholder="Начните вводить имя друга" title="Мои друзья"
                                emoji="em em-stuck_out_tongue_winking_eye" name="friends"/>
                < FriendsListNew/>

            </div>
        );
    }
}

export default FriendsPage