import { useParams } from "react-router-dom"

export const Search = () => {
    const { id } = useParams();
    return(
        <h1>{id}</h1>
    )
} 