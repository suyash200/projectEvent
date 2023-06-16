"use client";
import Link from "next/link";
import Heading from "../../common/Heading/Heading";
import Text from "../../common/text/text";
import styles from "./navbar.module.css";
import Image from "next/image";
import { cookies } from "next/dist/client/components/headers";
import { GetLogin } from "@/utility/localstorage/localstorage";
import Profileimg from "./profileimg/profileimg";

export default async function Navbar() {
  return (
    <nav>
      <div className={styles.navContainer}>
        <Link href="/" style={{ textDecoration: "none" }} prefetch={false}>
          <div className={styles.leftDiv}>
            <Image src="/logo.png" height={60} width={60} alt="logo" />
            <Heading size="md" fontFamily="Ubuntu">
              InMyEvent
            </Heading>
          </div>
        </Link>

        <div className={styles.rightDiv}>
          <Profileimg />
        </div>
      </div>
    </nav>
  );
}
