import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import contactsReducer from './contacts/contactsReducer';
import filterReducer from './filter/filterReducer';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
