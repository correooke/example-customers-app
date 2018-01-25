import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER } from './../constants/index';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload ],
}, []);

