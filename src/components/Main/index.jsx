import { useEffect, useState } from "react"
import { CardFilme } from "../CardFilme"
import { MainContainer, MainStyle } from "./style"

const urlApi = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const Main = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        fetch(`${urlApi}top_rated?${apiKey}&language=pt-BR`).
        then(response => response.json()).
        then(response => setFilmes(response.results));
    }, []);

    console.log(filmes)
    return(
        <MainStyle>
            
            <MainContainer>
                <h2>Melhores Lançamentos</h2>
                <div className="container-cards">
                    {filmes.map((filme, index) => <CardFilme 
                    key={index}
                    photo={filme.poster_path}
                    title={filme.title}
                    />)}
                </div>
            </MainContainer>
        </MainStyle>
    )
}