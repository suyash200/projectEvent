"use client";
import styles from "./signUp.module.css";
import Heading from "@/components/common/Heading/Heading";
import Button, { CustomButton } from "@/components/common/Button/Button";
import { Suspense, useState } from "react";
import Link from "next/link";
import Text from "@/components/common/text/text";
import { SiginupService } from "@/apiServices/services/authServices";
import { useRouter } from "next/navigation";
import { CustomInput } from "@/components/common/input/input";

export default function SignuP() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    permission: "User",
    phone: "",
  });

  const SubmitHandeler = async (e) => {
    if (
      !userData.email ||
      !userData.password ||
      !userData.dob ||
      !userData.firstname ||
      !userData.lastname ||
      !userData.gender
    ) {
      window.alert("enter all feilds");
    } else {
      if (userData.email.match("@") != null) {
        e.preventDefault();
        const res = await SiginupService({ ...userData });

        if (res === 200) {
          router.push("/login");
        }
      } else {
        window.alert("enter valid email");
      }
    }
  };

  return (
    <section className={styles.mainContiner}>
      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <Heading size="md" fontFamily="Ubuntu">
            Register
          </Heading>
          <form className={styles.loginForm}>
            <div className={styles.shortflex}>
              <div>
                <CustomInput
                  value={userData.firstname}
                  className="input-medium"
                  type="string"
                  size="md"
                  label="First Name:"
                  onChange={(e) => {
                    e.preventDefault();
                    setUserData({ ...userData, firstname: e.target.value });
                  }}
                />
              </div>
              <div>
                <CustomInput
                  className="input-medium"
                  type="string"
                  size="md"
                  label="Last Name:"
                  value={userData.lastname}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserData({ ...userData, lastname: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className={styles.shortflex}>
              <div>
                <CustomInput
                  type="date"
                  placeholder=""
                  size="lg"
                  label=" Date of Birth :"
                  value={userData.dob}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserData({ ...userData, dob: e.target.value });
                  }}
                />
              </div>
              <div>
                <label> Gender :</label>
                <select
                  className="input-large"
                  type="string"
                  value={userData.gender}
                  onChange={(e) => {
                    e.preventDefault();
                    setUserData({ ...userData, gender: e.target.value });
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div>
              <CustomInput
                size="lg"
                type="email"
                label="Email :"
                value={userData.email}
                onChange={(e) => {
                  e.preventDefault();
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <CustomInput
                size="lg"
                type="password"
                label="Password :"
                value={userData.password}
                onChange={(e) => {
                  e.preventDefault();
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
            </div>

            <div>
              <CustomInput
                size="lg"
                type="text"
                label="Phone Number :"
                value={userData.phone}
                onChange={(e) => {
                  e.preventDefault();
                  setUserData({ ...userData, phone: e.target.value });
                }}
              />
            </div>
            <CustomButton
              size="lg"
              onClick={(e) => {
                SubmitHandeler(e);
              }}
              accesskey="enter"
            >
              Submit
            </CustomButton>
          </form>
          <Text>
            Already have an account?{" "}
            <Link
              href="/login"
              style={{ textDecoration: "none", color: "var(grey)" }}
            >
              {" "}
              Login
            </Link>
          </Text>
        </div>
      </main>
    </section>
  );
}
