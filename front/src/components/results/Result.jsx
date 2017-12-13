// @flow

import classnames from 'classnames'
import React from 'react'

import './Result.css'

type Props = {
    className?: string,
    hit: Object,
}

export class Result extends React.Component<void, Props, State> {

    props: Props

    render() {
        const {
            className,
            hit,
        } = this.props

        const roundedStarsCount = Math.floor(hit.stars_count)
        const iterableStars = Array(roundedStarsCount).fill()
        const iterableEmptyStars = Array(5 - roundedStarsCount).fill()

        return (
            <div
                className={classnames('alg-Result flex-display', className)}
            >
                <img
                    className="alg-Result-img"
                    src={hit.image_url}
                />
                <div
                    className="alg-Result-rightBlock flex-display flex-column flex-grow"
                >
                    <div className="alg-Result-name">
                        {hit.name}
                    </div>
                    <div className="alg-Result-reviews flex-display flex-align-center">
                        <div className="alg-Result-starsCount">
                            {hit.stars_count}
                        </div>
                        <div className="alg-Result-stars flex-display">
                            {iterableStars.map((_, i) =>
                                <img
                                    className="alg-Result-star"
                                    key={i}
                                    src="https://i.imgur.com/rFG2nj4.png"
                                />
                            )}
                            {iterableEmptyStars.map((_, i) =>
                                <img
                                    className="alg-Result-star"
                                    key={i}
                                    src="https://i.imgur.com/Qv1Tyb4.png"
                                />
                            )}
                        </div>
                        <div className="alg-Result-reviewsCount">
                            {`(${hit.reviews_count} reviews)`}
                        </div>
                    </div>
                    <div className="alg-Result-description">
                        {`${hit.dining_style} | ${hit.neighborhood} | ${hit.price_range}`}
                    </div>
                </div>
            </div>
        )
    }
}
