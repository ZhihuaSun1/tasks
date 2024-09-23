import React, { useState } from "react";

export function EditMode() {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-check form-switch">
                <input
                    id="editModeSwitch"
                    className="form-check-input"
                    role="checkbox"
                    type="checkbox"
                    checked={editMode}
                    onChange={() => { setEditMode(!editMode); }}
                />
                <label className="form-check-label" htmlFor="editModeSwitch">
                    Edit Mode
                </label>
            </div>

            {editMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                        aria-label="Name Input"
                    />
                    <div>
                        <input
                            id="studentStatusCheckbox"
                            type="checkbox"
                            checked={isStudent}
                            role="checkbox"
                            onChange={() => { setIsStudent(!isStudent); }}
                        />
                        <label htmlFor="studentStatusCheckbox">
                            Are you a student?
                        </label>
                    </div>
                </div>
            :   <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            }
        </div>
    );
}

export default EditMode;
