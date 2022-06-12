import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import ph75 from './assets/images/75.png'
//import App from './App'
import MyCompo from './myCompo'

interface infoCarz {
    name: string,
    avatar_url: string,
    company:string
}

const testData:infoCarz[] = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook0" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];


const CardList = (props: any) => (
    <div>
        <Card {...testData[0]}/>
        <Card {...testData[1]}/>
        <Card {...testData[2]}/>
    </div>
);

class Card extends React.Component<infoCarz> {
    render() {
        const profile = this.props;
        return (
            <div className='github-profile' style={{ margin: '1rem' }}>
                <img src={profile.avatar_url} />
                <div className="info" style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}

interface IState {
    title: string;
}

class App extends React.Component<IState> {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <CardList />
            </div>
        );
    }
}

ReactDOM.render(
    <App title="From github pouet" />,
    document.getElementById('root')
);
