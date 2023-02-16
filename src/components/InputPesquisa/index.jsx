import { Link } from "react-router-dom"
import { InputStyle } from "./style"
import { BsSearch } from 'react-icons/bs'

export const InputPesquisa = () => {
    return(
        <InputStyle>
            <input type="text" />
            <button>
                <Link to="/Search">
                    <BsSearch color="#000000" size={20}/>
                </Link>
            </button>
        </InputStyle> 
    )
} 