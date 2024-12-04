"use client"
import React from 'react';
import Link from 'next/link';
import styles from './styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Stay Connected Section */}
        <div className={styles.section}>
          <h3>Stay Connected</h3>
          <p>Address: Istanbul, Turkey</p>
          <p>Phone: (+90) 985 98 75</p>
          <h3>Follow us on social media</h3>
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/linkdin.png" alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/images/instagarm.png" alt="Instagram" />
            </a>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className={styles.section}>
          <h3>Mansoury.</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/collaboration">Collaboration</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/policies">Policies</Link></li>
          </ul>
        </div>
        
        {/* Customer Services Section */}
        <div className={styles.section}>
          <h3>Customer Services</h3>
          <ul>
            <li><Link href="/help-center">Rules and Regulations</Link></li>
            <li><Link href="/track-order">Terms of Use</Link></li>
            <li><Link href="/returns">Return Procedure</Link></li>
            <li><Link href="/shipping">Privacy Policy</Link></li>
            <li><Link href="/faq">Forums</Link></li>
          </ul>
        </div>
       
        {/* Quick Access Section */}
        <div className={styles.section}>
          <h3>Quick Access</h3>
          <ul>
            <li><Link href="/contact-us">Contact Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/returns">Return Procedure</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2024-25 Ummay Kulsoom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
