import styles from "./HeaderAuth.module.scss";
import Link from "next/link";

export default function HeaderAuth() {
  return (
    <div className={styles.headerAuth}>
      <Link href="/" className={styles.headerBtn}>
        دخول
      </Link>
      <Link href="/" className={styles.headerBtn}>
        سجل الأن
      </Link>
    </div>
  );
}
