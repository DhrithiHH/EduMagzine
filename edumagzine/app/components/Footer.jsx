'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="MentXtv Logo" width={50} height={50} />
          <h1 className={styles.logoText}>MentXtv</h1>
        </div>
        <p className={styles.desc}>
          MentXTV is a growing media-led project under the MentX umbrella, aiming to revolutionize mentorship in India through engaging short-form videos featuring mentors, achievers, and students.
        </p>
        <p className={styles.meta}>
          <strong>Headquarters:</strong> Pune, India
        </p>
        <div className={styles.icons}>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
          </Link>
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Achievers</Link>
          <Link href="/write">Post</Link>
          <Link href="/about">About</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Education</Link>
          <Link href="/">Teaching</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Growth</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://facebook.com" target="_blank">Facebook</Link>
          <Link href="https://instagram.com" target="_blank">Instagram</Link>
          <Link href="https://youtube.com" target="_blank">YouTube</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
