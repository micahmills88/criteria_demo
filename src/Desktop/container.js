import React from "react";
import { Rnd } from "react-rnd";

function Container(props) {
    const [size, setSize] = React.useState({
        width: 400, height: 400
    })

    const [position, setPosition] = React.useState({
        x: 10, y: 10
    })

    const onResize = (e, direction, ref, delta, position) => {
        setSize({ 
            width: ref.offsetWidth, 
            height: ref.offsetHeight 
        });
        setPosition(position);
    };

    return (
        <Rnd
        size={size}
        position={position}
        onDragStop={(e, d) => setPosition(d)}
        onResizeStop={onResize}
        bounds="parent"
        dragHandleClassName="dragHandle"
        >
            <div
            className="box"
            style={{
                height: "100%",
                width: "100%",
                background: "#666"
            }}
            >
                <div
                className="dragHandle"
                style={{
                    width: "100%",
                    height: 25,
                    background: "#222",
                    cursor: "move"
                }}
                >handle</div>
            </div>
        </Rnd>
    );
}

export default Container;