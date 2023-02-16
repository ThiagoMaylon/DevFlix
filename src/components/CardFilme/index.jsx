import { Link } from "react-router-dom";
import { CardStyle } from "./style";

export const CardFilme = ({photo, title}) => {
    const imgApi = import.meta.env.VITE_IMG;
    return(
        <CardStyle>
            <div className="container-img">
            <img src={`${imgApi}${photo}`} alt={title} />
            </div>
            <div className="container-itens">
                <h2>{title}</h2>
                <Link to={`/movie/${title}`}><button>Detalhe</button></Link>
            </div>
        </CardStyle>
    )
}