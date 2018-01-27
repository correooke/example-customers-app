
import { createAction } from 'redux-actions';
import { DELETE_CUSTOMER } from '../constants/index';
import { apiDelete } from './../api';
import { urlCustomers } from './../api/urls';

export const deleteCustomer = createAction(DELETE_CUSTOMER, 
    id => apiDelete(urlCustomers, id)() );