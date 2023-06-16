"use client";
import Text from "@/components/common/text/text";
import styles from "./login.module.css";
import Heading from "@/components/common/Heading/Heading";
import { CustomButton } from "@/components/common/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { SigninService } from "@/apiServices/services/authServices";
import { CustomInput } from "@/components/common/input/input";
import { Modal } from "@/components/modal/modal";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Login",
  description: "Your Ultimate Event Partner.",
};

export default function Signin() {
  const [modalVisbible, setModalVisible] = useState(false);
  const [modalControl, setmodalControl] = useState({
    sucess: false,
    failure: false,
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChange = async () => {
    if (!userData.email || !userData.password) {
      window.alert("enter all feilds");
    } else {
      if (userData.email.match("@") != null) {
        const res = await SigninService({ ...userData });

        if (res != 200) {
          setmodalControl({ ...modalControl.failure, failure: true });
          setTimeout(() => {
            setmodalControl({ ...modalControl, sucess: false });
          }, 1000);
        } else {
          setmodalControl({ ...modalControl, sucess: true });
          setTimeout(() => {
            setmodalControl({ ...modalControl.failure, failure: false });
          }, 1000);
          router.push("/events");
        }
      } else {
        window.alert("enter valid email");
      }
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <Heading size="md" fontFamily="Ubuntu">
          Signin
        </Heading>
        <div className={styles.loginForm}>
          <div>
            {/* <label>Email :</label>
            <input
              className="input-large"
              type="email"
              value={userData.email}
              onChange={(e) => {
                e.preventDefault();
                setUserData({ ...userData, email: e.target.value });
              }}
            /> */}
            <CustomInput
              size="lg"
              type="email"
              label="Email :"
              onChange={(e) => {
                e.preventDefault();
                setUserData({ ...userData, email: e.target.value });
              }}
            />
          </div>
          <div>
            <CustomInput
              size="lg"
              label="Password :"
              type="password"
              value={userData.password}
              onChange={(e) => {
                e.preventDefault();
                setUserData({ ...userData, password: e.target.value });
              }}
            />
          </div>

          <CustomButton
            size="lg"
            onClick={(e) => {
              handleChange(e);
            }}
            type='submit'
          >
            Submit
          </CustomButton>
        </div>
        <Text>
          Dont have an account ?{" "}
          <Link
            href="/register"
            style={{ textDecoration: "none", color: "var(grey)" }}
          >
            {" "}
            signUp
          </Link>
        </Text>
        {modalControl.sucess && (
          <Modal color="green" visible={modalControl.sucess}>
            Sucessful regestration
          </Modal>
        )}
        {modalControl.failure && (
          <Modal color="red" visible={modalControl.failure}>
            Please enter valid credentials
          </Modal>
        )}
      </div>
    </main>
  );
}
