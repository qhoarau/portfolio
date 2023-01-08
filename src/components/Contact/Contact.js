import React from "react";
import Button from "../Button/Button";
import "./Contact.css";

export default function Contact({ className, isVisible }) {
    return (
        <div

            className=
            {isVisible
                ? "contact__main-container animation_fromBottom_1 " + className
                : "contact__main-container " + className
            }
            id="Contact">

            <div className="contact__header text-colored-small">
                0.4 What's next ?
            </div>
            <div className="contact__title text-white-big">Get In Touch</div>
            <div className="contact__content text-gray-small">
                I'm currently looking for new opportunities ! My inbox is open. Whether
                you have a question or an opportunity, I’ll try my best to get back
                to you!
            </div>
            <Button title={"Contact me"} link={"mailto:qhoaraupro@gmail.com"} />
        </div>
    );
}
