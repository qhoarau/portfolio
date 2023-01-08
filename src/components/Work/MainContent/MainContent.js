import React from 'react';
import "./MainContent.css"

export default function MainContent({ content }) {
    return (
        <div className='main-content__main-container'>
            <div className='text-gray-small'>{
                content}</div></div>
    )
}
