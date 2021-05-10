import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
let Header = () => {
    return (
        <header>
            <div className={css.headerContent}>
                <a href="/" className={css.logo}>userControll</a>
                <div className={css.flexWrapper}></div>
                <ul className={css.headerNavigation}>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/user/1">Posts</NavLink></li>
                    <li><NavLink to="/create">Create new</NavLink></li>
                </ul>
            </div>   
        </header>
    );
}

export default Header;