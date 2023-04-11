import React from "react";
import { useEffect, useState, useRef } from "react";
import { Row } from "../Row/Row";

export interface AniLineProps {
    rowCount: number;
    columnCount: number;
}

const AniLines = (props: AniLineProps) => {
    const [mouseInside, setMouseInside] = useState(false);
    let angle: number = 0;
    let x: any;

    const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

    const rows = [];
    for(let i=0;i<props.rowCount;i++){
        rows.push(<Row columnCount={props.rowCount}/>)
    }

    useEffect(() => {
        animateLines();
    }, [mouseInside]);

    const mouseFollow = (e:any) => {
        if (x != null || x != undefined) {
            clearInterval(x);
        }
        setMouseInside(true);
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

    const mouseLeft = () => {
        setMouseInside(false);
    };

    const animateLines = () => {
        x = setInterval(() => theActualAnimation(), 100);
    };

    const theActualAnimation = () => {
        if (mouseInside) {
            return;
        }
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
            className="App"
            id="maindiv"
        >{rows}</div>
    );
}

export default AniLines;