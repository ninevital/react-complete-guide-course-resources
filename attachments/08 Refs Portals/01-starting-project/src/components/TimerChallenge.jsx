import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, time }) {
    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(time * 1000);
    const timerIsActive = timeRemaining < time * 1000 && timeRemaining > 0;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(time * 1000);
        dialog.current.showModal();
    }

    function handleStart() {
        // setTimerStarted(true);
        timer.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 100)
            }, 100);
    }
    function handleStop() {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    return (
        <>
            <ResultModal ref={dialog} result="lost" targetTime={time} />
            <section className="challenge">
                <h2>{title}</h2>
                {timerIsActive && <p>You lost!</p>}
                <p className="challenge-time">
                    {time} second{time > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? "active" : undefined}>
                    Timer running...
                </p>
            </section>
        </>
    );
}
