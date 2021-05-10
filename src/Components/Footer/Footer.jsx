import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={css.footerContent}>
                <div className={css.block}>
                    <div className={css.logo}>userControll</div>
                    <div className={css.description}>
                        Данный проект создан исключельно в демонстративных целях для портфолио, 
                        любая инфомрация на данном сайте не может являться истиной или чем-то иным кроме демонстрации 
                        навыков разработчика
                    </div>
                    <div className={css.copyright}>&copy; 2021</div>
                </div>
                <div className={css.block}>
                    <div className={css.linkBlock}>
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/user/1">Posts</NavLink>
                        <NavLink to="/user/1/edit">Edit User</NavLink>
                        <NavLink to="/create">Create New User</NavLink>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.blockTitle}>My Social Links</div>
                    <div className={css.linkBlock}>
                        <a href="https://github.com/maxkrasiloff" rel="nofollow">github</a>
                        <a href="https://vk.com/max_krasiloff" rel="nofollow">vk.com</a>
                        <a href="https://www.instagram.com/max_krasiloff/" rel="nofollow">instagram</a>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.blockTitle}>Technologies used</div>
                    <div className={css.linkBlock}>
                        <a href="https://ru.reactjs.org/" rel="nofollow">React</a>
                        <a href="https://redux.js.org/" rel="nofollow">Redux</a>
                        <a href="https://ru.reactjs.org/docs/introducing-jsx.html" rel="nofollow">JSX</a>
                        <a href="https://jsonplaceholder.typicode.com/" rel="nofollow">Backend API - typicode</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;