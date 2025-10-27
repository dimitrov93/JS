import { useEffect, useState } from "react";
import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthPage() {
  const [isLoading, setisLoading] = useState(true)
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setisLoading(false)
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <AuthForm />;
}

export default AuthPage;
