import React from 'react';
import { withFormik } from 'formik';
import { MyForm } from './MyForm';

export const MyEnhancedForm = withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        address: '',
    }),

    validate: (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.phone) {
            errors.phone = 'Required';
        }
        if (!values.address) {
            errors.address = 'Required';
        }
        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        setTimeout(() => {
            console.log(props);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
})(MyForm);
