import React from 'react';
import s from './Post.module.css';
const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://refstatic.sk/article/6a8936bc3ce37c84a9fe.jpg?is=1200x2000&s=a770a875269f79fb21156704f0cdcc3cb8282ea850d0c9529dfe760ecd947d00' />
            1 post
            <div>
                <span>like</span>
            </div>
        </div>

    )
}
export default Post;
