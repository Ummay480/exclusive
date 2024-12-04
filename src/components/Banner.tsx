"use client"
import styles from './styles/Banner.module.css';


interface BannerProps {
  imageSrc: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc }) => {
  return (
    <div className={styles.banner}>
      <img src={imageSrc} alt="Banner" className={styles.image} />
    </div>
  );
};

export default Banner;
