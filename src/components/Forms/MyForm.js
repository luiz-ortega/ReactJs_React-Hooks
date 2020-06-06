import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';

export const MyForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
            <Form1
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
            />
            <Form2
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
            />
            <button type="submit">Submit</button>
        </form>
    );
};
