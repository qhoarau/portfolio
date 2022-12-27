import React from 'react';
import Link from '../../Link/Link';
import "./WorkComponent.css";

export default function WorkComponent({ list, indexSelected, toggleNewIndex }) {
    return (
        <div className='work-component__main-container'>
            <div className='work-component__place-container'>
                {list.map((elem, index) => {
                    return (
                        <div key={index} className='work-component__place-item-container' onClick={() => toggleNewIndex(index)}>
                            <div className={indexSelected == index ?
                                'work-component__left-border--selected animation_borderFromTop'
                                : 'work-component__left-border--not-selected'}></div>
                            <div className={indexSelected == index ?
                                'work-component__place-item--selected'
                                : 'work-component__place-item--not-selected'}>
                                {elem.sectionTitle}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='work-component__details-container'>
                <div className='work-component__header text-white-xmedium'>
                    {list[indexSelected].post} <Link title={"@ " + list[indexSelected].company} link={"https://iziup.fr"} isBig={true}></Link>

                </div>
                <div className='work-component__timeline text-gray-small'>
                    {list[indexSelected].from} - {list[indexSelected].to}
                </div>

                <ul className="work-component__skills-list text-gray-small">

                    {list[indexSelected].tasks.map((task, index) => {
                        return (<li key={index}>{task}</li>)
                    })}
                </ul>
            </div>
        </div>
    )
}
