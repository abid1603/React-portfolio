import React from 'react';
import Mainbar from '../Mainbar/Mainbar';
import Sidbar from '../Sidbar/Sidbar';

import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-3 col-md-4 mb-1 pt-1">
                    <div className="sidebar bg-white rounded">
                        <Sidbar />
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 mt-1 pb-1">
                    <div className="mainbar bg-white rounded">
                        <Mainbar />
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Portfolio;