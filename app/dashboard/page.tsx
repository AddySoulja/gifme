import React, { useState } from "react";
import Search from "./search/Search";
import PopulateGifs from "./populate/PopulateGifs";
import Pagination from "./pagination/Pagination";
import logOut from "../../src/auth/LogOut";
import Link from "next/link";
import { getAuth } from "firebase/auth";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const auth = getAuth();
  const user = auth.currentUser;

  return (<>
    <div className="navbar">
      <span className="email">{user !== null ? user.displayName : ""}</span>
      <Link href="/favorites" className="navBtn">Favorites</Link>
      <button type="button" className="navBtn" onClick={() => logOut()}>Log out</button>
    </div>
    <div className="searchbar">
      <Search setData={setData} setIsLoading={setIsLoading} offset={page * 3} />
    </div>
    {
      data.length >= 3 ? (<div style={{ display: "flex", flexDirection: "column" }}>
        <PopulateGifs data={data} isLoading={isLoading} />
        <Pagination page={page} setPage={setPage} />
      </div>) : ""
    }
  </>)
}