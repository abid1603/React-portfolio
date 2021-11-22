import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PageNotFound from '../PageNotFound/PageNotFound';
import './Navbar.css';

const Navbar = () => {
    const [active, setActive] = useState('')

    useEffect(()=>{
        let currentURL = window.location.href
        console.log(currentURL);
        if(currentURL.endsWith('/')){
            setActive('About')
        }else if(currentURL.endsWith('/Resume')){
            setActive('Resume')
        }else if(currentURL.endsWith('/Projects')){
            setActive('Projects')
        }else{
            
        }
    },[active])

    return (
        <div className='navbar'>
            <div className="navbar_active">
                {active}
            </div>
            <div className="navbar_items d-flex">
                {active !== 'About' &&
                    <Link className='links' to='/'> 
                        <div className="navbar_item mx-2" onClick={()=>setActive('About')}>About</div> 
                    </Link>
                }
                {active !== 'Resume' ? <Link className='links' to='/Resume'><div className="navbar_item mx-2" onClick={()=>setActive('Resume')}>Resume</div></Link>
                    : null
                }
                {active !== 'Projects' && 
                    <Link className='links' to='/Projects'>
                        <div className="navbar_item mx-2" onClick={()=>setActive('Projects')}>Projects</div>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;