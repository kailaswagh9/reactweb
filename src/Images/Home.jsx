import React from 'react';
import Common from './Common';
import web from './Images/rocket.jpg';
function Home(props) {
    return (
        <>
           <Common name="Grow you business with"  imgsrc={web} 
           visit="/service" btname="Get Started"/>
        </>
    );
}

export default Home;