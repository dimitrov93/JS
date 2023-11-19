import { getSession, useSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

function UserProfile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("auth");
      } else {
        //
      }
    });
  }, []);

  if (status === "unauthenticated") {
    return <p className={classes.profile}>Not authenticated</p>;
  } else {
    return (
      <section className={classes.profile}>
        <h1>Your User Profile</h1>
        <ProfileForm />
      </section>
    );
  }
}

export default UserProfile;
