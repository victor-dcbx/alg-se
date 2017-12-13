// @flow

import classnames from 'classnames'
import React from 'react'
import Infinite from 'react-infinite'

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
        hits: []
    }

    componentDidMount() {
        const { helper } = window
        helper.on('result', this.handleResult)
    }

    handleResult = (res) => {
        const { hits } = this.state

        if (this.infinite) {
            this.infinite.scrollTop = 0
        }
        this.setState({
            hits: res.hits
        })
    }

    handleSearchOnce = (err, res) => {
        const { hits } = this.state

        this.setState({
            hits: [...hits, ...res.hits]
        })
    }

    handleInfiniteLoad = () => {
        const { helper } = window

        helper.nextPage().searchOnce({}, this.handleSearchOnce)
    }

    render() {
        const {
            className,
        } = this.props

        const { hits } = this.state

        return (
            <div className={classnames('alg-Results flex-display flex-column', className)}>
                <Infinite
                    containerHeight={400}
                    elementHeight={100}
                    infiniteLoadBeginEdgeOffset={150}
                    onInfiniteLoad={this.handleInfiniteLoad}
                    ref={(infinite) => {
                        if (infinite) {
                            this.infinite = infinite.scrollable
                        }
                    }}
                >
                    {hits.length && hits.map((hit) =>
                        <Result
                            hit={hit}
                            key={hit.objectID}
                        />
                    )}
                </Infinite>
            </div>
        )
    }
}
