import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.js";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import createStore from './store'
import connect from '@vkontakte/vkui-connect-promise';



connect.send("VKWebAppGetAuthToken", {"app_id": 7075234, "scope": "friends,photos"})
    .then(data => {
    window.access_token = data.data.access_token;
})
.then(() => {
    const store = createStore();

ReactDOM.render(
<BrowserRouter>
<Provider store={store}>
    < App/>
    </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();
})
.catch(error => console.log(error));