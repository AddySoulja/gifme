const url = "https://api.giphy.com/v1/gifs/search?";
const api_key = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";

export async function fetchGifs(keyword, offset) {
  const res = await fetch(
    `${url}q=${keyword}&api_key=${api_key}&limit=3&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}
