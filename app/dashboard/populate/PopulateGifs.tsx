
import GifCard from "../../../src/components/GifCard";

type PopulateProps = { data: { id: string, embed_url: string, title: string, username: string }[], isLoading: Boolean }

export default function PopulateGifs({ data, isLoading }: PopulateProps) {

    return (
        <div className="results"> {isLoading ? <><div className="loader"></div></> :
            data.map((gif) => <GifCard gif={gif} key={Math.random() * 500} />)
        }</div>
    );
}