import { useParams } from "react-router-dom"

export const SinglePage = () => {
    const {movie} = useParams();
    return(
        <>
            <h1>{movie}</h1>
            <h2>filme</h2>
        </>
    )
}