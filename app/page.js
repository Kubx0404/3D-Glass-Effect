import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import Caption from "../components/Caption";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="h-screen">
        <Scene />
      </div>

      <Caption />
    </main>
  );
}
