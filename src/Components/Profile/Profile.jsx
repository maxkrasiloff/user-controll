import { useState } from 'react'
import Posts from '../Posts/Posts';
import css from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
let Profile = ({profile,...props}) => {
    const [isInfoVisible, setInfoVisible] = useState(false);
    function toggleList() {
        setInfoVisible(!isInfoVisible);
    }
    return (
        <>
            <ProfileInfo profile={profile.info}/>
            <h2>Записи {profile.info.name}</h2>
            {profile.posts && <Posts posts={profile.posts}/>}
        </>
    )
}




export default Profile;