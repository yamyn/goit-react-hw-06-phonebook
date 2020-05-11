import { connect } from 'react-redux';
import * as filterActions from '../../redux/filter/filterActions';

import Filter from './Filter';

const mapStateToProps = state => ({
    value: state.filter,
});

const mapDispatchToProps = dispatch => ({
    onChangeFilter: event =>
        dispatch(filterActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
