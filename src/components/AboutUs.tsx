"use client"
import React from "react";
import Image from "next/image";
import styles from "./styles/AboutUs.module.css"; // Assuming you have a CSS module for styling

const AboutUs: React.FC = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Learn more about our company and what we do</p>
      </section>

      <section className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.sectionContent}>
          At [Your Company Name], our mission is to provide high-quality products and exceptional customer service. We strive to create value for our customers by offering innovative solutions in the [industry type].
        </p>
      </section>

      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <Image src="/images/team-member-1.jpg" alt="Team Member 1" width={150} height={150} />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/team-member-2.jpg" alt="Team Member 2" width={150} height={150} />
            <h3>Jane Smith</h3>
            <p>Chief Operating Officer</p>
          </div>
          {/* Add more team members as necessary */}
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <ul className={styles.valuesList}>
          <li>Integrity: We are committed to honesty and transparency in all our dealings.</li>
          <li>Innovation: We foster creativity and always look for new ways to improve.</li>
          <li>Customer-centricity: Our customers are at the heart of everything we do.</li>
          {/* Add more values as necessary */}
        </ul>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionContent}>
          If you have any questions or want to learn more about what we do, feel free to contact us.
        </p>
        <a href="/contact" className={styles.contactLink}>Get in Touch</a>
      </section>
    </div>
  );
};

export default AboutUs;
