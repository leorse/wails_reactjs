import { useState } from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { Greet, ListeType } from "../wailsjs/go/main/App";
import { main } from "../wailsjs/go/models";

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    let newMonType = new main.MonType();
    newMonType.MaChaine = "aze";
    newMonType.MaVal = 12;
    let arrayType: main.MonType[] = [];
    const [number, setNumber] = useState(arrayType)
    const [name, setName] = useState(newMonType);

    const setMonTypeName = (value: string) => {
        name.MaChaine = value;
        setName(name)
    }

    const updateName = (e: any) => setMonTypeName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    const updateListe = (result: main.MonType[]) => {
        result.map(
            (elmt, idx) => {
                number[idx] = elmt;
            }
        )
        setNumber(number)
    }
    const updateNumber = (result: main.MonType[]) => updateListe(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    function liste() {
        ListeType().then(updateNumber);
        console.log("listé")
    }

    function CompoListeType() {
        return number.map(
            (elemt:main.MonType, idx) => {
                return (
                    <p key={idx}>{elemt.MaChaine} - {elemt.MaVal}</p>
                )
            }
        )
    }

    return (
        <div id="App">
            <img src={logo} id="logo" alt="logo" />
            <div id="result" className="result">{resultText}</div>
            <div id="input" className="input-box">
                <input id="name" className="input" onChange={updateName} autoComplete="off" name="input" type="text" />
                <button className="btn" onClick={greet}>Greet</button>
            </div>
            <div className="input-box">
                <button className="btn" onClick={liste}>Liste</button>
            </div>
        </div>
    )
}

export default App
