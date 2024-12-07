"use client"

import React from "react";

const aboutPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p>
            We are a passionate team dedicated to bringing high-quality products to our customers. Our journey began in [Year],
            when a group of like-minded individuals came together to create a brand focused on innovation, quality, and customer satisfaction.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p>
            Our mission is to provide exceptional products and services that improve the lives of our customers. We strive to
            continually innovate and grow, ensuring that we meet the evolving needs of our audience.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <ul className="list-disc pl-6">
            <li><strong>Customer Focused:</strong> We put our customers first in everything we do.</li>
            <li><strong>Integrity:</strong> We are committed to doing business ethically and honestly.</li>
            <li><strong>Innovation:</strong> We embrace change and continuously work to improve our products and services.</li>
            <li><strong>Excellence:</strong> We strive for excellence in everything we do, from our products to customer service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
          <p>
            Our team is made up of talented individuals who are passionate about their work. Together, we bring a diverse set of
            skills and experiences to deliver outstanding results for our customers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Jane Smith</h4>
              <p className="text-sm text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">Alice Johnson</h4>
              <p className="text-sm text-gray-600">Marketing Director</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>
            If you have any questions or would like to learn more about our company, feel free to reach out to us at:
            <strong> contact@ourcompany.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default aboutPage;
