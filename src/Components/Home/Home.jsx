import React from 'react';
import css from './Home.module.css'
import reactLogo from '../../Assets/Home/logo.svg'
import moneyIcon from '../../Assets/Home/money.svg'
import CartsBlock from './CartsBlock/CartsBlock';
import homePageContent from '../../StaticData/homePageContent'
import LibraryListBlock from './LibraryListBlock/LibraryListBlock';
import BigCart from './BigCart/BigCart';
const Home = () => {
    return (
        <>
            <h1>Добро пожаловать!</h1>
            <p>
                Данный сайт - демонстрациия моих навыков в работе с React и Redux. 
                В качестве backend API было использовано API <a href="https://jsonplaceholder.typicode.com/" target="_blank">typicode</a>.
            </p>
            <p>
                Исходный код данного проекта можно посмотреть на github.
            </p>
            <BigCart 
                title="userControll - ещё одно SPA на React"
                content={['SPA (Single Page Application - одностраничное приложение), использующий единственную HTML-страницу как точку входа и организующий взаимодействие с пользователем через динамически подгружаемые данные',
                    'Данный проект написан на React',
                    'В связке с React в данном SPA используется Redux - менеджер состояний (state management)',
                ]                
                }
                icon={reactLogo}
                button_text="Подробнее о React"
                url="https://ru.reactjs.org/"
            />
            <h2 className={css.bigH2}>Используемые технологии</h2>
            <p>Из основных, в данном продукте были использованы следующие дополнительные библиотеки:</p>
            <CartsBlock carts={homePageContent.carts}/>
            <h2 className={css.bigH2}>Остальные используемые библиотеки</h2>
            <LibraryListBlock brands={homePageContent.libraries}/>
        </>
    )
}

export default Home;