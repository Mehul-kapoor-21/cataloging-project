import React from 'react';
import "../styles/Privacy.css"

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 privacy-policy-container">
      <h1 className="text-center mb-4 privacy-policy-title">Privacy Policy</h1>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="mb-4">
            <h2 className="privacy-policy-section-title">Information We Collect</h2>
            <p className="privacy-policy-text">
              We collect personal information when you:
            </p>
            <ul className="privacy-policy-list">
              <li>Register on our website.</li>
              <li>Use or view our website via your browser's cookies.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="privacy-policy-section-title">How We Use Your Information</h2>
            <p className="privacy-policy-text">
              We use your personal information to:
            </p>
            <ul className="privacy-policy-list">
              <li>Customize your experience.</li>
              <li>Improve our website.</li>
              <li>Process transactions.</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="privacy-policy-section-title">Security</h2>
            <p className="privacy-policy-text">
              We are committed to ensuring that your information is secure. We use appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>
          </div>

          <div>
            <h2 className="privacy-policy-section-title">Cookies</h2>
            <p className="privacy-policy-text">
              We use cookies to personalize content, analyze our traffic, and improve our services. By using our website, you consent to our use of cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
