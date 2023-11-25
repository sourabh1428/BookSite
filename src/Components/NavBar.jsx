import React from 'react';
import logo from '../assets/Standard Collection 11.svg'
import s1 from '../assets/bx_bx-book-heart.svg'
import './NavBar.css';
import s2 from '../assets/dassdsadsa/fluent_premium-person-20-regular.svg'
import s3 from '../assets/dassdsadsa/IMG20210528181544.svg'
import s4 from '../assets/dassdsadsa/ic_round-notifications-none.svg'
const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-left'>
                <img src={logo} alt="" />
                <h3 className='navl1'>KeazoN</h3>
                <h4 className='navl2'>BOOKS</h4>
            
            </div>
            <div className='nav-center'>
                <input type="text" placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' />
                <button>Search</button>

            </div>
            <div className='nav-right'>
            <img src={s1} alt="" />
            <img src={s3} alt="" />
            <img src={s2} alt="" />
            <img src={s4} alt="" />


            </div>

        </div>
    );
}

export default NavBar;
