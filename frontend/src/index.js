import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DellReact from "./DellReact";
import SkyReact from "./SkyReact";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DellReact/>
        {/*<SkyReact/>*/}
    </React.StrictMode>
);
