import React from "react";
import Container from "./container";

function Desktop(props) {
    return (
        <div
        style={{
            height: "calc(100vh - 20px)",
            width: "calc(100vw - 20px)",
            margin: 10
        }}
        >
            <Container/>
        </div>
    );
}

export default Desktop;