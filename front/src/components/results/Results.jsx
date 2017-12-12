// @flow

import classnames from 'classnames'
import React from 'react'

import './Results.css'

type Props = {
    className?: string,
}

export class Results extends React.Component<void, Props, void> {

    props: Props

    render() {
        const {
            className,
        } = this.props

        return (
            <div className={classnames('alg-Results', className)}>
                // Money making code goes here
            </div>
        )
    }
}
