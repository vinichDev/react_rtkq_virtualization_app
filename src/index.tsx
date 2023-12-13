import {createRoot} from "react-dom/client";
import React from "react";
import App from "app";

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
    <App/>
)