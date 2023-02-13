import styled, { css } from "styled-components";

export const MenuMobileContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;

 
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        ul{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            list-style-type: none;
            gap: 2rem;
            li a{
                color: #FFFFFF;
                text-decoration: none;
                font-size: 1em;
                font-weight: normal;
                position: relative;
                z-index: 1;
                transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
                padding: 0.8em 1.2em;

                &::after{
                    content: "";
                    display: block;
                    height: 2px;
                    position: absolute;
                    bottom: 0;
                    background-color: #FFFFFF;
                    right: 1.25rem;
                    left: 1.25rem;
                    transition: all 0.4s cubic-bezier(0.2, 0, 0, 1);
                    transform-origin: bottom center;
                    z-index: -1;
                    border-radius: 10px;
                }

                &:hover{
                    color: #000;
                }

                &:hover:after{
                    right: 0;
                    left: 0;
                    height: 100%;
                }
            }
        }
    }
    ${({ visible }) => visible && css`
        opacity: 1;
        pointer-events: all; 
    `}

    >svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }
`