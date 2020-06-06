import React from 'react';

function Forms1({ handleChange, handleBlur, values, touched, errors }) {
    return (
        <>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
            />
            {errors.name && touched.name && (
                <div id="feedback">{errors.name}</div>
            )}
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
            />
            {errors.email && touched.email && (
                <div id="feedback">{errors.email}</div>
            )}
        </>
    );
}

export default Forms1;
