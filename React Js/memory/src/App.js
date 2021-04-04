import React, { Component } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Main from "./Components/Main/Main.js"

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Header></Header>
                <Main></Main>
                {/* <Footer></Footer> */}
            </div >
        )
    }
}

export default App;