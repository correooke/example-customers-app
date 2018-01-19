import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import { getCustomerByDni } from '../selectors/customers';
import { Route, withRouter } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerContainer extends Component {

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ( { match } ) => { 
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl {...this.props.customer} 
                            onSubmit={this.handleSubmit}
                            onBack={this.handleOnBack} />
            }
        } />
    )

    // <p>Datos del cliente "{this.props.customer.name}"</p>
    render() {
        return (
            <div>
                <AppFrame header={`Cliente  ${this.props.dni}`}
                    body={this.renderBody()} >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps, null)(CustomerContainer));