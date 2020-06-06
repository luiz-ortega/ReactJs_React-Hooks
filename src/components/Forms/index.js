import React from 'react';
import { MyEnhancedForm } from './FormLogic';

function Forms() {
    return (
        <>
            <MyEnhancedForm formType="save" />
            <MyEnhancedForm formType="edit" />
        </>
    );
}

export default Forms;
