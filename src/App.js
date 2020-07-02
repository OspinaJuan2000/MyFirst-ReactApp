import React, { Component } from 'react';
import { Header } from './Components/Header.js';
import { Paragraph } from './Components/Paragraph.js';
import './App.css';


class App extends Component {

  state = {
    text: 'Bienvenido Juan Ospina'
  }

  cambiarTextoState = () => {
    this.setState({ text: 'Hola Mundo' });
  }

  manejaClick = (elemento) => {
    console.log(`${elemento} ha sido clickeado`);
  }

  render() {

    const { text } = this.state;
    const { name } = this.props;
    return (
      <div className="App">
        <Header name={name} manejaClick={this.manejaClick} />
        <Paragraph onClick={this.cambiarTextoState}>
          {text}
        </Paragraph>
      </div >
    );
  }
}
export default App;
