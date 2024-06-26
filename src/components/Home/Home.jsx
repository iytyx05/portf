import React from 'react';
import Slides from "./Slides/Slides";
import Begin from "./Begin/Begin";
import Service from "./Service/Service";

const Home = () => {
    return (
        <>
            <Begin/>
            <Service/>
            <Slides/>
        </>
    );
};

export default Home;