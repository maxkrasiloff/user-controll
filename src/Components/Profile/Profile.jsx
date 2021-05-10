import Posts from '../Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = ({profile,...props}) => {
    return (
        <>
            <ProfileInfo profile={profile.info}/>
            <h2>Записи {profile.info.name}</h2>
            {profile.posts && <Posts posts={profile.posts}/>}
        </>
    )
}

export default Profile;