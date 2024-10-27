import styled from "styled-components";

export const ButtonStyles = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #404040;
    font-size: 16px;
    color: #F2F2F2;
    margin-top: 20px;
    border-radius: 50%;
    border: none;
    font-family: "Orbitron", sans-serif;
    cursor: pointer;
    transition: 250ms color;

    &:hover {
        color: #C5D1D9;
    }
`