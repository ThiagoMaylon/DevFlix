import styled from "styled-components";

export const SinglePageStyle = styled.div`
    color: #FFFFFF;
    max-width: 900px;
    min-width: 200px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        max-width: 600px;
        min-width: 200px;
    }

    .container-info{
        h2{
            text-align: center;
            padding: 10px;
        }

        .nota{
            margin: 5px 0 10px;
        }
        span{
            font-size: 1.5em;
        }
        .sinopse{
            padding: 5px 0;
        }
    }
`