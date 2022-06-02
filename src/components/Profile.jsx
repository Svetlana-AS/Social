import React from 'react';
import s from './Profile.module.css';
const Profile = () => {
    return <div className={s.content}>
        < div >
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
        </div >
        <div>
            <img src='https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' />
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    1 post
                </div>
                <div className={s.item}>
                    2 post
                </div>
            </div>

        </div>
    </div >
}
export default Profile;
