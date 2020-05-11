import { Type } from './filterTypes';

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case Type.CHANGEFILTER:
            console.log(action.payload.filter);
            return action.payload.filter;
        default:
            return state;
    }
};

export default filterReducer;
