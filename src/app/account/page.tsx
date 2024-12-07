import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const AccountPage: React.FC = () => {
  // Sample user data
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Account Information</h2>

        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-600" />
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Full Name"
            />
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-600" />
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Email"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhone className="text-gray-600" />
            <input
              type="text"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Phone Number"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
