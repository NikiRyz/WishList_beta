import React from 'react'
import Frienditem from "./Frienditem"
import cls from './FriendsListNew.module.scss'
import PropTypes from 'prop-types'
import Load from '../../MyWishList/LoadingWishList/LoadingWishList'


class FriendsListNew extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        getFriends: PropTypes.func.isRequired
    };

    renderTemplate = () => {
        const {isLoading, friends, getFriends, error, searchQuery, searchFriendsByQuery, friendsSearch} = this.props;


        if (!searchQuery) {

            if (isLoading) {
                return <Load className={cls.load}/>
            }

            if (error) {
                return <h1 className={cls.load}>Ошибка при загрузки данных</h1>
            }

            if (!friends) {
                getFriends();
                return <h1 className={cls.load}>Ошибка загрузки данных</h1>
            } else if (friends.length === 0) {
                return <h1 className={cls.load}>Кажется у тебя нет друзей :(</h1>
            } else {
                return friends.map(friend => < Frienditem key={friend.id} {...friend} />)
            }

        } else {

            searchFriendsByQuery(searchQuery);

            if (!friendsSearch) {
                return <h1 className={cls.load}>Ошибка загрузки данных</h1>
            } else {
                return friendsSearch.map(friend => < Frienditem key={friend.id} {...friend} />)
            }
        }
    };

    render() {
        return (
            <div className={cls.friendslist}>
                <div className={cls.friendslist_container}>
                    {this.renderTemplate()}
                </div>
            </div>
        );
    }
}

export default FriendsListNew