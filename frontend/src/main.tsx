import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import ph75 from './assets/images/75.png'
//import App from './App'
import MyCompo from './myCompo'

interface IState {
    title: string;
}

class Card extends React.Component {
    render() {
        return (
            <div className='github-profile'>
                <img src={ph75} />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }
}

class App extends React.Component<IState> {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card />
            </div>
        );
    }
}

ReactDOM.render(
    <App title="From github" />,
    document.getElementById('root')
);
