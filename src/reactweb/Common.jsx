import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../Images/rocket.jpg';

function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-10 max-auto">
                        <div className="row">
                       
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>{props.name} <strong className='brand-name'>KailasWagh</strong> </h1>
                            <h2 className="my-3">
                                We are talented developer team
                            </h2>
                            <div className="mt-3">
                                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} className="img-fuid animated" alt="imgpic"/>
                        </div>
                             
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Common;