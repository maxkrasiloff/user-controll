import React from 'react';
import css from '../Home.module.css'
import eyeIcon from '../../../Assets/Home/eye.svg'
import editIcon from '../../../Assets/Home/edit.svg'
import Cart from './Cart';
const CartsBlock = (props) => {
    return (
        <div className={css.cartsBlock}>  
            {props.carts.map((el)=> (
                <Cart key={el.id} {...el}/>
            ))}  
        </div>
            
    )
}

export default CartsBlock;