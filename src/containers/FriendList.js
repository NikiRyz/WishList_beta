import {connect} from 'react-redux'
import FriendsListNew from "../pages/FriendsPage/FriendsListNew/FriendsListNew";
import {getFriends} from "../actions/friends";
import {searchFriendsByQuery} from "../actions/friendsSearch";


const mapStateToProps = ({friends, friendsSearch}) => ({
    isLoading: friends.isLoading,
    friendsSearch: friendsSearch.items,
    friends: friends.friends,
    error: friends.error,
    searchQuery: friendsSearch.searchQuery
});

const mapDispatchToProps = dispatch => ({
    getFriends: () => dispatch(getFriends()),
    searchFriendsByQuery: (value) => dispatch(searchFriendsByQuery(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListNew)