// @flow

import classnames from 'classnames'
import React from 'react'

import './Sidebar.css'

type Props = {
    className?: string,
}

type State = {
    foodTypes: Object[]
}

export class Sidebar extends React.Component<void, Props, void> {

    props: Props
    state: State = {
        foodTypes: null
    }

    componentWillMount() {
        const { helper } = window

        helper
            .searchForFacetValues('food_type', helper.state.query)
            .then((res) => {
                this.setState({
                    foodTypes: res.facetHits
                })
            })
    }



    handleFilterClick(facet, value) {
        const { helper } = window

        helper
            .clearRefinements(facet)
            .addFacetRefinement(facet, value)
            .search()

        this.forceUpdate()
    }

    handleFilterReset(facet) {
        const { helper } = window

        helper
            .clearRefinements(facet)
            .search()

        this.forceUpdate()
    }

    render() {
        const { className } = this.props
        const { foodTypes } = this.state
        const { helper } = window
        const { facetsRefinements } = helper.state

        return (
            <div className={classnames('alg-Sidebar', className)}>
                <div className="alg-Sidebar-foodTypes">
                    <div className="alg-Sidebar-title">
                        Cuisine/Food Type
                    </div>
                    {foodTypes && foodTypes.map((foodType) =>
                        <div
                            key={foodType.value}
                            onClick={
                                facetsRefinements.food_type
                                && facetsRefinements.food_type[0] === foodType.value ?
                                    () => this.handleFilterReset('food_type')
                                :
                                    () => this.handleFilterClick('food_type', foodType.value)
                            }
                            className={classnames("alg-Sidebar-foodType flex-display", {
                                'is-selected':
                                    facetsRefinements.food_type
                                    && facetsRefinements.food_type[0] === foodType.value
                            })}
                        >
                            <div
                                className="alg-Sidebar-foodTypeName flex-grow"
                                title={foodType.value}
                            >
                                {foodType.value}
                            </div>
                            {foodType.count}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
