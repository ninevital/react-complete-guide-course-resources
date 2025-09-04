import { useState, useRef } from "react";

export default function TimerChallenge({title, time}) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, time * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {time} second{time > 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>Timer running...</p>
        </section>
    );
}
