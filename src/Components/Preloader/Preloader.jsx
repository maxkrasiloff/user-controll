import css from './Preloader.module.css'
let Preloader = (props) => {
    return (
        <div className={css.preloader}>
            <span className={css.loadingName}>Loading</span>
            <span className={css.loadingPoint}>.</span>
            <span className={css.loadingPoint}>.</span>
            <span className={css.loadingPoint}>.</span>
        </div>
    )
}

export default Preloader;