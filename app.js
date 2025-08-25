import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

import Content from "./components/content";

function App() {
    return (
        <>
            <h2>Profiles</h2>
                <Content  />
            
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)


 