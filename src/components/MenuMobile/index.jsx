import { MenuMobileContainer } from "./style"
import {IoClose} from 'react-icons/io5'
import { Link } from "react-router-dom"
export const MenuMobile = ({isVisible, setIsVisible}) => {
    return(
        <MenuMobileContainer visible={isVisible}>
            <IoClose size={45} color="#fff" onClick={() => setIsVisible(false)}/>
            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </MenuMobileContainer>
    )
}