import { Gif } from "@giphy/react-components";
import Image from "next/image";
import star from "../../public/images/star.svg";
// import addGif from "../controllers/addToCollection";

export default function GifCard({ gif }) {
  //feature for favorites of the user is stillin progress
  // const handleAdd = async () => {
  //   let response = null,
  //     error = null;
  //   try {
  //     response = await addGif(gif);
  //   } catch (e) {
  //     error = e;
  //   }
  //   if (!error) {
  //     alert("Added to favorites");
  //   }
  // };
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
            // onClick={handleAdd}
          />
        </div>
        {gif.username ? <div className="gifAuthor">@{gif.username}</div> : ""}
      </div>
    </>
  );
}
