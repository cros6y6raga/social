import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt="content"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};