import Heading from "@/components/common/Heading/Heading";
import styles from "./homeBanner.module.css";
import Text from "@/components/common/text/text";
import Chip from "@/components/common/chip/chip";

export default function HomeBanner() {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.leftDiv}>
        <Heading size="lg" color="var(--purple-4)">
          Your Ultimate Event Partner
        </Heading>
        <Text size="lg" color="var(--purple-3)">
          InMyEvents helps you manage your events without the hassel.
        </Text>
        <Chip size="lg" label="Create events" />
      </div>
      {/* <div className={styles.rightDiv}>
       <Image src='/home/Event.jpg'  width={500} height={400} className={styles.Image}/>
       </div> */}
    </section>
  );
}
