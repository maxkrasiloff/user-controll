import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './UserForm.module.css'
const UserForm = (props) => {
    let initValues = { 
        email: '', 
        password: '',
        username: '',
        name: '', 
        phone: '',
        website: '', 
        zipcode: '',
        city: '',
        street: '',
        suite:'',
        company_name:'',
        catchPhrase: '',
        bs: ''
    }
    if (props.initValues) {
        initValues = props.initValues;
    }
    return (
    
    <div>
        <Formik
            initialValues={initValues}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values) => {
                props.submitForm(values)
            }}
        >
            {() => (
                <Form>
                    <h3>Personal Info and Contacts</h3>
                    <FormField id="email" type="email" name="email" label="email" placeholder="example@example.com"/>
                    <FormField id="username" type="text" name="username" label="username" placeholder="coolHacker1337"/>
                    <FormField id="password" type="password" name="password" label="password" placeholder="yt675856kjfghh5"/>
                    <FormField id="name" name="name" label="name" placeholder="John Boris"/>
                    <FormField id="phone" type="phone" name="phone" label="phone" placeholder="+X XXX XXX XX XX"/>
                    <FormField id="website" type="text" name="website" label="website" placeholder="domain.com"/>
                    <h3>Address</h3>
                    <FormField id="zipcode" type="text" name="zipcode" label="zipcode" placeholder="123456"/>
                    <FormField id="city" type="text" name="city" label="city" placeholder="Canzas"/>
                    <FormField id="street" type="text" name="street" label="street" placeholder="Your Street"/>
                    <FormField id="suite" type="text" name="suite" label="suite" placeholder="Your suite"/>
                    <h3>Company</h3>
                    <FormField id="company_name" type="text" name="company_name" label="name" placeholder="Company name"/>
                    <FormField id="catchPhrase" type="text" name="catchPhrase" label="Catch Phrase" placeholder="anything..."/>
                    <FormField id="bs" type="text" name="bs" label="bs" placeholder=""/>
                    <button type="submit" disabled={props.disabled}>
                        {props.buttonText}
                    </button>
                </Form>
            )}
        </Formik>
    </div>
);}


let FormField = (props) => {
    return (
        <div className={css.inputBlock}>
            <div className={css.inputWithLabel}>
                <label htmlFor={props.id}>{props.label}</label>
                <Field id={props.id} type={props.type} name={props.name} placeholder={props.placeholder}/>
            </div>
            <ErrorMessage name={props.name} name="name" component="div" />
        </div>
    )

}

export default UserForm;