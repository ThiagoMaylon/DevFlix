import styled from "styled-components";

export const InputStyle = styled.form`
    width: 100vw;
    background-color: #000000; 
    padding: 0px 10px 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    input{
        border: none;
        border: 2px solid #FFFFFF;
        outline: none;
        background: transparent;
        color: #FFFFFF;
        font-size: 18px;
        padding: 0 5px;
        height: 30px;
        width: 350px;
        min-width: 200px;
    }

    button{
        background-color: #FFFFFF;
        outline: none;
        cursor: pointer;
        border: 2px solid #FFFFFF;
        height: 34px;
        width: 40px;
        margin-right: 10px;
    }
`