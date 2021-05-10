import restAPI from '../Assets/Home/rest-api.svg'
import reduxThunk from '../Assets/Home/redux-thunk.png'
import formik from '../Assets/Home/formik.png'
const homePageContent = {
    carts: [
        {
            id: 1,
            icon: restAPI,
            title: 'Axios',
            button_text: 'github',
            url: 'https://github.com/axios/axios',
            description: 'Для работы с запросами к удаленному серверу',
        },
        {
            id: 2,
            icon: reduxThunk,
            title: 'Redux-Thunk',
            button_text: 'github',
            url: 'https://github.com/reduxjs/redux-thunk',
            description: 'Создание асинхронных Redux экшенов, по умолчанию Redux этого не позволяет',
        },
        {
            id: 3,
            icon: formik,
            title: 'Formik',
            button_text: 'github',
            url: 'https://github.com/formium/formik',
            description: 'Для удобства работы с формами, чтобы не изобретать велосипед',
        },

    ],
    libraries: [
        {
            name: 'react-redux',
            url: 'https://github.com/reduxjs/react-redux'
        },   
    ]
}

export default homePageContent;