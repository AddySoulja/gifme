"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "./dashboard/page";
import { getAuth } from "firebase/auth";
import app from "@/src/firebase/firebaseConfig";
import Link from "next/link";
import logOut from "../src/auth/LogOut";
export default function Home() {
  const user = getAuth(app).currentUser;
  const [displayName, setDisplayName] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (user === null) return router.push("/log-in")
    setDisplayName(() => user.displayName === null ? "" : user.displayName);
  }, [user, router]);

  return (
    <main className="main">
      <div className="navbar">
        <span className="email">{displayName !== "" ? displayName : ""}</span>
        <Link href="/favorites" className="navBtn">
          Favorites
        </Link>
        <button type="button" className="navBtn" onClick={() => logOut()}>
          Log out
        </button>
      </div>
      <Dashboard />
    </main>
  )
}
