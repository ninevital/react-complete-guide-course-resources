import { useState } from "react";
import Input from "./Input.jsx";

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === "email") {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes("@");
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <div id="auth-inputs" className="mx-auto w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
            <div className="flex flex-col gap-2 mb-6">
                <Input
                    label={"Email"}
                    type="email"
                    invalid={emailNotValid}
                    onChange={(event) =>
                        handleInputChange("email", event.target.value)
                    }
                />
                <Input
                label={"Password"}
                    type="password"
                    invalid={passwordNotValid}
                    onChange={(event) =>
                        handleInputChange("password", event.target.value)
                    }
                />
            </div>
            <div className="flex gap-4 justify-end">
                <button type="button" className="text-amber-400 hover:text-amber-600">
                    Create a new account
                </button>
                <button className="bg-amber-400 hover:bg-amber-600 rounded px-2 py-2 uppercase" onClick={handleLogin}>
                    Sign In
                </button>
            </div>
        </div>
    );
}
