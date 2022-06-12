import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './style.css'

function App (props:any) {
    return(<div>
        Coucou {props.title}
    </div>)
}


ReactDOM.render(
    <App title="From github pouet" />,
    document.getElementById('root')
);
