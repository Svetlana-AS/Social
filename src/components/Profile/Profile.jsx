import React from 'react';
import MyPosts from './Myposts/MyPosts';
import s from './Profile.module.css';
const Profile = () => {
    return <div className={s.content}>
        < div >
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </div >
        <div>
            <img src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' />
        </div>
        <MyPosts />

    </div >
}
export default Profile;
