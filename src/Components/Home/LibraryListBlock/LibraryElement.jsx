import React from 'react';
import css from '../Home.module.css'
const Brand = (props) => {
    return (
        <a href={props.url} className={css.brandName}>{props.name}</a>
    )
}

export default Brand;