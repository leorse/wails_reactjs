import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {data} from "./SpeakerData"
import MyCompo from "./myCompo"

import './style.css'

function App (props:any) {
    return(<div>
        {data[0].company}
        Coucou {props.title}
    </div>)
}


ReactDOM.render(
    <MyCompo  />,
    document.getElementById('root')
);
