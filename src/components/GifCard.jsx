import { Gif } from "@giphy/react-components";
import Image from "next/image";
import star from "../../public/images/star.svg";
export default function GifCard({ gif }) {
  return (
    <>
      <div className="gifCard">
        <Gif gif={gif} className="gifImage" />
        <div className="gifTitle">
          {gif.title.toUpperCase().split(" ").slice(0, 3).join(" ")}
          <Image
            className="star"
            src={star}
            alt="favorites"
            onClick={() => addData("favorites", Math.random() * 13, { ...gif })}
          />
        </div>
        {gif.username ? <div className="gifAuthor">@{gif.username}</div> : ""}
      </div>
    </>
  );
}
