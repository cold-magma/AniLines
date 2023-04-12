import React from "react";

export interface RowProps {
    columnCount: number;
}

export const Row = (props: RowProps) => {
    var items: Array<any> = [];

    for (let i = 0; i < props.columnCount; i++) {
        items.push(<span key={i} className="line"></span>);
    }

    return (
        <div className="row">
            {items}
        </div>
    );
}