import { useState } from 'react'
import css from '../Profile.module.css'
let ProfileInfo = ({profile,...props}) => {
    const [isInfoVisible, setInfoVisible] = useState(false);
    function toggleList() {
        setInfoVisible(!isInfoVisible);
    }
    return (
        <div className={css.profile}>
            <div className={css.name}>{profile.name}</div>
            <div className={css.username}>@{profile.username}</div>
            <ProfileInfoTable className={css.mainTable}>
                <h3>Contacts</h3>
                    <ProfileInfoString td1="e-mail" td2={profile.email}/>
                    <ProfileInfoString td1="phone" td2={
                        <a href={'tel:' + profile.phone}>{profile.phone}</a>
                    }/>
                    <ProfileInfoString td1="website" td2={
                        <a href={'//' + profile.website}>{profile.website}</a>
                    }/>
                <div style={{display: (isInfoVisible ? 'block' : 'none')}}>
                    <h3>Address</h3>
                    
                        <ProfileInfoString td1="city" td2={profile.address.city}/>
                        <ProfileInfoString td1="street" td2={profile.address.street}/>
                        <ProfileInfoString td1="suite" td2={profile.address.suite}/>
                        <ProfileInfoString td1="zipcode" td2={profile.address.zipcode}/>
                    <h3>Address: Geo</h3>
                        <ProfileInfoString td1="lat" td2={profile.address.geo.lat}/>
                        <ProfileInfoString td1="lng" td2={profile.address.geo.lng}/>
                    <h3>Company</h3>
                        <ProfileInfoString td1="name" td2={profile.company.name}/>
                        <ProfileInfoString td1="catchPhrase" td2={profile.company.catchPhrase}/>
                        <ProfileInfoString td1="bs" td2={profile.company.bs}/>                        
                </div>
                
            </ProfileInfoTable>
            <div className={css.toggleInfoButton} onClick={toggleList}>{isInfoVisible ? 'свернуть' : 'развернуть'}</div>
        </div>
    )
}


const ProfileInfoTable = (props) => {
    return (
        <div className={css.table + ' ' + props.className}>
            {props.children}
        </div>
    )
}

const ProfileInfoString = (props) => {
    return (
        <div className={css.tr}>
            <div className={css.td}>{props.td1}</div>
            <div className={css.td}>{props.td2}</div>
        </div>
    )
}

export default ProfileInfo;