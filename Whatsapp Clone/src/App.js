import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component{

    componentWillMount(){
        let config = {
            apiKey: "AIzaSyDIJPodQFS0JbvmhfXPuDOb3oEMAHaehj8",
            authDomain: "whatsapp-clone-b1384.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-b1384.firebaseio.com",
            projectId: "whatsapp-clone-b1384",
            storageBucket: "whatsapp-clone-b1384.appspot.com",
            messagingSenderId: "49076831610"
        };
        firebase.initializeApp(config);
    }

    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
};

export default App;