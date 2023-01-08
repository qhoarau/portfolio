import React from 'react';
import MainContent from '../MainContent/MainContent';
import "./BuildUI.css";

export default function BuildUI({ backgroundImg, title, mainContent, footerList, reverse }) {
    return (
        <div className={'build-ui__main-container'}>
            <div className={reverse ? 'build-ui__overlay-container--reverse' : 'build-ui__overlay-container'}>
                <div className='text-colored-small'>Featured projects</div>
                <div className='text-white-medium'>{title}</div>
                <MainContent content={mainContent} />
                <div className='build-ui__footer-container'>
                    {footerList.map((footer) => {
                        return (<div className='text-gray-small build-ui__footer-item'>{footer}</div>)
                    })}
                </div>
            </div>
            <div className={reverse ? 'build-ui__background-container--reverse' : 'build-ui__background-container'}>
                <div
                    className={title == "Chap" ? 'build-ui__background-item--chap'
                        : 'build-ui__background-item--iziup'}></div>
            </div>
        </div>
    )
}
