import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewCustomerContainer extends Component {

    handleSubmit = () => {

    }

    handleOnSubmitSuccess = () => {

    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack} />
    }

    render() {
        return (
            <div>
                <AppFrame header={`Creación de nuevo cliente`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {

};

export default withRouter(connect(null, null)(NewCustomerContainer));