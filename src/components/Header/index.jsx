import { HeaderContainer, HeaderStyle } from "./style"
import {RiMenu3Fill} from 'react-icons/ri';


export const Header = ({setIsVisible}) => {
    
    return(
        <>  
            <HeaderStyle >
                <HeaderContainer>
                    <div className="logo">
                        <a href="#">Dev Flix</a>
                    </div>

                    <div className="menu">
                        <nav>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                    <RiMenu3Fill className="btn-menu-mobile" 
                    onClick={() => setIsVisible(true)} 
                    color="#FFFFFF"
                    size={45}
                    />
                </HeaderContainer>
            </HeaderStyle>
        </>
    )
}