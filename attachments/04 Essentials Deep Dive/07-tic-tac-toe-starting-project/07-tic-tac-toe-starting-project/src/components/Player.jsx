import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setNewName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? <input className="player-name" type="text" required  value={newName} onChange={handleChange} /> : <span className="player-name">{newName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}