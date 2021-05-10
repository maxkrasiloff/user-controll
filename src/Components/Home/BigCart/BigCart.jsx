import css from '../Home.module.css'
let BigCart = (props) => {
    return (
        <div className={css.block}>
            <div className={css.blockLeft}>
                <h2>{props.title}</h2>
                {props.content.map(el=>(<p>{el}</p>))}
            </div>
            <div className={css.blockRight}>
                <img src={props.icon}/>
                <a href="#" className={css.blockButton}>{props.button_text}</a>
            </div>
        </div>
    )
}

export default BigCart;