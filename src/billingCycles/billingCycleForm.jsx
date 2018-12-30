import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import inputAndLabel from '../common/form/labelAndInput';
import { init } from './billingCycleActions';

class BillingCycleForm extends Component{
    
    render(){
        const { handleSubmit, readOnly } = this.props;

        return (
            <form role='form' onSubmit={ handleSubmit }>
                <div className='box-body'>
                    <Field name='name' component={inputAndLabel} cols='12 4' placeholder='informe o nome' label='Nome:' readOnly={readOnly}/>
                    <Field name='month' component={inputAndLabel} cols='12 4' placeholder='Informe o mês' label='Mês:' type='number' readOnly={readOnly}/>
                    <Field name='year' component={inputAndLabel} cols='12 4' placeholder='Informe o ano' label='Ano:' type='number' readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false }) (BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);