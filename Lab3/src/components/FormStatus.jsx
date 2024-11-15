import React from 'react';

const FormStatus = ({ status }) => {
    if (status === 'idle') {
        return <p>Fill in the form and submit!</p>;
    }
    if (status === 'success') {
        return <p>Form submitted successfully!</p>;
    }
    if (status === 'error') {
        return <p>There was an error submitting the form.</p>;
    }
    return null;
};

export default FormStatus;
