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
        return (
            <>
                {errors && <Alert variant={'warning'}><ul>{errors.map(e => <li key={e}>{e}</li>)}</ul></Alert>}
            </>
        )
    }
    
}

export default connect(null, {resetErrors})(Error)
