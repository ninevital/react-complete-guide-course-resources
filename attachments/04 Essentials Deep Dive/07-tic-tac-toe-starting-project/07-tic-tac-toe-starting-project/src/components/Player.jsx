import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleClick() {
        setIsEditing((editing) => !editing);

        if (isEditing) {
            onNameChange(newName, symbol);
        }
    }

    function handleChange(event) {
        setNewName(event.target.value);
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {isEditing ? <input className="player-name" type="text" required  value={newName} onChange={handleChange} /> : <span className="player-name">{newName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}