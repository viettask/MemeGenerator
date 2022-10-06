import logo from './logo.svg';
import './App.css';
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

/**
 * Challenge: Build the Header component
 */
export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}

//export default App;
