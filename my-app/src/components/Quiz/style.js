import styled from "styled-components";

export const QuizContainer = styled.div`
    padding: 20px;
    text-align:center;

    .options{
        border: solid black 2px;
        background-color: #879381;
        padding: 10px;
        margin: 10px auto;
        width: 50%;
        cursor: pointer;
    }
    .options:hover{
        background-color: #17239273;
    }

    .questionTitle{
        margin: 10px 0;
        color: #751f65;
        font-size: 19px;
    }

    .level{
        margin: 0 0 20px;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    button{
        cursor: pointer;
        padding: 7px;
        font-weight: bold;
    }

    .loading {
        color: #751f65;
        padding: 70px;
    }

    div{
        margin-top: 15px;
    }

    @media only screen and (min-width: 768px) {
        h3.level{
            margin: 0 50px 20px;
            text-align: right;
        }

        h3 {
            font-size: 23px;
        }

        .questionTitle{
            margin: 30px 0;
            font-size: 23px;
        }
    }
`

export const OptionsContainer = styled.div`
    display: inblock;

    

    button{
    margin: 5px auto;
    padding: 5px;
    width: 30vw;
    }
`