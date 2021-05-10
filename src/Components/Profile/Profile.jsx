import { useState } from 'react'
import Posts from '../Posts/Posts';
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