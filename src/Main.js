import React from 'react'
import Navbar from './Navbar';
import router from './router';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
// import {} from './styled-components/Root';

export default function Main() {
    return(
        <div>
            <Navbar/>
            {/* {router} */}
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>

        </div>
    )
}