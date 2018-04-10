import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import RunModal from './run_modal'
import {createRun} from '../../actions/run_actions'

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    createRun: (run) => dispatch(createRun(run))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RunModal))