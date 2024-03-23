import Image from "next/image";
import styles from "./page.module.css";
import About from "./about/page";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <PizzaList />
    </div>
  );
}
