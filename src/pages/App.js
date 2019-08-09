import React, { Component } from "react";
import Main from "./MyWishList/MyWishList";
import {Route, Redirect, Switch} from 'react-router-dom'
import FriendsPage from "./FriendsPage/FriendsPage";
import MyPage from "./MyPage/MyPage";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/main" component={Main}/>
                    <Route path="/me" component={MyPage}/>
                    <Route path="/friends" component={FriendsPage}/>
                    <Redirect to="/main"/>
                </Switch>
            </div>
        );
    }
}

export default App;