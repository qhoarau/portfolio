import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Work.css";
export default function Work({ className, isVisible }) {
    return (
        <div
            className={
                isVisible
                    ? "work-section__main-container animation_fromBottom_1 " +
                    className
                    : "work-section__main-container " + className
            }
            id="Work"
        >
            {isVisible ? (
                <>
                    <SectionHeader number={"3"} title={"Some Things I've Built"} />
                </>
            ) : null}
        </div>
    );
}
