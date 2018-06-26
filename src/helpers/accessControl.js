
import React, { Component } from 'react';
import { connect } from 'react-redux';

export const accessControl = permissionsRequired => WrappepComponent => {
    const SecuredControl = class extends Component {

        render() {
            const { permissions } = this.props.user;

            const isAllow = permissionsRequired.every(p => permissions.indexOf(p) >= 0);

            if (!isAllow) {
                return (<div><i>No tiene permisos de acceso</i></div>);
            }
            return <WrappepComponent {...this.props} />;
        }
    }

    return connect(state => ({ user: state.user }))(SecuredControl);
}

