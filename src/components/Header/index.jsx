import { useState } from "react"
import { MenuMobile } from "../MenuMobile";
import { HeaderContainer, HeaderStyle } from "./style"

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    
    return(
        <>  
            <MenuMobile />
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
                </HeaderContainer>
            </HeaderStyle>
        </>
    )
}