import { Type } from './alertTypes';

export const toShowAlert = message => ({
    type: Type.SHOWALERT,
    payload: { message },
});

export const toHideAlert = () => ({
    type: Type.HIDEALERT,
});
