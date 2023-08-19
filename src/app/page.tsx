import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p className={styles.text}>Dale click a las palabras para ser llevado <br></br> a otra pagina con más estilos e información</p>
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
