import { Type } from './filterTypes';

export const changeFilter = filter => ({
    type: Type.CHANGEFILTER,
    payload: { filter },
});
