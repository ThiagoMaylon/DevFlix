import { useParams } from "react-router-dom"

export const Search = () => {
    const { search } = useParams();
    return(
        <>
            <h1>{search}</h1>
            <h2>pesquisa</h2>
        </>
    )
} 