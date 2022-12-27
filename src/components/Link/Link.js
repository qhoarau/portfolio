import React from 'react'
import "./Link.css";

export default function Link({ title, link, isBig }) {
    return (
        <a className={isBig ? "link-item text-colored-xmedium" : "link-item text-colored-small"} href={link}>{title}</a>
    )
}
