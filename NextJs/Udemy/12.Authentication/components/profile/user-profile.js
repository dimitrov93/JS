import { getSession, useSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function UserProfile() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       router.push("auth");
  //     } else {
  //       //
  //     }
  //   });
  // }, []);

  // if (status === "unauthenticated") {
  //   return <p className={classes.profile}>Not authenticated</p>;
  // } else {

  async function changePasswordHandler(passwordData) {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
