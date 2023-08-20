import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
      
        <p className={styles.text}>Home Page</p>

        <p className={styles.navleft}>LMaster96</p>

      </nav>
        <div className={styles.jobDiv}>
          <Link href="/job-detail" className={styles.job}>
            Job Detail
          </Link>
          <Link href="/job-list" className={styles.job}>
            Job List
          </Link>
          <Link href="/create-job" className={styles.job}>
            Create a Job
          </Link>
        </div>
    </main>
  );
}
