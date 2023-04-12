import React from "react";
import { useEffect, useState, useRef } from "react";
import { Row } from "../Row/Row";

export interface AniLineProps {
    rowCount: number;
    columnCount: number;
    enableIdleAnimation: boolean;
    style: React.CSSProperties;
}

const AniLines = (props: AniLineProps) => {
    const [mouseInside, setMouseInside] = useState(false);
    let x: any;
    let angle: number = 0;

    // Row objects list
    const rows = [];
    for (let i = 0; i < props.rowCount; i++) {
        rows.push(<Row key={i} columnCount={props.rowCount} style={props.style} />)
    }

    // initiate the idle animation if enabled on start and on mouse position change if
    // the mouse is on the maindiv object
    useEffect(() => {
        if(!mouseInside)
            animateLines();
    }, [mouseInside]);

    // clear all set intervals from DOM when mouse leaves the maindiv
    const clearAllIntervals = () => {
        const max_interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);
        for (let i = 1; i <= max_interval_id; i++) {
            window.clearInterval(i);
        }
    }

    // logic to move the elements to point to the cursor
    const mouseFollow = (e: any) => {
        setMouseInside(true);
        clearAllIntervals();
        var lines = document.getElementsByClassName("line");
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i] as HTMLSpanElement;

            var x1: number = e.pageX;
            var y1: number = e.pageY;

            var x2: number = line.offsetLeft;
            var y2: number = line.offsetTop;

            let deltaX: number = x2 - x1;
            let deltaY: number = y2 - y1;
            let radians: number = Math.atan2(deltaY, deltaX);
            let degrees: number = (radians * 180) / Math.PI - 90; // rotate
            if (degrees > 360) {
                degrees -= 360;
            }
            if (degrees < 0) {
                degrees += 360;
            }
            if (degrees == 360) {
                degrees = 0;
            }

            line.style.transform = "rotate(" + degrees + "deg) ";
        }
    };

    // to resume the idel animation when the mouse leaves the maindiv object
    const mouseLeft = () => {
        setMouseInside(false);
        animateLines();
    };

    // set interval loop for the idle animation
    const animateLines = () => {
        if (props.enableIdleAnimation && typeof (x) === 'undefined') {
            x = setInterval(() => theActualAnimation(), 100);
        }
    };

    // logic to perform idle animation
    const theActualAnimation = () => {
        var lines = document.getElementsByClassName("line");
        var degrees: number = angle;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i] as HTMLSpanElement;

            if (angle > 360) {
                angle -= 360;
            }
            if (angle < 0) {
                angle += 360;
            }
            if (angle == 360) {
                angle = 0;
            }
            degrees += 5;
            if (degrees > 360) {
                degrees -= 360;
            }
            if (degrees < 0) {
                degrees += 360;
            }
            if (degrees == 360) {
                degrees = 0;
            }
            line.style.transform = "rotate(" + degrees + "deg) ";
        }
        angle += 5;
    };

    return (
        <div
            onMouseMove={mouseFollow}
            onMouseLeave={mouseLeft}
            className="anilines-main"
            id="maindiv"
        >{rows}</div>
    );
}

export default AniLines;