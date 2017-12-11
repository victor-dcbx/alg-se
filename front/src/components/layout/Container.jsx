// @flow

import classnames from 'classnames'
import React from 'react'

import './Container.css'

type Props = {
    className?: string,
}

export class Container extends React.Component<void, Props, void> {

    props: Props

    render() {
        const {
            className,
            ...other,
        } = this.props

        return (
            <div {...other}
                className={classnames('alg-Container', className)}
            />
        )
    }
}
