"use client"
import React, { useState } from 'react';
import './styles/Navbar.css';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();

  const handleLoginClick = () => {
    // Redirect to the login page
    router.push('/login');
  };

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar); // Toggle the search bar visibility
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      // You can implement your search logic here or redirect to a search results page
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mansoury.</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="register-button" onClick={handleLoginClick}>
          {/* User icon before 'Register' text */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon user-icon">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Login / Register
        </button>
        <button className="icon-button border-button" onClick={handleSearchClick}>
          {/* Search icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon">
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </div>
      
      {showSearchBar && (
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;
