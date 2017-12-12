import React, { Component } from 'react'

import { Container } from '../layout/Container.jsx'
import { Searchbar } from '../searchbar/Searchbar.jsx'
import { Sidebar } from '../sidebar/Sidebar.jsx'
import { Results } from '../results/Results.jsx'

import './App.css'

class App extends Component {

    render() {
        return (
            <div
                className="alg-App alg-OpenSans flex-display flex-align-center flex-justify-center"
            >
                <Container className="flex-display flex-column">
                    <Searchbar />
                    <div className="alg-App-content flex-display flex-grow">
                        <Sidebar />
                        <Results className="flex-grow" />
                    </div>
                </Container>
            </div>
        )
    }
}

export default App
