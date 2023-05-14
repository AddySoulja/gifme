"use client";
import React, { useState } from "react";
import Search from "./search/Search";
import PopulateGifs from "./populate/PopulateGifs";
import Pagination from "./pagination/Pagination";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  return (<>
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