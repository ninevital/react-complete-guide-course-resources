// Ref forwarding testing for React under 19 versions
// import { forwardRef } from "react";

// const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
//     return (
//         <dialog className="result-modal" ref={ref}>
//             <h2>You {result}</h2>
//             <p>The target time was <strong>{targetTime} seconds</strong></p>
//             <p>You stopped the timer with <strong>X seconds left</strong></p>
//                 <form method="dialog">
//                     <button>Close</button>
//                 </form>
//             </dialog>
//     )
// })

// export default ResultModal;
import { createPortal } from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  timeRemaining,
  onSubmit,
}) {
  const result = timeRemaining > 0 ? "won" : "lost";
  const formatedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog className="result-modal" ref={ref} onClose={onSubmit}>
      <h2>You {result}!</h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      {result === "won" && (
        <>
          <p>
            Your score: <strong>{score}</strong>
          </p>
          <p>
            You stopped the timer with{" "}
            <strong>{formatedTime} seconds left</strong>
          </p>
        </>
      )}
      <form method="dialog" onSubmit={onSubmit}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
