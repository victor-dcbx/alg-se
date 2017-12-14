import React, { Component } from 'react'

import { Container } from '../layout/Container.jsx'
import { Searchbar } from '../searchbar/Searchbar.jsx'
import { Sidebar } from '../sidebar/Sidebar.jsx'
import { Results } from '../results/Results.jsx'

import './App.css'

class App extends Component {

    componentWillMount() {
        const { helper } = window

        // Guess location via IP by default
        helper
            .setQueryParameter('aroundLatLngViaIP', true)

        navigator.geolocation.getCurrentPosition((res) => {
            const { latitude, longitude } = res.coords

            // Use browser location instead if provided
            helper
                .setQueryParameter('aroundLatLngViaIP', false)
                .setQueryParameter('aroundLatLng', `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`)
        })
    }

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
