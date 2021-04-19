import React from 'react';
import Common from './Common';
import web from '../Images/startup.jpg';
function About(props) {
    return (
        <>
           <Common name="Welcome to About Page"  imgsrc={web} 
           visit="/reactweb/contact" btname="Contact Now"/>
        </>
    );
}

export default About;