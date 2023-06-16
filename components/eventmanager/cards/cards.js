import Heading from "@/components/common/Heading/Heading";
import styles from "./cards.module.css";

export default function Cards({ label,link }) {
  return (
    <a href={link} style={{textDecoration:'none',color:'none'}}>
      <div className={styles.mainContainer}>
        <Heading size="md">
          {label}
          {">"}
        </Heading>
      </div>
    </a>
  );
}
