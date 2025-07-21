"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function SignInPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const redirectUrl = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL || "/dashboard";

  useEffect(() => {
    if (isLoaded && user) {
      router.replace(redirectUrl);
    }
  }, [isLoaded, user, redirectUrl, router]);

  if (isLoaded && user) {
    return null;
  }

  return <SignIn />;
}