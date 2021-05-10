import React from 'react'
import css from './Error.module.css'
let Error404 = () => {
    return (
        <div className={css.errorPage}>
            <h1 className={css.errorTitle}>404 - Not Found</h1>
            <hr/>
            <p>Страница не найдена</p>
        </div>
    )
}

export default Error404;