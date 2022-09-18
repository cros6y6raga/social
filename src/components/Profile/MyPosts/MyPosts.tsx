import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
               <Post message='Hi, how are you?' likesCount= 'like-15'/>
               <Post message='It my first post' likesCount= 'like-20'/>
            </div>
        </div>
    );
};