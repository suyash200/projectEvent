import Text from "@/components/common/text/text";
import HomeCard from "../homeCard/homeCard";
import styles from "./ourServices.module.css";
import Heading from "@/components/common/Heading/Heading";
import Chip from "@/components/common/chip/chip";

export default function OurServices() {
  return (
    <>
      <section>
        <article className={styles.mainContiner}>
          <Heading
            className={styles.heading}
            size="lg"
            fontFamily="var(--system-font)"
          >
            Services we provide
          </Heading>
          <div className={styles.process}>
            <HomeCard
              title="Event Managers"
              description="An hassle-free and easy event management platform"
              herf="/register"
              label="Signup as Event Manger"
            />

            <HomeCard
              title="Attendee"
              description="we are all ready just sign up and start attending."
              herf="/login"
              label="Signup as attendee"
            />
          </div>
          <Text size="lg" fontFamily="var(--system-font)">
            More services comming soon
          </Text>
        </article>
      </section>
    </>
  );
}
