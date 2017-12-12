// @flow

import classnames from 'classnames'
import React from 'react'

import './Searchbar.css'

type Props = {
    className?: string,
}

export class Searchbar extends React.Component<void, Props, void> {

    props: Props

    render() {
        const {
            className,
        } = this.props

        return (
            <div className={classnames('alg-Searchbar flex-display flex-align-center', className)}>
                <input
                    className="alg-Searchbar-input"
                    onChange={e => window.helper.setQuery(e.target.value).search()}
                    placeholder="Search for Restaurants by Name, Cuisine, Location"
                />
            </div>
        )
    }
}
