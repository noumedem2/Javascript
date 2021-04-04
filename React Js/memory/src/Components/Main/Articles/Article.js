import React from 'react';
import Mycars from "./Mycars";

class Article extends React.Component {
    state = {
        title: 'Mon catalogue de Voiture'
    }
    changeTitle = (e) => {
        this.setState({
            title: 'Titre modifier'
        })
    }
    changeTitleViaParam = (title) => {
        this.setState({
            title: title
        })
    }
    changeViaBind = (param) => {
        this.setState({
            title: param
        })
    }
    changeTitleInput = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    //  Lorsqu'on a besoin de l'evenement le props qu'on envoi est de la forme this.function
    //  Pour un parametre on mets () => this.function(parametre)
    //  Ou utiliser la methode Bind this.function.bind(this,parametre)
    
    render() {
        return (
            <article>
                <Mycars title={this.state.title} ></Mycars>
                <button onClick={this.changeTitle} > Change title </button>
                <button onClick={this.changeTitleViaParam.bind(this, 'noumedem')}>Change via param </button>
                <button onClick={() => this.changeViaBind('Titre via le Bind')}> Via Bind </button>
                <input type="text" onChange={this.changeTitleInput} value={this.state.title}></input>
            </article>
        )
    }
}

export default Article;