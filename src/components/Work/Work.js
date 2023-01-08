import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import BuildUI from "./BuildUI/BuildUI";
import Link from "../Link/Link";
import "./Work.css";

const chapMainContent = (
    <div>
        Chap is a content creation and consumption platform featuring <Link title={"Admob ads"} link={"https://admob.google.com/"} />,
        <Link title={"Push Notifications"} link={"https://docs.expo.dev/push-notifications/overview/"} /> , real time chat, <Link title={"Algolia search"} link={"https://www.algolia.com/"} />, exclusive content for
        subscriber only
    </div>
);

const chapFooterList = [
    "Push-notifications",
    "Admob",
    "Algolia",
    "Chat",
    "In-app-purchase",
];

const iziUpMainContent = (
    <div>
        IziUp is a delivery and products management platform used by restaurants. There are a <Link title={"Administrator app"} link={"https://app.iziup.fr"} /> and a <Link title={"Client app"} link={"https://shop.iziup.fr/happyburger"} />.
    </div>
);

const iziUpFooterList = [
    "QR-code",
    "Role-Management",
    "Maps-API",
    "Strip-connect",
];
export default function Work({ className, isVisible }) {
    return (
        <div
            className={
                isVisible
                    ? "work-section__main-container animation_fromBottom_1 " + className
                    : "work-section__main-container " + className
            }
            id="Work"
        >
            {isVisible ? (
                <>
                    <SectionHeader number={"3"} title={"Some Things I've Built"} />
                    <BuildUI
                        title={"Chap"}
                        mainContent={chapMainContent}
                        footerList={chapFooterList}
                    />
                    <BuildUI
                        title={"IziUp"}
                        mainContent={iziUpMainContent}
                        footerList={iziUpFooterList}
                        reverse
                    />
                </>
            ) : null}
        </div>
    );
}
