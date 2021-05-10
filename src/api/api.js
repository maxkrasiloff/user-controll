import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
/*     
    headers: {
        "API-KEY": "3124343434234234"
    } */
});

export const UsersAPI =  {
    getUsers(id = '') {
        return instance.get(
            'users/' + id
            ).then(
                responce => {
                    
                    return responce.data
                }
            )        
    },
    createUsers(formData) {
        return instance.post(
            'users/',formData
            ).then(
                responce => {
                    return responce.data
                }
            )        
    },
    udpateUsers(formData, userId) {
        formData.id = userId;
        return instance.put(
            'users/' + userId,formData
            ).then(
                responce => {
                    return responce.data
                }
            )        
    },
    getPosts(userId = '') {
        return instance.get(
            'users/' + userId + '/posts'
            ).then(
                responce => {
                    return responce.data
                }
            )        
    }

}