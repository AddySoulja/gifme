"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import Dashboard from "./dashboard/page";
import app from "@/src/firebase/firebaseConfig";
import Link from "next/link";
import logOut from "../src/auth/LogOut";

export default function Home() {
  const auth = getAuth(app);
  const user = auth.currentUser;
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();

  const handleLogOut = useCallback(async () => {
    try {
      await logOut();
    } catch (e) {
      alert(e);
    }
    return router.push("/log-in");
  }, [router])

  useEffect(() => {
    if (user === null) return router.push("/log-in");
    setDisplayName(() => user.displayName === null ? "" : user.displayName);
  }, [user, router, auth]);

  return (
    <main className="main">
      <div className="navbar">
        <span className="email">{displayName !== "" ? displayName : ""}</span>
        <span className="logo">Gifme <code>by Aditya Kumar</code></span>
        <Link href="/favorites" className="navBtn">
          Favorites
        </Link>
        <button type="button" className="navBtn" onClick={handleLogOut}>
          Log out
        </button>
      </div>
      <Dashboard />
    </main>
  )
}
