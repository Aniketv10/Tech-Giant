import React from 'react';
import Main from '../HomePage/Main';
import Content from '../HomePage/Content';
import './Style.css';


const Home = () => {
    return(
        <div class="navbar">
            <Main/>
            <Content/>
        </div>
    );
};

export default Home;
