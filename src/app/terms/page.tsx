"use client"
import React from "react";

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-8">Terms and Conditions</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">1. Introduction</h3>
          <p>
            Welcome to our website. By accessing or using our services, you agree to comply with these Terms and Conditions.
            If you do not agree with any of these terms, please do not use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">2. Use of Our Service</h3>
          <p>
            You agree to use our services for lawful purposes only. You must not use our service to violate any local, state,
            national, or international law, or regulations.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">3. Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately
            of any unauthorized use of your account.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">4. Privacy Policy</h3>
          <p>
            Your privacy is important to us. Our Privacy Policy governs the collection and use of your personal data. By using our
            service, you agree to the terms outlined in our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">5. Changes to Terms</h3>
          <p>
            We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be effective when
            posted on this page, and it is your responsibility to review the terms periodically.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h3>
          <p>
            We are not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection
            with your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">7. Governing Law</h3>
          <p>
            These Terms and Conditions are governed by the laws of [Your Country/State]. Any disputes arising from these terms will
            be resolved in the appropriate courts of [Your Location].
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">8. Contact Information</h3>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at [Your Contact Information].
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
