import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from './../components/AppFrame';
import CustomersActions from './../components/CustomersActions';

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("handleOn Click");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='Inicio'
                    body={
                        <div>
                            <img src="https://lh6.googleusercontent.com/C0YXQ2ZHuvYkB2GEA4OfkzlBkU56stTvOxeJCQQGaFameldhTRQtzilAcMRveF4SwL3Xfw1muoPE7g=w1360-h677-rw" alt=""/>
                            <CustomersActions>
                                <button onClick={this.handleOnClick} >Listado de clientes</button>
                                
                            </CustomersActions>        
                        </div>
                    }

                    ></AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);