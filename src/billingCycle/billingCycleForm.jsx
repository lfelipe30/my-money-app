import React, {Component} from 'react'
import labelAndInput from '../common/form/labelAndInput'

//reduxForm funciona como connect
//Field controla os campos do formulário
import {reduxForm, Field} from 'redux-form'



class BillingCycleForm extends Component{

    render(){
        const {handleSubmit} = this.props
 
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} />
                    <Field name="month" component={labelAndInput} />
                    <Field name="year" component={labelAndInput} />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)