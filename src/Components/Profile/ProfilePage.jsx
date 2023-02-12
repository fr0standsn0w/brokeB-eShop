import React, {useState} from 'react';
import s from './style.module.scss';
import Auth from "./Auth/Auth";
import Register from "./Register/Register";

const ProfilePage = () => {
    const [render, setRender] = useState({
        login: true,
        registration: false,
        forgot: false
    })
    console.log(render)
    return (
        <div className={s.profilePageContainer}>
            <div className={s.profilePageBody}>
                <div className={s.profileBody}>
                    {/*<Auth setRender={setRender}/>*/}
                    <Register/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
