import styles from "./page.module.scss";
import Home from "@/app/home/page";

export default async function Index() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}
