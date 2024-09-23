import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-check form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isEditMode}
                    onChange={() => { setIsEditMode(!isEditMode); }}
                    role="switch"
                />
                <label className="form-check-label">Edit Mode</label>
            </div>
            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                        role="textbox"
                    />
                    <div>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => { setIsStudent(!isStudent); }}
                            role="checkbox"
                            aria-label="student status"
                        />
                        <label>Student</label>
                    </div>
                </div>
            :   <div>
                    <p>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </p>
                </div>
            }
        </div>
    );
}
