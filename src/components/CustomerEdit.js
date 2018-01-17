import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es requerido"
);

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const MyField = ({input, meta, type}) => (
    <div>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ( { name, dni, age}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field 
                        name="name" 
                        component={MyField} 
                        validate={isRequired}></Field>
                </div>
                <div>
                    <label htmlFor="dni">Dni</label>
                    <Field 
                        name="dni" 
                        component={MyField} 
                        validate={[isRequired, isNumber]}></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field name="age" 
                        component={MyField} 
                        type="number"
                        validate={isNumber} ></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit'
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);