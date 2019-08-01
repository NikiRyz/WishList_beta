import React, { Component } from "react";
import Main from "./Main/Main";
import {Route, Redirect, Switch} from 'react-router-dom'



class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/main" component={Main}/>
                    <Redirect to="/main"/>
                </Switch>
            </div>
        );
    }
}

export default App;