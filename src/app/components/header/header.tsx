import Link from "next/link";
import styles from "./header.module.css"

export default function Header() {
  return (
    <header>  
      <nav className={styles.header}>
        <Link className={styles.headerlink} href="/">Acceuil</Link>
        <Link className={styles.headerlink} href="/modele">Modèles</Link>
      </nav>
    </header>
  );
}
