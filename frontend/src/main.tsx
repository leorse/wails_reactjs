import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import MyCompo from './myCompo'


function Button(props:any) {
    

    const handleClick = () => {
        props.onClickFunction( props.increment)
    }

    return <button onClick={handleClick}> +{props.increment}</button>;
}

function Display(props:any) {
    return (<div>{props.message}</div>)
}

function SmallApp() {
    const [counter, setCounter] = useState(42);
    const incrementCounter = (inc:number) => {
        setCounter(counter + inc)
    }
    return (<div>
        <App />
        <MyCompo />
        <Button onClickFunction={incrementCounter} increment={1}/>
        <Button onClickFunction={incrementCounter} increment={5}/>
        <Button onClickFunction={incrementCounter} increment={10}/>
        <Button onClickFunction={incrementCounter} increment={100}/>

        <Display message={counter}/>
    </div>);
}

ReactDOM.render(
    <React.StrictMode>
        <SmallApp />
    </React.StrictMode>,
    document.getElementById('root')
)
