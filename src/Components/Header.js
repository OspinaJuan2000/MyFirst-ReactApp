import React, { Component } from 'react';
import logo from '../logo.svg';

/* Style
    
*/

const styles = {
    paragraph: (backgroundColor) => ({
        backgroundColor,
        textAlign: 'center',
        fontSize: '2.5rem'
    })
}

class Header extends Component {

    state = {
        backgroundColor: '#e2e2e2',
    }

    manejaClick = () => {
        const { manejaClick, name } = this.props;
        manejaClick(name);
    }

    manejaEstado = () => {
        this.setState({ backgroundColor: '#5A60F3' });
    }

    render() {
        const { backgroundColor } = this.state;
        const react = 'https://es.reactjs.org/';

        return (
            <header className="App-header">
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Bienvenido a React</h1>
                <a href={react} className="App-link" target="blank">Aprende React</a>
                <p style={styles.paragraph(backgroundColor)} onClick={this.manejaEstado}>Este mensaje viene desde una props: {this.props.name}</p>
            </header>
        )
    }
}

export {
    Header
}