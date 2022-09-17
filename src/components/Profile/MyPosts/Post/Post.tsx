import React from 'react';
import s from './Post.module.css';

export const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://m.media-amazon.com/images/I/81uf9K-e4BL._AC_SX466_.jpg" alt=""/>
            post 1
            <div>
            <span>like</span>
            </div>
        </div>
    );
};