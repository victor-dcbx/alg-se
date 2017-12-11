// @flow

import classnames from 'classnames'
import React from 'react'

import './{{name}}.css'

type Props = {
    className?: string,
}

export class {{name}}{{#if Impl}}Impl{{/if}} extends React.Component<void, Props, void> {

    props: Props

    render() {
        const {
            className,
        } = this.props

        return (
            <div className={classnames('alg-{{name}}', className)}>
                // Money making code goes here
            </div>
        )
    }
}
