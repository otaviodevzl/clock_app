import styled from "styled-components";

export const ClockContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

    display: flex;
    align-items: center;
    height: 250px;
    width: 650px;
    background-color: #262626;
    border-radius: 12px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 150px;
        height: 150px;
        font-size: 44px;
        font-family: "Orbitron", sans-serif;
        color: #F2F2F2;
        background-color: #404040;
        margin-left: 44px;
        margin-right: 44px;
        font-weight: bold;
        border-radius: 8px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    }

    div span {
        font-size: 22px;
        font-family: "Orbitron", sans-serif;
    }
`