// @flow

import type { Something } from 'mention/modules/something/something-types.flow.js'

import { {{name}}Impl } from 'mention/components/{{path}}/{{name}}Impl.jsx' // Alphabet please !
import { deleteSomething } from 'mention/modules/something/something-actions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'


type ComponentProps = {
    something: Something,
}

type Props = ComponentProps & {
    deleteSomethingBound: typeof deleteSomething,
}

type State = {
    isSomething: bool
}

const defaultProps = {

}

export class {{name}}Container extends React.Component<typeof defaultProps, Props, State> {

    props: Props
    state: State = {
        isSomething: false,
    }
    static defaultProps = defaultProps

    handleDelete = (something: Something) => {
        const {
            deleteSomethingBound
        } = this.props

        deleteSomethingBound(something)
        this.setState({ isSomething: false })
    }

    render() {
        const {
            something,
        } = this.props
        const {
            isSomething,
        } = this.state

        return (
            <{{name}}Impl
                isSomething={isSomething}
                onDelete={this.handleDelete}
                something={something}
            />
        )
    }
}

const stateToProps = (state: MentionState) => ({
    something: state.something.data,
})

const actionsToProps = (dispatch) =>
    bindActionCreators({
        deleteSomethingBound: deleteSomething,
    }, dispatch)

export const {{name}}: ReactClass<ComponentProps> =
    connect(stateToProps, actionsToProps)({{name}}Container)
