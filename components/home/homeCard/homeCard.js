import Heading from "@/components/common/Heading/Heading";
import styles from "./homeCard.module.css";
import Text from "@/components/common/text/text";
import Image from "next/image";
import Chip from "@/components/common/chip/chip";
export default function HomeCard({ title, description ,label, herf}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.contentDiv}>
        <Heading size="md" color="var(--purple-4)">
          {title}
        </Heading>
        <Text color="grey">{description}</Text>
      </div>
      <div className={styles.imgDiv}>
        <Chip label={label} size='md' herf={herf}></Chip>
      </div>
    </div>
  );
}
