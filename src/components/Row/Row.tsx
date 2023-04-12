import React from "react";

export interface RowProps {
    columnCount: number;
    style: React.CSSProperties;
}

export const Row = (props: RowProps) => {
    var items: Array<any> = [];

    for (let i = 0; i < props.columnCount; i++) {
        items.push(<span key={i} className="line" style={props.style}></span>);
    }

    return (
        <div className="row">
            {items}
        </div>
    );
}