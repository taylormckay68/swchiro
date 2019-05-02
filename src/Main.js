import React from 'react'
import Navbar from './Navbar';
import router from './router';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home.js';
// import {} from './styled-components/Root';

export default function Main() {
    console.log('home: ', Home);
    return(
        <div>
            <Navbar/>
            {/* {router} */}
            <Switch>
                <Route exact path="/" render={() => {
                    return(
                        <div>home</div>
                    )
                }}/>
                <Route path="/services" render={() => {
                    return(
                        <div>services</div>
                    )
                }}/>
            </Switch>

        </div>
    )
}