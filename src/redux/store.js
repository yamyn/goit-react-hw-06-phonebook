import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import contactsReducer from './contacts/contactsReducer';
import filterReducer from './filter/filterReducer';
import alertReducer from './alert/alertReducer';

import validation from './middleware/validation';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
    alert: alertReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(validation));

const store = createStore(rootReducer, enhancer);

export default store;
