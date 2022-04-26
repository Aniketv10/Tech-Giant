import './Style.css';
import React from 'react';

const Content = () =>{
    return(
        <>
            <div className='content'>
                <h1 className='h1'>Inventory<br></br><span>ManageMent</span><br></br>WebSite&Design</h1>
                <p className='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Explicabo et dicta cumque doloribus fuga<br></br> reprehenderit in voluptatum ea corporis error quod tempore blanditiis totam,<br></br> quos delectus nemo aspernatur sequi consequuntur.</p>
                <button className='cn'><a href="#">Join Us</a></button>
            </div>
            <div class="form">
                <h2>Log In</h2>
                <input type="email" placeholder="Enter Email" name="email" />
                <input type="password" placeholder="Enter Password" name=""/>
                <button class="btnnn"><a href="#">Log In</a></button>

                <p class="link">Don't have an account<br></br>
                <a href="#">Sign up</a> here</p>
            </div>
        </>
    );
};


export default Content;