import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Route, Switch, Redirect} from "react-router-dom";
import About from '../About/About';
import Resume from '../Resume/Resume';
import Projects from '../Projects/Projects';


const Mainbar = () => {
    return (
        <section className='p-4'>
            <Navbar></Navbar>
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/Resume' component={Resume} />
                <Route path='/Projects' component={Projects} />
                <Route><Redirect to='/' /></Route>
            </Switch>

        </section>
    )
};

export default Mainbar;