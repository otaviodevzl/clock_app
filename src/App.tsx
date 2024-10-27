import { useState, useEffect } from "react";
import Container from "./components/Container";
import { ButtonStyles } from "./styles/button";
import { ClockContainer } from "./styles/clockcontainer";
import { Title } from "./styles/title";
import { FaPlay, FaPause } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  function togglePlayPause() {
    setIsRunning((prevState) => !prevState);
  }

  function handleReset() {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <>
      <Title>
        <div className="title">
          <h1>Clock App</h1>
        </div>
      </Title>
      <Container>
        <ClockContainer>
          <div>
            {String(Math.floor(time / 3600)).padStart(2, "0")}
            <span>Horas</span>
          </div>
          <div>
            {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}
            <span>Minutos</span>
          </div>
          <div>
            {String(time % 60).padStart(2, "0")}
            <span>Segundos</span>
          </div>
        </ClockContainer>
        <div style={{ display: "flex", gap: "26px" }}>
          <ButtonStyles onClick={togglePlayPause}>
            {isRunning ? <FaPause /> : <FaPlay />}
          </ButtonStyles>

          <ButtonStyles onClick={handleReset}>
            <GrPowerReset />
          </ButtonStyles>
        </div>
      </Container>
    </>
  );
}

export default App;

