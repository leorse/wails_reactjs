import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.css'
import ph75 from './assets/images/75.png'
//import App from './App'
import MyCompo from './myCompo'

interface infoCardz {
    name: string,
    avatar_url: string,
    company: string
}

const testData: infoCardz[] = [
    { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook10" },
    { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
    { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];


const CardList = (props: any) => (
    <div>

        {props.profile.map((profile: infoCardz) => { return (<Card key={profile.id} {...profile} />) })}
    </div>
);

class Card extends React.Component<infoCardz> {
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


class Form extends React.Component {
    state = {userName:''};
    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const resp  =await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data)
        this.setState({userName:''});
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.userName} onChange={event=>this.setState({userName:event.target.value})} placeholder="Github username"  required />
                <button>Add card</button>
            </form>
        )
    }
}

interface IState {
    title: string;
}

class App extends React.Component<IState> {
    state = {
        profiles: []
    }

    addNewProfile = (profileData:any) => {
        this.setState(prevState => ({profiles:[...prevState.profiles, profileData]}));
    }
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.addNewProfile}/>
                <CardList profile={this.state.profiles} />
            </div>
        );
    }
}

ReactDOM.render(
    <App title="From github pouet" />,
    document.getElementById('root')
);
