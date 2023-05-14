import Link from "next/link";

export default function Favorites() {
    return (<><div className="main">
        <div className="fav">
            <h1 className="fav-heading">My favorites</h1>
            <Link href="/" className="navBtn" id="homeBtn">Home</Link>
        </div>
    </div></>)
}