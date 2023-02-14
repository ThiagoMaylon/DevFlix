import { useEffect, useState } from "react"
import { MainContainer, MainStyle } from "./style"

const urlApi = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY



export const Main = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch(`${urlApi}top_rated?${apiKey}&language=pt-BR`).
        then(response => response.json()).
        then(response => setFilmes(response.results));
    }, [])
    console.log(filmes)
    return(
        <MainStyle>
            <MainContainer>
                {filmes.map((filme, index) => (
                    <h1>{filme.title}</h1>
                ))}
            </MainContainer>
        </MainStyle>
    )
}