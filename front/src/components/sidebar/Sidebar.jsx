// @flow

import classnames from 'classnames'
import React from 'react'

import './Sidebar.css'

type Props = {
    className?: string,
}

export class Sidebar extends React.Component<void, Props, void> {

    props: Props

    render() {
        const {
            className,
        } = this.props

        return (
            <div className={classnames('alg-Sidebar', className)}>
                // Money making code goes here
            </div>
        )
    }
}
