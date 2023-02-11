import { MenuMobileContainer } from "./style"
import {IoClose} from 'react-icons/io5'
export const MenuMobile = () => {
    return(
        <MenuMobileContainer>
            <IoClose size={45} color="#fff"/>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </MenuMobileContainer>
    )
}