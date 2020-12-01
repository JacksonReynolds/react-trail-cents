import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'
import resetErrors from '../actions/users/resetErrors'

class Error extends PureComponent {

    componentDidMount() {
        this.props.resetErrors()
    }

    render() {
        let {errors} = this.props
        let errorType = Object.keys(errors)[0]
        return (
            <>
                {errorType ? <Alert variant={'warning'}><ul>{errorType}{errors[errorType].map(e => <li key={e}>{e}</li>)}</ul></Alert> : null}
            </>
        )
    }
    
}

export default connect(null, {resetErrors})(Error)
