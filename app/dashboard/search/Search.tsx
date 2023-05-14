"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useDebounce from "../../../src/hooks/useDebounce";
import { fetchGifs } from "../../../src/controllers/fetchGifs";
import searchIcon from "../../../public/images/searchIcon.svg";

type SearchProps = { setData: Function, setIsLoading: Function, offset: number };

export default function Search({ setData, setIsLoading, offset }: SearchProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const preFetchGifs = useCallback(async () => {
    const gifs = await fetchGifs(search, offset);
    setData([...gifs.data]);
    setIsLoading(false);
  }, [search, setData, setIsLoading, offset]);

  useEffect(() => {
    if (debouncedSearch) {
      setIsLoading(true);
      preFetchGifs();
    }
  }, [debouncedSearch, preFetchGifs, setData, setIsLoading]);

  return (
    <>
      <Image src={searchIcon} alt="search icon"></Image>
      <input
        type="text"
        placeholder="Article name or keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="inputField"
      />
      <button
        className="btn"
        onClick={preFetchGifs}
      >
        Search
      </button>
    </>
  );
}
