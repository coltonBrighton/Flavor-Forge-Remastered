import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function SignInPage() {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/sign-in?redirect_url=/dashboard");
    }
  }, [user]);
  return (
    <SignIn />
  );
}
