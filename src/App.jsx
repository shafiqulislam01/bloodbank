import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Sign from './Sign'
import SignUp from './SignUp'
import Donor from './Donor'
import BloodRst from './BloodRst'
import RequestB from './RequestB'
import ResetPass from './ResetPass'
import Footer from './Footer'
import Card from './Card'

const App = () => {
    return (
        <>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Sign} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/donor' component={Donor} />
                <Route exact path='/bloodrst' component={BloodRst} />
                <Route exact path='/requestb' component={RequestB} />
                <Route exact path='/resetpass' component={ResetPass} />
                <Route exact path='/card' component={Card} />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </>
    );
};

export default App;