import React from 'react';

function Forms2({ handleChange, handleBlur, values, touched, errors }) {
    return (
        <>
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                name="phone"
            />
            {errors.phone && touched.phone && (
                <div id="feedback">{errors.phone}</div>
            )}
            <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                name="address"
            />
            {errors.address && touched.address && (
                <div id="feedback">{errors.address}</div>
            )}
        </>
    );
}

export default Forms2;
