// src/pages/TermsOfService.jsx
import React from 'react';

const TermsOfService = () => {
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="mb-4">
                These Terms of Service govern your use of our website. By using our site, you agree to these terms.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">User Responsibilities</h2>
            <p className="mb-4">
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">Prohibited Activities</h2>
            <p className="mb-4">
                You agree not to misuse our website or engage in any activity that interferes with its proper operation.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">Limitation of Liability</h2>
            <p className="mb-4">
                We are not liable for any damages that may result from the use or inability to use our website.
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-2">Governing Law</h2>
            <p className="mb-4">
                These terms are governed by the laws of your jurisdiction. Any disputes will be resolved in the appropriate courts.
            </p>
        </div>
    );
};

export default TermsOfService;