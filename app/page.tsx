"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "./dashboard/page";
import { getAuth } from "firebase/auth";
import app from "@/src/firebase/firebaseConfig";

export default function Home() {
  const user = getAuth(app).currentUser;
  const router = useRouter();
  useEffect(() => {
    if (user === null) router.push("/log-in")
  }, [user, router])

  return (
    <main className="main">
      <Dashboard />
    </main>
  )
}
