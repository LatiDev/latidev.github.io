import Image from 'next/image';

import logo from "@/public/logo.png";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footercontainer}>
      <span>
        <Image src={logo} alt="logo" style={{width: '100px', height: "var(--header-heigth)"}}/>
      </span>
      <div>
        <a style={{padding: '20px', color: 'white'}} href="#content">Contact</a>
        <a style={{padding: '20px', color: 'white'}} href="#mention">Mentions légales</a>
        <a style={{padding: '20px', color: 'white'}} href="#politique">Politique de confidentialité</a>
      </div>
      <div>
        <span>Facebook</span>
        <span>Twitter</span>
        <span>Instagram</span>
      </div>
    </footer>
  );
}
