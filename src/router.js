import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import Services from './Services/Services';
import Contact from './Contact/Contact';

export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />

        {/* <Route path='/roster' render={() => {
            return (
                <Roster>
                    <Switch>
                        <Route path='/roster/teama' component={TeamA} />
                        <Route path='/roster/teamB' component={TeamB} />                        
                    </Switch>
                </Roster>
            )
        }}>
        </Route>
        <Route path='/schedule' component={Schedule}></Route> */}
    </Switch>
);