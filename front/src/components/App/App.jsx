import React, { Component } from 'react'
import { Container } from '../layout/Container.jsx'
import { Searchbar } from '../searchbar/Searchbar.jsx'

import './App.css'

class App extends Component {

    render() {
        return (
            <div className="alg-App alg-OpenSans flex-display flex-align-center flex-justify-center">
                <Container>
                    <Searchbar />
                </Container>
            </div>
        )
    }
}

export default App
