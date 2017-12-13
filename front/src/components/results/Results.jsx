// @flow

import classnames from 'classnames'
import React from 'react'

import { Result } from '../results/Result.jsx'

import './Results.css'

type Props = {
    className?: string,
}

type State = {
    hits: ?Object[],
}

export class Results extends React.Component<void, Props, State> {

    props: Props
    state: State = {
        hits: null
    }

    componentDidMount() {
        const { helper } = window
        helper.on('result', this.handleResult)
    }

    handleResult = (res) => {
        this.setState({
            hits: res.hits
        })
    }

    render() {
        const {
            className,
        } = this.props

        const { hits } = this.state

        return (
            <div className={classnames('alg-Results flex-display flex-column', className)}>
                {hits && hits.map((hit) =>
                    <Result
                        hit={hit}
                        key={hit.objectID}
                    />
                )}
            </div>
        )
    }
}
