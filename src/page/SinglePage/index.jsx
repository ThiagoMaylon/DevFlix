import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { SinglePageStyle } from "./style";
import {BsFillStarFill} from 'react-icons/bs'

const urlApi = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const apiImg = import.meta.env.VITE_IMG;

export const SinglePage = () => {

    const {movie} = useParams();
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        fetch(`${urlApi}${movie}?${apiKey}&language=pt-BR`).
        then(response => response.json()).
        then(response => setFilme(response));
    }, []);


    return(
        <SinglePageStyle>
            <div className="container-img">
                <img src={`${apiImg}${filme.backdrop_path}`} alt="" />
            </div>
            <div className="container-info">
                <h2>FILME: {filme.title}</h2>

                <p className="nota"><BsFillStarFill /> {filme.vote_average}</p>

                <span>Sinopse</span>

                <p className="sinopse">{filme.overview === '' ? "sem sinopse" : filme.overview}</p>
            </div>
        </SinglePageStyle>
    )
}