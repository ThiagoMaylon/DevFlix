import { Link } from "react-router-dom"
import { InputStyle } from "./style"
import { BsSearch } from 'react-icons/bs'
import { useState } from "react"

export const InputPesquisa = () => {
    const [movie, setMovie] = useState("")
    return(
        <InputStyle>
            <input type="text" onChange={event => setMovie(event.target.value)}/>
            <button>
                <Link to={`/search/${movie}`}>
                    <BsSearch color="#000000" size={20}/>
                </Link>
            </button>
        </InputStyle> 
    )
} 