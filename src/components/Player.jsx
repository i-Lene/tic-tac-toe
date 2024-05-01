import { useState } from "react"

export default function Player({ name, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name)

    function handleEditClick() {
        setIsEditing(wasEditing => !wasEditing);
    }

    function handleOnChange(event) {
        const newName = event.target.value;
        setPlayerName(newName);
    }

    let playerNames = !isEditing ? <span className="player-name">
        {playerName}
    </span> : <input type="text" required onChange={handleOnChange} value={playerName} />

    return (
        <li className={isActive ? 'active' : ''}>
            <div className="player">
                {playerNames}
                <span className="player-symbol">
                    {symbol}
                </span>
                <button onClick={handleEditClick}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </div>
        </li>
    )
}