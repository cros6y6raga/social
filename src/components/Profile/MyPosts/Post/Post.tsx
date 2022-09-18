import React from 'react';
import s from './Post.module.css';
type PostMessageType = {
    message:string
    likesCount: string
}
export const Post = (props:PostMessageType) => {
    return (
        <div className={s.item}>
            <img src="https://m.media-amazon.com/images/I/81uf9K-e4BL._AC_SX466_.jpg" alt=""/>
            {props.message}
            <div>
            <span>{props.likesCount}</span>
            </div>
        </div>
    );
};