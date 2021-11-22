import React from 'react';
import Mainbar from '../Mainbar/Mainbar';
import Sidbar from '../Sidbar/Sidbar';

import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3 mb-3">
                    <div className="sidebar bg-white rounded">
                        <Sidbar></Sidbar>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-9">
                    <div className="mainbar bg-white rounded">
                    <Mainbar></Mainbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;