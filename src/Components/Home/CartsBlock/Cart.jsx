import React from 'react';
import css from '../Home.module.css'
const Cart = (props) => {
    return (
        <div className={css.cart}>
            <div className={css.cartIcon}>
                <img src={props.icon} alt=""/>
            </div>
            <div className={css.cartTitle}>{props.title}</div>
            <div className={css.cartDescription}>{props.description}</div>
            <div><a className={css.cartButton} href={props.url} rel="noreferrer" target="_blank">{props.button_text}</a></div>
        </div>
    )
}

export default Cart;