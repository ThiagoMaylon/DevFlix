import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 100px;
    background-color: #000;
    .btn-menu-mobile{
        display: none;
    }

    @media (max-width: 600px) {
        .btn-menu-mobile{
            display: block;
        }
    }
`
export const HeaderContainer = styled.div`
    margin: auto;
    max-width: 900px;
    min-width: 200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo a {
        color: #FFFFFF;
        font-size: 2em;
        text-decoration: none;
        font-weight: bold;
    }

    .menu nav ul {
        display: flex;
        gap: 10px;

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


    @media (max-width: 600px) {
        & > .menu{
            display: none;
        }
   
    }
    @media (max-width: 900px) {
        padding: 0px 10px;
    }
` 