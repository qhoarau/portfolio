import React from 'react'

export default function BuildUI({ backgroundImg, title, mainContent, footerList, left }) {
    return (
        <div className='build-ui__main-container'>
            <div className='build-ui__overlay-container'>
                <div className='text-colored-small'>Featured projects</div>
                <div className='text-white-xmedium'>{title}</div>
                {mainContent}
                <div className='build-ui__footer-container'>
                    {footerList.map((footer) => {
                        return (<div className='text-gray-small'>{footer}</div>)
                    })}
                </div>
            </div>
            <div className='build-ui__background-container'>

            </div>
        </div>
    )
}
