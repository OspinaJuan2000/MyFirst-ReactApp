import React, { Component } from 'react';

/*Styles */

const stylesP = {
    pStyle: (backgroundColor, color) => ({
        backgroundColor,
        fontSize: '1rem',
        color,
        padding: '1rem'
    })
}

class Paragraph extends Component {


    state = {
        backgroundColor: 'red',
        color: 'white'
    }

    cambiarColor1 = () => {
        console.log(this);
        this.setState({ backgroundColor: '#ff0', color: 'black' })
    }

    render() {
        const { backgroundColor, color } = this.state;
        return (
            <p style={stylesP.pStyle(backgroundColor, color)} {...this.props} onClick={this.cambiarColor1} />
        );
    }
}

export {
    Paragraph
}