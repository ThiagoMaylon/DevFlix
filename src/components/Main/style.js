import styled from "styled-components";

export const MainStyle = styled.main`
    width: 100vw;
    color: #FFFFFF;


`;


export const MainContainer = styled.div`
    max-width: 900px;
    min-width: 250px;
    padding: 10px;
    margin: auto;
    
    h2{
        text-align: center;
        width: 100%;
        margin: auto;
        padding: 10px 0;
    }
    .container-cards{
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
        gap: 30px;
    }
`;