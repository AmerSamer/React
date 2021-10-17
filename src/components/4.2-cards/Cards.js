import React from "react";
import './style.css'

const Cards = ({img, title, description, link1, link2, link1href,link2href}) => {
    return (
        <div className="all">
            <div className='avatar'>
                <img alt="avatar" src={img} width="250px" height="250px" />
            </div>
            <div className="content">
                <div className='title'>
                    {title}
                </div>
                <div className="description">
                {description}
                </div>
                <a href={link1href} target="_blank" className='link1'>
                {link1}
                </a>
                <a href={link2href} target="_blank" className='link2'>
                {link2}
                </a>
            </div>
        </div>
    );
};


export default Cards;