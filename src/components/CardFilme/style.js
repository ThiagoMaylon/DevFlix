import styled from "styled-components";

export const CardStyle = styled.div`
    width: 250px;
    background-color: #000000;
    text-align: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    img{
        width: 100%
    }
    h2{
        font-size: 1em;
        color: #FFFFFF;
        padding: 5px;
    }

    button{
        outline: none;
        background-color: #006400;
        color: #FFFFFF;
        width: 100%;
        border: 2px solid #006400;
        cursor: pointer;
        padding: 10px 0;
        font-size: 1em;
        transition: 0.5s;

        &:hover{
            background-color: transparent;
            border: 2px solid #006400;
            color: #006400;
        }
    }
`