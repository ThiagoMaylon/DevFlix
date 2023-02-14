import { useEffect, useState } from "react"
import { MainContainer, MainStyle } from "./style"

export const Main = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/01?api_key=6cf2121f3b2c45f94006f71c18155814&language=pt-BR').
        then(response => response.json()).
        then(response => setFilmes(response));
    }, [])

    console.log(filmes)
    return(
        <MainStyle>
            <MainContainer>
                {filmes.original_title}
            </MainContainer>
        </MainStyle>
    )
}