import styles from "./page.module.css";
import Link from "next/link";
// import { useStates } from 'react';
import { ContextPublic } from "../../context";



export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
      
        {/* <p className={styles.text}>Home Page</p> */}

        <p className={styles.navright}><a href="https://github.com/LMaster96" target="_blank">LMaster96</a></p>

      </nav>
        <div className={styles.jobDiv}>
          <Link href="/job-detail" className={styles.job_detail}>
            Job Detail
          </Link>
          <Link href="/job-list" className={styles.job_list}>
            Job List
          </Link>
          <Link href="/create-job" className={styles.create_job}>
            Create a Job
          </Link>
        </div>
    </main>
  );
}
