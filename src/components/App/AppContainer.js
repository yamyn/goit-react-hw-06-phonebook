import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = state => ({
    alert: state.alert,
    count: state.contacts.length,
});

export default connect(mapStateToProps, null)(App);
