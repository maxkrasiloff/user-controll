import React from 'react';
import css from '../Home.module.css'
    import LibraryElement from './LibraryElement';
const libraryListBlock = (props) => {
    return (
        <div className={css.brandsBlock}>
            {props.brands?.map((el,index)=> (
                <LibraryElement key={index} name={el.name} url={el.url}/>
            ))}  
        </div>
            
    )
}

export default libraryListBlock;