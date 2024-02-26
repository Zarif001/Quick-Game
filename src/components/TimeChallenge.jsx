import React from "react";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimeChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  const handleClick = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        onReset={handleReset}
        remainingTime={timeRemaining}
      />
      <section className="challenge">
        <h2>{title} </h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleClick}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Timer is running" : "Time inactive"}
        </p>
      </section>
    </>
  );
}
