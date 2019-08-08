import {connect} from 'react-redux'
import HeaderMain from '../components/Header/HeaderFriends'
import {getInfo, getFriendsInfo} from '../actions/usersInfo'


const mapStateToProps = ({userInfo}) => ({
    fio: userInfo.fio,
    myPhoto: userInfo.myPhoto
});

const mapDispatchToProps = dispatch => ({
    getInfo: () => dispatch(getInfo()),
    getFriendsInfo: () => dispatch(getFriendsInfo()),
});

export default connect(mapStateToProps,mapDispatchToProps)(HeaderMain)