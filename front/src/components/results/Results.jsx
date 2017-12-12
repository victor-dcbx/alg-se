// @flow

import classnames from 'classnames'
import React from 'react'

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
            <div
                className={classnames('alg-Results', className)}
                ref={(ref) => this.domRef = ref}
            >
                {hits && hits.map((hit) =>
                    <div
                        key={hit.objectID}
                    >
                        {hit.name}
                    </div>
                )}
            </div>
        )
    }
}
